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
  tools?: string[];
};

type Project = {
  client: string;
  description: string;
  myContribution: string[];
  tools: Toolset;
  href: string;
  poster: string;
  lazyloadposter?: string;
  videoMedia?: {
    src: string;
    alt: string;
  }[];
  gitRepository?: string;
  liveUrl?: string;
};

type Clients = {
  name: string;
  description: string;
  projects: Project[];
};

type ProjectContent = {
  title: string;
  clients: Clients[];
};

export const projectContent: ProjectContent = {
  title: "My Projects",
  clients: [
    {
      name: "Seen Ventures Internship",
      description:
        "A 10-week internship with Seen Ventures focused on developing a web application for the Auckland Kindergarten Association.",
      projects: [
        {
          client: "Auckland Kindergarten Association",
          description: `The AKA Concept Prototype is an interactive web application developed for the Auckland Kindergarten Association to showcase their history, core values, and growth over time. It features two main components: an interactive timeline that highlights key milestones in AKA’s journey, and the "Moments with Tamariki & Kaiako" experience, which immerses users in a day at an AKA kindergarten through interactive storytelling and educational games. Designed to engage parents, educators, and stakeholders, the prototype demonstrates how AKA has evolved while staying true to its foundational values in early childhood education.`,
          myContribution: [
            "Developed the landing page and the 'Moments with Tamariki & Kaiako' interactive experience, aligning with the project's storytelling and engagement goals.",
            "Designed and built five educational games: a tracing game using ReactSketchCanvas, a garden-to-table cooking game, a match-the-sound-to-the-animal game, a trash sorting game, and an interactive choice-driven narrative.",
            "Created and maintained reusable UI components such as headers, footers, and buttons with variant support to ensure visual consistency and scalability across the application.",
            "Collaborated closely with designers and team members to ensure the interface and features aligned with the needs of parents, educators, and stakeholders.",
            "Used Git for version control and contributed to team workflows through code commits, reviews, and collaborative problem-solving.",
          ],
          tools: {
            frameworks: { frontend: ["Next.js"], styling: ["Tailwind CSS"] },
            libraries: { frontend: ["Jotai"] },
            languages: { programming: ["TypeScript"] },
            versionControl: ["Git"],
          },
          href: "aka",
          poster: "Landing_Page_-_Learn_More_bios1m",
          lazyloadposter: "insert image",
          videoMedia: [
            {
              src: "Landing_Page_-_Learn_More_bios1m",
              alt: "Auckland Kindergarten Association Landing Page",
            },
            {
              src: "Moments_With_Tamariki_And_Kaiako_Routing_ypaozo",
              alt: "Moments with Tamariki & Kaiako Landing Page",
            },
            {
              src: "Moments_With_Tamariki_And_Kaiako_Scenes_pxntlv",
              alt: "Moments with Tamariki & Kaiako Scenes Overview",
            },
            {
              src: "Games_-_Trash_Sorting_krkwxd",
              alt: "Games - Trash Sorting Game",
            },
            {
              src: "Games_-_Cooking_kmnkcq",
              alt: "Games - Garden to Table Cooking Game",
            },
            {
              src: "Games_-_Tracing_t1zgyh",
              alt: "Games - Tracing ABC's Game",
            },
            {
              src: "Games_-_Sound_Matching_ey0lfx",
              alt: "Games - Sound Matching Game",
            },
          ],
        },
      ],
    },
    {
      name: "Freelance work & Personal Projects",
      description:
        "A collection of freelance projects showcasing work completed for real clients as well as personal projects created to explore new ideas, tools, and web development concepts.",
      projects: [
        {
          client: "Civil Separation NZ",
          description:
            "A website built for a divorce lawyer to establish an online presence and provide information about legal services.",
          myContribution: [
            "Collaborated with the client, a design student at AUT, to understand the structure and presentation he wanted for his portfolio.",
            "Selected and customised a Framer template to match the client’s preferred visual style and requirements.",
            "Arranged sections and components using Framer’s visual builder, including About, Work Showcase, and Contact areas.",
            "Adjusted colours, typography, and layout spacing to align with the client’s design direction.",
            "Organised and prepared the client’s media assets for use across the site.",
            "Configured navigation, transitions, and interactive features using Framer’s built-in tools.",
            "Published test versions for client review and made ongoing refinements based on feedback.",
          ],
          tools: {
            frameworks: {
              frontend: ["Divi theme on WordPress"],
            },
            tools: [
              "RankMath SEO plugin",
              "ContactForm7 plugin",
              "CF7 PDF extension",
            ],
          },
          href: "civil-separation-nz",
          poster: "Civil_Separation_NZ_sml7cs",
          videoMedia: [
            {
              src: "Civil_Separation_NZ_sml7cs",
              alt: "Civil Separation NZ Application Form",
            },
          ],
          liveUrl: "https://civilseparation.co.nz/solo-application/",
        },
        {
          client: "Online Design Portfolio",
          description:
            "An online portfolio built for a design student at AUT to showcase his creative work and academic projects. The site is being developed using a Framer template, allowing flexible layout adjustments, visual editing, and quick iteration without coding. The project is ongoing and continues to be refined as new design assets become available.",
          myContribution: [
            "Collaborated with the client, a design student at AUT, to understand the structure and presentation he wanted for his portfolio.",
            "Selected and customised a Framer template to match the client’s preferred visual style and requirements.",
            "Arranged sections and components using Framer’s visual builder, including About, Work Showcase, and Contact areas.",
            "Adjusted colours, typography, and layout spacing to align with the client’s design direction.",
            "Organised and prepared the client’s media assets for use across the site.",
            "Configured navigation, transitions, and interactive features using Framer’s built-in tools.",
            "Published test versions for client review and made ongoing refinements based on feedback.",
          ],
          tools: {
            frameworks: {
              frontend: ["Framer"],
            },
          },
          href: "ahmeds-portfolio",
          poster: "Ahmed_s_Portfolio_hpyn43",
          videoMedia: [
            {
              src: "Ahmed_s_Portfolio_hpyn43",
              alt: "Ahmed's Portfolio Landing Page",
            },
          ],
          liveUrl: "https://centered-friday-033849.framer.app/",
        },
        {
          client: "My portfolio",
          description:
            "This is my personal portfolio website designed to showcase my development skills and projects. It features an About Me section, a Projects page with live previews of deployed applications using embedded iframes, and a Contact page with a fully functional email form. The form is powered by SendRail and connected via a custom REST API built with Node.js and Express. Developed using Next.js, TypeScript, and Jotai for state management, the site is responsive, fast, and deployed on Vercel for global accessibility.",
          myContribution: [
            "Developed a personal portfolio site using Next.js and TypeScript, structured for performance, scalability, and responsiveness.",
            "Designed and built an About Me section to communicate my background, skills, and goals as a developer.",
            "Implemented a Projects page with live embedded previews (iframes) of my deployed applications to provide real-time interaction for visitors.",
            "Created a Contact page with an integrated form that uses SendRail to send emails directly, improving accessibility for potential collaborators or clients.",
            "Built and connected a REST API using Node.js and Express to handle form submissions and securely deliver messages via SendRail.",
            "Utilized Jotai for efficient and modular state management, with clearly organized folders for atoms and custom hooks.",
            "Deployed the portfolio to Vercel with continuous deployment and optimized performance via edge functions.",
            "Managed source control through Git, maintaining clear version history and structured development branches.",
          ],
          tools: {
            frameworks: {
              frontend: ["Next.js"],
              styling: ["Tailwind CSS"],
              backend: ["Express.js"],
            },
            libraries: { frontend: ["Jotai"] },
            languages: { programming: ["TypeScript"] },
            runtimeEnvironments: ["Node.js"],
            versionControl: ["Git"],
            api: {
              architecture: ["RESTful API"],
            },
          },
          href: "my-portfolio",
          poster: "Portfolio_hillwf",
          videoMedia: [
            {
              src: "Portfolio_hillwf",
              alt: "My Portfolio Landing Page",
            },
          ],
          gitRepository: "https://github.com/MaryanneG3/my-portfolio.git",
          liveUrl: "https://maryanne-galo.vercel.app/",
        },
      ],
    },
    {
      name: "Mission Ready",
      description:
        "A collection of projects completed as part of the Mission Ready bootcamp program. Applied full-stack skills in real-world scenarios.",
      projects: [
        {
          client: "Z-Fuel",
          description:
            "This project aims to redesign the Z Energy 'Station locator', 'Fuel price' information pages and 'Order Online' pages to enhance user experience. The application allows users to efficiently locate gas stations, filter services, compare fuel prices across different locations, and order products online.",
          myContribution: [
            "Collaborated in a team of 3 developers to rebuild the Z Fuel website with three core features: Station Locator, Fuel Price Comparison, and Order Online.",
            "Developed the landing page and 'Order Online' page based on provided designs, ensuring responsiveness and functionality across devices.",
            "Built a library of reusable UI components with support for variants, and documented usage guidelines to ensure consistency and ease of adoption by the team.",
            "Structured both frontend and backend codebases with organized folders for components, pages, controllers, models, and routes to support scalability and team efficiency.",
            "Containerized the application by creating Dockerfiles for the frontend and backend, enabling consistent local development and deployment.",
            "Deployed the frontend to Vercel, backend to Render, and integrated the application with a MongoDB Atlas database.",
            "Configured environment variables for all environments and ensured reliable integration across frontend, backend, and database.",
            "Used GitHub for version control and contributed to internal documentation for shared workflows and development setup.",
          ],
          tools: {
            frameworks: { backend: ["Express.js"] },
            runtimeEnvironments: ["Node.js"],
            libraries: { frontend: ["React.js"] },
            languages: { programming: ["JavaScript"], styling: ["CSS"] },
            versionControl: ["Git"],
            api: {
              architecture: ["RESTful API"],
            },
            database: ["MongoDB"],
          },
          href: "z-fuel",
          poster: "Z-Fuel_ynzhsd",
          videoMedia: [
            {
              src: "Z-Fuel_-_Landing_Page_wczpds",
              alt: "Z-Fuel Landing Page",
            },
            {
              src: "Z-Fuel_-_Order_Online_Page_coezyd",
              alt: "Z-Fuel Order Online Page",
            },
          ],
          gitRepository: "https://github.com/MaryanneG3/z-fuel-redesign.git",
          liveUrl: "https://z-fuel-redesign.vercel.app/",
        },
        {
          client: "Insurance Chatbot",
          description:
            "This full-stack web application features 'Tina', an AI-powered chatbot that guides users through choosing the right insurance policy. Through a conversational interface, Tina gathers details about users’ driving habits, vehicle, and insurance needs, then delivers tailored recommendations with clear explanations. Built with Google Gemini AI and a clean, user-friendly UI, the app is containerized using Docker for seamless deployment across environments.",
          myContribution: [
            "Architected project structure for both frontend (React + Vite) and backend (Node.js + Express), with clearly defined directories for components, services, and utilities.",
            "Initialized and managed the GitHub repository, set up a branching strategy, and authored a comprehensive README detailing architecture, local/Docker setup, and usage.",
            "Designed and developed the landing page and chatbot interface, ensuring responsive layout and seamless user experience.",
            "Built modular, variant-supporting UI components (navbar, headers, layout) to promote consistency and reusability across the application.",
            "Integrated Google Gemini API on the backend, handling request/response logic to support Tina’s dynamic insurance recommendations.",
            "Created and configured Dockerfiles for both services to support isolated development and deployment pipelines.",
            "Deployed frontend to Vercel, backend to Render, and connected to MongoDB Atlas with environment variables managed securely across environments.",
          ],
          tools: {
            frameworks: { backend: ["Express.js"] },
            runtimeEnvironments: ["Node.js"],
            libraries: { frontend: ["React.js"] },
            languages: { programming: ["JavaScript"], styling: ["CSS"] },
            versionControl: ["Git"],
            api: {
              architecture: ["RESTful API"],
              externalAPI: ["Google Gemini AI API"],
            },
          },
          href: "turners-automotive",
          poster: "Turners_uhwjtg",
          videoMedia: [
            {
              src: "Turners_-_Landing_Page_m1yacp",
              alt: "Turners Landing Page",
            },
            {
              src: "Turners_-_Tina_The_Chatbot_t68vrr",
              alt: "Tina the Insurance Recommendation Chatbot",
            },
          ],
          gitRepository:
            "https://github.com/MaryanneG3/turners_insurance_recommendation_application.git",
          liveUrl: "https://turners-insurance-recommendation.vercel.app/",
        },
      ],
    },
  ],
};
