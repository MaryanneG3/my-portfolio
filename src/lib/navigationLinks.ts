import { aboutContent } from "./aboutMe";

export const navigationLinks = [
  {
    key: "about",
    title: "About me",
    href: "/about-me",
    sublinks: aboutContent.sublinks.map((item) => ({
      label: item.label,
      href: `#${item.label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    key: "projects",
    title: "My Projects",
    href: "/my-projects",
  },
  {
    key: "contact",
    title: "Contact me",
    href: "/my-contacts",
  },
];
