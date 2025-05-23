"use client";

import Sidebar from "@/components/sections/Sidebar";
import { projectContent } from "@/lib/projectDetails";
import { atom, useAtom } from "jotai";
import Link from "next/link";
import { motion } from "framer-motion";

const currentIndexAtom = atom(0);

function Projects() {
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);
  const { title, clients } = projectContent;
  const currentClient = clients[currentIndex];

  const handleNext = () => {
    if (currentIndex < clients.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(clients.length - 1);
    }
  };

  return (
    <div className="h-full w-full">
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
          className="flex flex-col justify-center md:justify-center lg:justify-start items-center h-[92%] lg:h-full w-full lg:w-[80%] p-4 lg:py-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-between items-center w-full h-full rounded-lg px-4 md:px-8">
            <div className="flex flex-col justify-between items-start w-full h-full py-2 md:py-0 lg:py-8">
              {/* Title */}
              <div className="flex justify-center items-center w-full">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-purple-950">
                  {title}
                </h1>
              </div>

              {/* Client Description */}
              <div className="w-full h-[85%] flex flex-col justify-evenly gap-5 md:gap-0 py-4 mt-2 lg:mt-4 border-y-2 border-purple-900/20">
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-lg md:text-xl lg:text-3xl font-semibold">
                    {currentClient.name}
                  </h2>
                  <p className="text-sm md:text-base">
                    {currentClient.description}
                  </p>
                </div>

                {/* Project Cards */}
                <div className="flex flex-row justify-start items-start w-full gap-5 overflow-x-scroll lg:overflow-x-none scrollbar-hide">
                  {currentClient.projects?.map((project, index) => (
                    <Link
                      key={index}
                      href={`/my-projects/${project.href}`}
                      className="hover:cursor-pointer"
                    >
                      <div className="w-full flex-shrink-0 min-w-[15rem] md:w-[24rem] md:min-w-[24rem] lg:w-[28rem] lg:min-w-[28rem] p-4 flex flex-col gap-4 rounded-3xl text-purple-950 hover:shadow-xl hover:shadow-pink-200/20 hover:bg-gradient-to-b hover:from-purple-700/30 hover:to-yellow-100/80 bg-purple-950/20 transition">
                        <div>
                          <h3 className="text-sm md:text-lg lg:text-xl font-bold">
                            {project.client}
                          </h3>
                        </div>
                        <div className="w-full aspect-video">
                          <video
                            className="w-full h-full object-cover rounded-2xl"
                            src={project.poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                        <p className="text-sm">
                          <b>Built using:</b>{" "}
                          {[
                            ...(project.tools.frameworks?.frontend || []),
                            ...(project.tools.libraries?.frontend || []),
                            ...(project.tools.frameworks?.styling || []),
                            ...(project.tools.languages?.styling || []),
                            ...(project.tools.runtimeEnvironments || []),
                            ...(project.tools.frameworks?.backend || []),
                            ...(project.tools.languages?.programming || []),
                          ].join(", ")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-row justify-between w-full gap-4 mt-3">
                <button
                  onClick={handlePrevious}
                  className="px-5 py-2 lg:py-3 text-sm rounded hover:cursor-pointer border-2 border-purple-200 bg-purple-100 hover:border-yellow-50 hover:bg-yellow-100"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-5 py-2 lg:py-3 text-sm rounded hover:cursor-pointer border-2 border-purple-200 bg-purple-100 hover:border-yellow-50 hover:bg-yellow-100"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
