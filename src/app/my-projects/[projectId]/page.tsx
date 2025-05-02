"use client";

import { projectContent } from "@/lib/projectDetails";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { projectId } = useParams() as { projectId: string };

  const project = projectContent.clients
    .flatMap((client) => client.projects || [])
    .find((project) => project.href.startsWith(`${projectId}`));

  if (!project) return notFound();

  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center bg-purple-50">
      <h1 className="text-3xl font-bold text-purple-900 mb-4">
        {project.client}
      </h1>
      <p className="mb-6 text-center max-w-2xl">{project.description}</p>

      <video
        className="w-full max-w-4xl rounded-lg shadow-lg mb-4"
        src={project.videoSrc}
        poster={project.videoPoster}
        controls
      />

      <h2 className="text-xl font-semibold mt-6 mb-2">Built using:</h2>
      <ul className="text-sm text-purple-800 list-disc list-inside">
        {[
          ...(project.tools.frameworks?.frontend || []),
          ...(project.tools.libraries?.frontend || []),
          ...(project.tools.frameworks?.styling || []),
          ...(project.tools.languages?.programming || []),
          ...(project.tools.languages?.styling || []),
          ...(project.tools.runtimeEnvironments || []),
          ...(project.tools.versionControl || []),
          ...(project.tools.database || []),
          ...(project.tools.api?.architecture || []),
          ...(project.tools.api?.externalAPI || []),
        ].map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}
