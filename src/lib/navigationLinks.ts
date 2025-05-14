import { aboutContent } from "./aboutMe";
// import { projectContent } from "./projectDetails";

export const navigationLinks = [
  {
    key: "home",
    title: "Home",
    href: "/",
  },
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
    // sublinks: projectContent.clients.map((item) => ({
    //   label: item.name,
    //   href: `#${item.name.toLowerCase().replace(/\s+/g, "-")}`,
    // })),
  },
  {
    key: "contact",
    title: "Contact me",
    href: "/my-contacts",
  },
];

// to do - fix project sublinks
