import { aboutContent } from "./aboutMe";

export const navigationLinks = [
  {
    key: "home",
    title: "Home",
    href: "/",
<<<<<<< HEAD
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/home_v89oeo.png",
=======
    imageURL: "home_gjx8zt",
>>>>>>> 77d795795712ce513ddb3fb3fce076b12541bea1
  },
  {
    key: "about",
    title: "About me",
    href: "/about-me",
    sublinks: aboutContent.sublinks.map((item) => ({
      label: item.label,
      href: `#${item.label.toLowerCase().replace(/\s+/g, "-")}`,
    })),
<<<<<<< HEAD
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/about-me_qq0xbz.png",
=======
    imageURL: "about-me_ow2dpb",
>>>>>>> 77d795795712ce513ddb3fb3fce076b12541bea1
  },
  {
    key: "projects",
    title: "My Projects",
    href: "/my-projects",
<<<<<<< HEAD
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/my-projects_e7k7z0.png",
=======
    imageURL: "my-projects_uw6jiu",
>>>>>>> 77d795795712ce513ddb3fb3fce076b12541bea1
  },
  {
    key: "contact",
    title: "Contact me",
    href: "/my-contacts",
<<<<<<< HEAD
    imageURL:
      "https://res.cloudinary.com/dteupi9zp/image/upload/v1762838008/contact-me_m44yuh.png",
  },
];

// to do - fix project sublinks
=======
    imageURL: "contact-me_mg51ip",
  },
];
>>>>>>> 77d795795712ce513ddb3fb3fce076b12541bea1
