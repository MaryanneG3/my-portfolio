"use client";

import Sidebar from "@/components/sections/Sidebar";
import { aboutContent } from "@/lib/aboutMe";
import { motion } from "framer-motion";

export default function About() {
  const { title, sublinks } = aboutContent;

  return (
    <div className="h-full w-full bg-[url('/images/background/ocean-bg-light.png')] bg-fill bg-center bg-cover bg-no-repeat lg:bg-none">
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full w-full bg-gradient-to-b from-purple-50/80 to-purple-500/30 lg:bg-none">
        <Sidebar />

        <motion.div
          className="flex flex-col justify-center md:justify-center lg:justify-start items-center h-[90%] lg:h-full w-full lg:w-[80%] px-4 py-2 lg:py-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full py-2 gap-5 lg:gap-10 lg:py-6 pl-2 pr-4 md:px-8">
            <div className="w-full sticky top-0 py-2 text-purple-950">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                {title}
              </h1>
            </div>
            <div className="flex flex-col items-start w-full max-h-[85vh] overflow-y-auto pr-4 md:pr-8 lg:pr-9 custom-scrollbar">
              <div className="w-full flex flex-col items-start pl-2 lg:pl-5 gap-10">
                {sublinks?.map((link, index) => (
                  <div
                    key={index}
                    id={link.label.toLowerCase().replace(/\s+/g, "-")}
                    className="flex flex-col justify-start items-start gap-6 lg:gap-10 pl-2 md:pl-8 lg:pl-10 h-full w-full pb-20"
                  >
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-950">
                      {link.label}
                    </h2>
                    {link.description &&
                      link.description.map((para, index) => (
                        <p
                          key={index}
                          className="text-sm md:text-md lg:text-lg leading-[1.55] lg:leading-[2.0]"
                        >
                          {para}
                        </p>
                      ))}

                    {link.certification &&
                      Object.values(link.certification).map((cert, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col justify-around items-start text-xl w-full"
                        >
                          <h3 className="text-sm md:text-md lg:text-lg font-semibold mb-4">
                            {cert.title}
                          </h3>
                          <div className="text-sm md:text-md lg:text-lg flex flex-col lg:flex-row justify-between gap-2 lg:gap-0 items-start w-full">
                            <div className="flex flex-col justify-start items-start gap-1 w-full lg:w-[70%]">
                              <p>{cert.institute}</p>
                              <p>
                                {cert.startdate} – {cert.enddate}
                              </p>
                            </div>
                            <div className="text-sm md:text-md lg:text-lg flex flex-col justify-center lg:items-end items-start w-full lg:w-[30%]">
                              {cert.certificateLink && (
                                <a
                                  href={cert.certificateLink}
                                  target="_blank"
                                  className="text-blue-800 underline text-sm md:text-md lg:text-lg"
                                >
                                  View Certificate
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                    {link.jobs &&
                      Object.values(link.jobs).map((job, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col justify-between items-start gap-10 text-sm md:text-md lg:text-lg"
                        >
                          <h3 className="text-md lg:text-xl font-semibold">
                            {job.title}
                          </h3>
                          <div>
                            <p>
                              {job.company} — {job.location}
                            </p>
                            <p>
                              {job.startdate} – {job.enddate}
                            </p>
                          </div>
                          {job.description.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
