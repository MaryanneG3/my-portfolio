import { projectContent } from "@/lib/projectDetails";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

function ProjectDetails() {
  const { projectId } = useParams() as { projectId: string };

  const project = projectContent.clients
    .flatMap((client) => client.projects || [])
    .find((project) => project.href.startsWith(`${projectId}`));

  if (!project) return notFound();
  return (
    <div className="flex flex-col items-start gap-5 lg:gap-10 w-full h-full pr-4 md:pr-8 lg:pr-0 mt-10">
      <div className="w-full flex flex-col items-start pl-2 lg:pl-5 gap-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-900 mb-4">
          {project.client}
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-6 text-left max-w-5xl leading-[1.7]">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start w-full h-full gap-10 lg:gap-8">
        <div className="flex flex-col justify-between items-start gap-8 w-full h-full lg:w-[70%] px-0 lg:px-6 py-8 lg:py-8 lg:rounded-lg lg:border lg:border-purple-300 lg:bg-white/50">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-900">
            My Responsibilities
          </h2>
          <div className="h-full flex flex-col justify-between gap-5 ml-0 lg:ml-10 mb-0 lg:mb-10">
            {project.myContribution &&
              project.myContribution.map((contribution, index) => (
                <div key={index} className="flex flex-row gap-5">
                  <p>➜</p>
                  <p className="max-w-4xl text-sm md:text-md lg:text-lg">
                    {contribution}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 lg:items-end h-full w-[80%] md:w-[40%] lg:w-[30%]">
          <div className="h-full w-full lg:h-[22rem] flex flex-col justify-start gap-5 rounded-xl p-8 border border-purple-300 bg-white/50">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-900">
              Built using:
            </h2>
            <ul className="text-sm md:text-md lg:text-lg text-black list-disc list-inside">
              {[
                ...(project.tools.frameworks?.frontend || []),
                ...(project.tools.libraries?.frontend || []),
                ...(project.tools.frameworks?.styling || []),
                ...(project.tools.languages?.programming || []),
                ...(project.tools.languages?.styling || []),
                ...(project.tools.runtimeEnvironments || []),
                ...(project.tools.frameworks?.backend || []),
                ...(project.tools.versionControl || []),
                ...(project.tools.database || []),
                ...(project.tools.api?.architecture || []),
                ...(project.tools.api?.externalAPI || []),
              ].map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          {(project.gitRepository || project.liveUrl) && (
            <div className="h-full w-full lg:h-[22rem] flex flex-col justify-start gap-5 rounded-xl p-8 border border-purple-300 bg-white/50">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-900">
                Important Links
              </h2>
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-md md:text-lg lg:text-lg font-semibold">
                  GitHub Repository
                </h3>
                <a
                  href={project?.gitRepository}
                  target="_blank"
                  className="text-sm md:text-md lg:text-lg break-words max-w-full hover:underline"
                >
                  {project?.gitRepository}
                </a>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-md md:text-lg lg:text-lg font-semibold">
                  Live URL
                </h3>
                <a
                  href={project?.liveUrl}
                  target="_blank"
                  className="text-sm md:text-md lg:text-lg break-words max-w-full hover:underline"
                >
                  {project?.liveUrl}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
