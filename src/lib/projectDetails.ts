type Toolset = {
  frameworks?: {
    frontend?: string[];
    backend?: string[];
    styling?: string[];
  };
  runtimeEnvironments?: string[];
  libraries?: {
    frontend?: string[];
    backend?: string[];
  };
  languages?: {
    programming?: string[];
    styling?: string[];
  };
  versionControl?: string[];
  api?: {
    architecture?: string[];
    externalAPI?: string[];
  };
  database?: string[];
};

type Project = {
  client: string;
  description: string;
  tools: Toolset;
  href: string;
  videoSrc: string;
  videoPoster: string;
  videoAlt: string;
  gitRepository?: string;
};

type Clients = {
  name: string;
  description: string;
  projects?: Project[];
};

type ProjectContent = {
  title: string;
  clients: Clients[];
};

export const projectContent: ProjectContent = {
  title: "My Projects",
  clients: [
    {
      name: "Seen Ventures",
      description:
        "Internship with Seen Ventures working on a project for the Auckland Kindergarten Association.",
      projects: [
        {
          client: "Auckland Kindergarten Association",
          description:
            "Built a website prototype that showcases the association’s values, history, and daily operations. Developed with designs from the UX team, which included timeline and 'Moments with Tamariki and Kaiako' features.",
          tools: {
            frameworks: { frontend: ["Next.js"], styling: ["Tailwind CSS"] },
            libraries: { frontend: ["Jotai"] },
            languages: { programming: ["TypeScript"], styling: ["CSS"] },
            versionControl: ["Git"],
          },
          href: "aka",
          videoSrc: "/videos/projects/aka/Landing Page - Learn More.mp4",
          videoPoster: "/images/aka-poster.png",
          videoAlt: "Auckland Kindergarten Association project video",
        },
      ],
    },
    {
      name: "Mission Ready",
      description: "This will be a brief summary of Mission Ready projects.",
      projects: [
        {
          client: "Z-Fuel",
          description:
            "A redesigned Z Energy station locator app that helps users quickly find nearby stations, compare fuel prices, filter by services, and order products online.",
          tools: {
            frameworks: { backend: ["Express.js"], styling: ["Tailwind CSS"] },
            runtimeEnvironments: ["Node.js"],
            libraries: { frontend: ["React.js"], backend: ["Express.js"] },
            languages: { programming: ["JavaScript"], styling: ["CSS"] },
            versionControl: ["Git"],
            api: {
              architecture: ["RESTful API"],
              externalAPI: ["Google Gemini AI API"],
            },
            database: ["MongoDB"],
          },
          href: "z-fuel",
          videoSrc: "/videos/projects/aka/Landing Page - Learn More.mp4",
          videoPoster: "/images/aka-poster.png",
          videoAlt: "Z-Fuel project video",
          gitRepository: "",
        },
        {
          client: "Turners Automotive",
          description:
            "This will be a brief summary of MR mission project: Turners Automotive.",
          tools: {
            frameworks: { backend: ["Express.js"], styling: ["Tailwind CSS"] },
            runtimeEnvironments: ["Node.js"],
            libraries: { frontend: ["React.js"], backend: ["Express.js"] },
            languages: { programming: ["JavaScript"], styling: ["CSS"] },
            versionControl: ["Git"],
            api: {
              architecture: ["RESTful API"],
              externalAPI: ["Google Gemini AI API"],
            },
            database: ["MongoDB"],
          },
          href: "turners-automotive",
          videoSrc: "/videos/projects/aka/Landing Page - Learn More.mp4",
          videoPoster: "/images/aka-poster.png",
          videoAlt: "Z-Fuel project video",
          gitRepository: "",
        },
      ],
    },
    {
      name: "Personal projects",
      description: "This will be a brief summary of my portfolio project.",
      projects: [
        {
          client: "Myself",
          description: "This will be a brief summary of my portfolio project.",
          tools: {
            frameworks: { backend: ["Next.js"], styling: ["Tailwind CSS"] },
            runtimeEnvironments: ["Node.js"],
            libraries: { frontend: ["Jotai"], backend: ["Express.js"] },
            languages: { programming: ["TypeScript"], styling: ["CSS"] },
            versionControl: ["Git"],
            api: {
              architecture: ["RESTful API"],
              externalAPI: ["Google Gemini AI API"],
            },
            database: ["MongoDB"],
          },
          href: "my-portfolio",
          videoSrc: "/videos/aka.mp4",
          videoPoster: "/images/aka-poster.png",
          videoAlt: "Portfolio project video",
          gitRepository: "",
        },
      ],
    },
  ],
};
