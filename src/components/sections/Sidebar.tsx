"use client";

import ProfileCard from "@/components/ui/ProfileCard";
import { navigationLinks } from "@/lib/navigationLinks";
import { atom, useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, BriefcaseIcon, FolderIcon, PhoneIcon } from "lucide-react"; // example icons

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
      <div className="flex w-full lg:hidden bg-white/40">
        <div className="flex items-center h-16 justify-around w-full">
          {navigationLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => router.push(link.href)}
              className="flex flex-col items-center rounded-xl px-5 py-2 text-purple-900 hover:text-purple-700 hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-yellow-100/70"
            >
              {getIcon(link.key)}
              <span className="text-xs">{link.title}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="hidden lg:flex w-[380px] h-full flex-col justify-between items-center gap-5 py-10 bg-white/40"
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
              <button
                className="w-full h-10 text-left text-2xl font-semibold text-purple-900"
                onMouseOver={toggleSublinks(link.key)}
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
                        className="flex items-center w-full px-5 py-2 text-xl text-left text-purple-800 cursor-pointer transition-colors duration-200 hover:rounded-lg hover:font-bold hover:bg-purple-50/30"
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

function getIcon(key: string) {
  switch (key) {
    case "home":
      return <HomeIcon size={24} />;
    case "projects":
      return <FolderIcon size={24} />;
    case "about":
      return <BriefcaseIcon size={24} />;
    case "contact":
      return <PhoneIcon size={24} />;
    default:
      return <HomeIcon size={24} />;
  }
}

export default Sidebar;
