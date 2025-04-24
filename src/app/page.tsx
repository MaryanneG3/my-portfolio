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
    <div className="flex flex-col justify-center items-center h-full w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill z-0"
        src="/videos/light-bg-enhanced.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <main className="relative z-10 flex flex-row items-center justify-evenly w-full h-full bg-gradient-to-b from-purple-50/20 to-purple-500/20">
        <div
          className="h-full w-[30%]"
          onMouseOver={() => {
            setShowDetails(true);
          }}
        >
          <ProfileCard variant="landing-page" />
        </div>

        {showDetails && (
          <div className="flex flex-col justify-evenly items-center w-[70%] h-full pb-20 pt-10">
            <motion.div
              className="flex flex-col justify-center items-center w-[85%] h-[50%] text-center text-2xl text-purple-950"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h2
                className="text-4xl"
                initial={{ opacity: 0, z: 50 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Welcome to my website!
              </motion.h2>
              <br />
              <p>{personalDetails.description}</p>
              <br />
              <br />
              <br />
              <p>To learn more about me, click on one of the buttons below.</p>
            </motion.div>
            <motion.div
              className="flex flex-row justify-around items-center w-full h-[50%] gap-10 py-5 px-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
            >
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="flex flex-col justify-center items-center w-[50%] py-5 min-h-[30%] rounded-3xl text-white hover:text-purple-950 hover:shadow-xl hover:shadow-pink-200/20 hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-yellow-100/70 bg-purple-900/20"
                  onMouseOver={() => setHoveredLinkIndex(index)}
                  onMouseLeave={() => setHoveredLinkIndex(null)}
                >
                  {hoveredLinkIndex === index && (
                    <motion.div
                      className="items-center"
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        alt={link.title}
                        src={`/images/background/${link.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}.png`}
                        width={300}
                        height={300}
                      />
                    </motion.div>
                  )}
                  <p className="text-center text-2xl links-font">
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
