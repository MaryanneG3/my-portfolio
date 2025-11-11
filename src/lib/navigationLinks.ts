import { aboutContent } from "./aboutMe";

export const navigationLinks = [
  {
    key: "home",
    title: "Home",
    href: "/",
    imageURL: "home_v89oeo",
  },
  {
    key: "about",
    title: "About me",
    href: "/about-me",
    sublinks: aboutContent.sublinks.map((item) => ({
      label: item.label,
      href: `#${item.label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
    imageURL: "about-me_qq0xbz",
  },
  {
    key: "projects",
    title: "My Projects",
    href: "/my-projects",
    imageURL: "my-projects_e7k7z0",
  },
  {
    key: "contact",
    title: "Contact me",
    href: "/my-contacts",
    imageURL: "contact-me_m44yuh",
  },
];
