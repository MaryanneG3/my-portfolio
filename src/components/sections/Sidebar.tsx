"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "@/components/ui/ProfileCard";
import Link from "next/link";
import { navigationLinks } from "@/lib/navigationLinks";
import { atom, useAtom } from "jotai";

const openSectionAtom = atom<string | null>(null);

const Sidebar = () => {
  const [openSection, setOpenSection] = useAtom(openSectionAtom);
  const toggleSublinks = (key: string) => () => {
    setOpenSection(openSection === key ? null : key);
  };
  return (
    <motion.div
      className="w-[350px] h-full flex flex-col justify-between items-center gap-5 py-10 bg-white/40"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div>
        <ProfileCard variant="sidebar" />
      </div>
      <div className="border-b-2 border-purple-900/50 w-[90%]"></div>

      <div className="flex flex-col justify-start items-start gap-10 h-full w-full px-10">
        {navigationLinks.map((link) => (
          <div key={link.key}>
            <Link
              href={link.href}
              className="w-full h-10 text-left text-2xl font-semibold text-purple-900"
              onMouseOver={toggleSublinks(link.key)}
            >
              {link.title}
            </Link>
            <AnimatePresence>
              {openSection === link.key && link.sublinks && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-2 mt-2 flex flex-col gap-1 w-full h-full"
                >
                  {link.sublinks.map((sublink, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const element = document.getElementById(
                          sublink.href.replace("#", "")
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="h-18 w-full flex items-center pl-5 py-1 text-xl text-left text-purple-800 cursor-pointer transition-colors duration-200 hover:rounded-lg hover:font-bold hover:bg-purple-50/30"
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
  );
};

export default Sidebar;
