import Sidebar from "@/components/sections/Sidebar";
import { aboutContent } from "@/lib/aboutMe";

export default function About() {
  const { title, sublinks } = aboutContent;

  return (
    <div className="h-full w-full bg-[url('/images/background/ocean-bg-light.png')] bg-fill bg-center bg-cover bg-no-repeat">
      <div className="relative z-10 flex flex-col lg:flex-row justify-around items-center h-full w-full bg-gradient-to-b from-purple-50/20 to-purple-500/20">
        <Sidebar />

        <div className="flex flex-col justify-center md:justify-center lg:justify-start items-center h-full w-full lg:w-[70%] p-4">
          <div className="flex flex-col justify-center items-center w-full h-full rounded-lg shadow-lg py-6 px-4 md:px-8 bg-white/30">
            <div className="flex flex-col justify-between items-start w-full h-full gap-15 pr-10 custom-scrollbar overflow-y-scroll">
              <div className="w-full h-full min-h-full flex flex-col justify-between items-start gap-10 p-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {title}
                </h1>
                {sublinks?.map((link, index) => (
                  <div
                    key={index}
                    id={link.label.toLowerCase().replace(/\s+/g, "-")}
                    className="flex flex-col justify-start items-start gap-10 pl-10 h-full min-h-full w-full"
                  >
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                      {link.label}
                    </h2>
                    {link.description &&
                      link.description.map((para, index) => (
                        <p key={index} className="text-xl leading-[1.55]">
                          {para}
                        </p>
                      ))}

                    {link.certification &&
                      Object.values(link.certification).map((cert, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col justify-around items-start text-xl w-full"
                        >
                          <h3 className="text-xl font-semibold mb-5">
                            {cert.title}
                          </h3>
                          <div className="flex flex-row justify-between items-start w-full">
                            <div className="flex flex-col justify-start items-start gap-2 w-[70%]">
                              <p>{cert.institute}</p>
                              <p>
                                {cert.startdate} – {cert.enddate}
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-end w-[30%]">
                              {cert.certificateLink && (
                                <a
                                  href={cert.certificateLink}
                                  target="_blank"
                                  className="text-blue-800 underline"
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
                          className="flex flex-col justify-between items-start gap-10 text-xl"
                        >
                          <h3 className="text-2xl font-semibold">
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
                          <div className="flex flex-row gap-4 justify-between items-start w-full">
                            <div className="flex flex-col gap-4">
                              <p className="font-semibold">Soft skills:</p>
                              <ul className="flex flex-col list-disc list-inside gap-2">
                                {job.skillsAcquired?.softSkills.map(
                                  (skill, i) => (
                                    <li key={i}>{skill}</li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                              <p className="font-semibold">Hard skills:</p>
                              <ul className="flex flex-col list-disc list-inside gap-2">
                                {job.skillsAcquired?.hardSkills.map(
                                  (skill, i) => (
                                    <li key={i}>{skill}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
