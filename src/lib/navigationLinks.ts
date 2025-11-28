import { aboutContent } from "./aboutMe";

export const navigationLinks = [
  {
    key: "home",
    title: "Home",
    href: "/",
    imageURL: "home_gjx8zt",
  },
  {
    key: "projects",
    title: "My Projects",
    href: "/my-projects",
    imageURL: "my-projects_uw6jiu",
  },
  {
    key: "about",
    title: "About me",
    href: "/about-me",
    sublinks: aboutContent.sublinks.map((item) => ({
      label: item.label,
      href: `#${item.label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
    imageURL: "about-me_ow2dpb",
  },
  {
    key: "contact",
    title: "Contact me",
    href: "/my-contacts",
    imageURL: "contact-me_mg51ip",
  },
];
