import { aboutContent } from "./aboutMe";

export const navigationLinks = [
  {
    key: "home",
    title: "Home",
    href: "/",
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/home_v89oeo.png",
  },
  {
    key: "about",
    title: "About me",
    href: "/about-me",
    sublinks: aboutContent.sublinks.map((item) => ({
      label: item.label,
      href: `#${item.label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/about-me_qq0xbz.png",
  },
  {
    key: "projects",
    title: "My Projects",
    href: "/my-projects",
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/my-projects_e7k7z0.png",
  },
  {
    key: "contact",
    title: "Contact me",
    href: "/my-contacts",
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/contact-me_m44yuh.png",
  },
];

// to do - fix project sublinks
