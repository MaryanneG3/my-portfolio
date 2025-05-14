"use client";

import { projectContent } from "@/lib/projectDetails";
import Sidebar from "@/components/sections/Sidebar";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import ProjectDetails from "@/components/projects/ProjectDetails";

export default function ProjectPage() {
  const { projectId } = useParams() as { projectId: string };

  const project = projectContent.clients
    .flatMap((client) => client.projects || [])
    .find((project) => project.href.startsWith(`${projectId}`));

  if (!project) return notFound();

  return (
    <div className="h-full min-h-screen w-full">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        src="/videos/light-bg-enhanced.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full w-full bg-gradient-to-b from-purple-50/70 to-purple-500/30 lg:from-purple-50/50 lg:to-purple-500/20">
        <Sidebar />

        <motion.div
          className="flex flex-col justify-center md:justify-center lg:justify-start items-center h-[92%] lg:h-full w-full lg:w-[90%] p-4 lg:py-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start w-full min-h-full overflow-y-auto pr-4 md:pr-8 lg:pr-9 custom-scrollbar">
            <div className="w-full flex flex-col items-start pl-2 lg:pl-5 gap-10 pb-8">
              <ProjectDetails />

              {/* Live Preview iframe only on md+ screens if liveUrl exists */}
              {project.liveUrl && (
                <div className="w-full hidden md:block">
                  <iframe
                    src={project.liveUrl}
                    className="w-full max-w-6xl md:h-[80vh] lg:h-[90vh] mt-6 rounded-lg border border-purple-300"
                    loading="lazy"
                    title={`${project.client} Live Preview`}
                  ></iframe>
                </div>
              )}

              {/* Videos on small screens if liveUrl exists */}
              {project.liveUrl && (
                <div className="w-full block md:hidden">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-900">
                    Project Videos
                  </h2>
                  {project.videoMedia?.map((video, index) => (
                    <div key={index} className="flex flex-col pt-5">
                      <h3 className="text-md md:text-lg lg:text-xl font-bold text-purple-900">
                        {video.alt}
                      </h3>
                      <video
                        className="w-full max-w-6xl h-auto mt-6 rounded-lg border border-purple-300"
                        src={video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        title={`${video.alt} Video Preview`}
                      ></video>
                    </div>
                  ))}
                </div>
              )}

              {/* If no liveUrl, always show videos on all screen sizes */}
              {!project.liveUrl && (
                <div className="w-full">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-900">
                    Project Videos
                  </h2>
                  {project.videoMedia?.map((video, index) => (
                    <div key={index} className="flex flex-col pt-5">
                      <h3 className="text-md md:text-lg lg:text-xl font-bold text-purple-900">
                        {video.alt}
                      </h3>
                      <video
                        className="w-full max-w-6xl h-auto mt-6 rounded-lg border border-purple-300"
                        src={video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        title={`${video.alt} Video Preview`}
                      ></video>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
