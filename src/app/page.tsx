"use client";

import { atom, useAtom } from "jotai";
import { personalDetails } from "@/lib/personalDetails";
import { navigationLinks } from "@/lib/navigationLinks";
import { motion } from "framer-motion";
import ProfileCard from "@/components/ui/ProfileCard";
import Link from "next/link";
import Image from "next/image";

const showDetailsAtom = atom(false);
const hoveredLinkIndexAtom = atom<number | null>(null);

function Home() {
  const [showDetails, setShowDetails] = useAtom(showDetailsAtom);
  const [hoveredLinkIndex, setHoveredLinkIndex] = useAtom(hoveredLinkIndexAtom);

  return (
    <div className="flex flex-row lg:flex-col justify-center items-center h-full w-full">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        src="/videos/light-bg-enhanced.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <main className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center justify-start lg:justify-evenly w-full h-full bg-gradient-to-b from-purple-50/20 to-purple-500/20">
        {!showDetails && (
          <div
            className="h-full w-full lg:w-[20%]"
            onClick={() => setShowDetails(true)}
            onMouseOver={() => setShowDetails(true)}
          >
            <ProfileCard variant="landing-page" />
          </div>
        )}

        {showDetails && (
          <div className="flex flex-col justify-evenly pt-5 items-center w-full md:w-full lg:w-[80%] h-full">
            <motion.div
              className="flex flex-col justify-center items-center w-[85%] lg:w-[70%] h-[55%] lg:h-[40%] text-center text-lg md:text-xl lg:text-2xl text-purple-950"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl pb-4 lg:pb-10"
                initial={{ opacity: 0, z: 50 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Welcome to my website!
              </motion.h2>

              <p className="pb-6 lg:pb-10">{personalDetails.description}</p>

              <p>To learn more about me, click on one of the buttons below.</p>
            </motion.div>

            {/* Navigation buttons */}
            <motion.div
              className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full h-[45%] lg:h-[60%] gap-5 lg:gap-10 px-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
            >
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="flex flex-col justify-center items-center w-full lg:w-[50%] py-5 h-[30px] lg:h-auto lg:min-h-[20%] rounded-3xl text-white hover:text-purple-950 hover:shadow-xl hover:shadow-yellow-200/20 lg:hover:bg-gradient-to-b lg:hover:from-purple-900/50 lg:hover:via-purple-900/20 lg:hover:to-yellow-100/70 hover:bg-amber-100/40 bg-purple-900/20"
                  onMouseOver={() => setHoveredLinkIndex(index)}
                  onMouseLeave={() => setHoveredLinkIndex(null)}
                >
                  {hoveredLinkIndex === index && (
                    <div className="hidden lg:flex items-center">
                      <motion.div
                        className="items-center"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          alt={link.title}
                          src={`/images/icons/${link.title
                            .toLowerCase()
                            .split(" ")
                            .join("-")}.png`}
                          width={280}
                          height={280}
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                        />
                      </motion.div>
                    </div>
                  )}
                  <p className="text-center text-lg md:text-xl lg:text-2xl links-font">
                    {link.title}
                  </p>
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
