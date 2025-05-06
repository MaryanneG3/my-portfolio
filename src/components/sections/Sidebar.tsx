"use client";

import ProfileCard from "@/components/ui/ProfileCard";
import { navigationLinks } from "@/lib/navigationLinks";
import Image from "next/image";
import { atom, useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const openSectionAtom = atom<string | null>(null);

const Sidebar = () => {
  const [openSection, setOpenSection] = useAtom(openSectionAtom);
  const toggleSublinks = (key: string) => () => {
    setOpenSection(openSection === key ? null : key);
  };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* header - for small screens */}
      <motion.div
        className="flex lg:hidden shadow-md shadow-purple-100/10 w-full h-14 bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        <div className="flex items-center justify-evenly w-full h-full">
          {navigationLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => router.push(link.href)}
              className={`flex flex-col md:flex-row items-center justify-center rounded-xl h-[80%] w-[20%] relative text-purple-900
                ${
                  pathname === link.href
                    ? "border border-purple-500/20 bg-pink-200/20"
                    : ""
                }
              `}
            >
              <div className="relative w-12 h-12 border-none md:border md:border-r-2">
                <Image
                  alt={link.title}
                  src={`/images/icons/${link.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}.png`}
                  fill
                />
              </div>
              <span className="text-xs hidden md:block">{link.title}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* sidebar - for medium and large screens */}
      <motion.div
        className="hidden lg:flex w-[380px] h-full flex-col justify-between items-center gap-5 py-10 bg-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          <ProfileCard variant="sidebar" />
        </div>
        <div className="border-b-2 border-purple-900/40 w-[80%]"></div>

        <div className="flex flex-col justify-start items-start gap-5 h-full w-full px-10">
          {navigationLinks.map((link) => (
            <div key={link.key}>
              <button
                className="w-full min-w-[15vw] px-5 h-10 text-left text-xl font-semibold text-purple-900 rounded-xl hover:cursor-pointer hover:bg-purple-900/20"
                onClick={() => {
                  if (!link.sublinks || link.sublinks.length === 0) {
                    router.push(link.href);
                  } else {
                    toggleSublinks(link.key)();
                  }
                }}
              >
                {link.title}
              </button>

              <AnimatePresence>
                {openSection === link.key && link.sublinks && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-2 mt-2 flex flex-col gap-1 w-full"
                  >
                    {link.sublinks.map((sublink, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const targetUrl = `${link.href}${sublink.href}`;
                          if (pathname === link.href) {
                            const element = document.getElementById(
                              sublink.href.replace("#", "")
                            );
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          } else {
                            router.push(targetUrl);
                          }
                        }}
                        className="flex items-center w-full px-5 py-2 text-lg text-left text-purple-800 cursor-pointer transition-colors duration-200 hover:rounded-lg hover:font-bold hover:bg-purple-200/60"
                      >
                        {sublink.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
