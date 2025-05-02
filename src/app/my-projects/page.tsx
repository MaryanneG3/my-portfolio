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
    <div className="h-full w-full bg-[url('/images/background/ocean-bg-light.png')] bg-fill bg-center bg-cover bg-no-repeat">
      <div className="relative z-10 flex flex-col lg:flex-row justify-around items-center h-full w-full bg-gradient-to-b from-purple-50/20 to-purple-500/20">
        <Sidebar />

        <motion.div
          className="flex flex-col justify-center md:justify-center lg:justify-start items-center h-full w-full lg:w-[70%] p-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full rounded-lg shadow-lg py-6 px-4 md:px-8 bg-white/30">
            <div className="flex flex-col justify-between items-start w-full h-full gap-5">
              {/* Title */}
              <div className="flex justify-center items-center w-full">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-950">
                  {title}
                </h1>
              </div>

              {/* Client Description */}
              <div className="w-full h-[80%] flex flex-col justify-evenly gap-5 p-4 border-y-2 border-purple-900/20">
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                    {currentClient.name}
                  </h2>
                  <p className="text-sm md:text-base">
                    {currentClient.description}
                  </p>
                </div>

                {/* Project Cards */}
                <div className="flex flex-row justify-start items-start w-full gap-6 overflow-x-scroll lg:overflow-x-none scrollbar-hide">
                  {currentClient.projects?.map((project, index) => (
                    <Link
                      key={index}
                      href={`/my-projects/${project.href}`}
                      className="hover:cursor-pointer"
                    >
                      <div className="w-full flex-shrink-0 min-w-[17rem] md:w-[24rem] md:min-w-[24rem] lg:w-[28rem] lg:min-w-[28rem] p-5 flex flex-col gap-4 rounded-3xl text-purple-950 hover:shadow-xl hover:shadow-pink-200/20 hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-yellow-100/70 bg-purple-900/20 transition">
                        <div>
                          <h3 className="text-md md:text-lg lg:text-2xl font-bold">
                            {project.client}
                          </h3>
                        </div>
                        <div className="w-full aspect-video">
                          <video
                            className="w-full h-full object-cover rounded-2xl"
                            src={project.videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                        <p className="text-sm">
                          Built using:{" "}
                          {[
                            ...(project.tools.frameworks?.frontend || []),
                            ...(project.tools.libraries?.frontend || []),
                            ...(project.tools.frameworks?.styling || []),
                            ...(project.tools.languages?.styling || []),
                          ].join(", ")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-row justify-between w-full gap-4 mt-4">
                <button
                  onClick={handlePrevious}
                  className="px-5 py-3 bg-yellow-50 text-sm rounded hover:bg-yellow-100"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-5 py-3 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
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
