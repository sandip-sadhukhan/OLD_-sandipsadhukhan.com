import iconMap from "./icons";

const data = {
  site: {
    title: "Sandip Sadhukhan | Full Stack Web Developer",
    description:
      "My name is sandip sadhukhan and I am a full stack web developer. " +
      "I love about leaning new things and creating projects.",
    favicon: "/sandip-sadhukhan.jpg",
  },
  header: {
    profilePicture: "/sandip-sadhukhan.jpg",
    avatarAltName: "Sandip Sadhukhan",
  },
  heroSection: {
    name: "Sandip Sadhukhan",
    firstParagraph: "Full stack web developer at Tutorify.",
    firstParagraphHighlight: "Full stack web developer",
    secondParagraph:
      "I love to create side projects which helps users around the world.",
    githubLink: "https://github.com/sandippakhanna",
    linkedinLink: "https://www.linkedin.com/in/sandipsadhukhan",
    mailLink: "mailto:sandip.sendme@gmail.com",
    resumeLink: "/resume.pdf",
  },
  techStacks: {
    title: "Tech Stack I'm using",
    cards: [
      {
        icons: [iconMap.nextJs, iconMap.typescript],
        headings: ["Next.js", "Typescript"],
        body:
          "Next.js & TypeScript offer type safety, faster development, " +
          "scalability, server-side rendering, and built-in optimizations " +
          "for frontend web applications",
      },
      {
        icons: [iconMap.django],
        headings: ["Django", "DRF"],
        body:
          "Django and Django Rest Framework offer fast development, " +
          "scalability, built-in authentication, a robust ORM, a variety of " +
          "third-party packages, and comprehensive documentation for " +
          "building backend web applications.",
      },
      {
        icons: [iconMap.docker, iconMap.digitalOcean, iconMap.netlify],
        headings: ["Docker", "DigitalOcean", "netlify"],
        body:
          "Docker provides containerization, DigitalOcean offers fast and " +
          "scalable cloud hosting, and Netlify provides easy and automated " +
          "deployment for static sites, making them a powerful combination " +
          "for hosting web applications.",
      },
      {
        icons: [iconMap.pytest, iconMap.reactTestingLibrary, iconMap.jest],
        headings: ["Pytest", "RTL", "Jest"],
        body:
          "Pytest offers flexible and easy-to-use testing capabilities for " +
          "django applications, while React Testing Library and Jest provide " +
          "powerful and intuitive testing tools for frontend applications. " +
          "Together, they provide comprehensive testing solutions for web " +
          "development.",
      },
    ],
  },
  projects: {
    title: "My projects",
    cards: [
      {
        image: "/projects/mocktest-shop.jpg",
        title: "MockTest.shop",
        description:
          "Experience an innovative platform that connects students with " +
          "teachers, providing access to a diverse range of mock tests. " +
          "Purchase from a selection of tests tailored to your needs, and " +
          "track your progress with interactive analytics. Join our " +
          "community and take control of your education today.",
        tags: [
          { colorScheme: "cyan", text: "react" },
          { colorScheme: "purple", text: "next.js" },
          { colorScheme: "blue", text: "typescript" },
          { colorScheme: "green", text: "django" },
          { colorScheme: "orange", text: "django rest framework" },
        ],
        websiteLink: "https://www.mocktest.shop/",
        underDevelopment: true,
      },
      {
        image: "/projects/7resume.jpg",
        title: "Build your resume without Coding",
        description:
          "7Resume is a platform that enables anyone to easily " +
          "create a professional online portfolio without any coding skills. " +
          "Showcase your skills and experience with customizable templates, " +
          "and stand out in your field with an impressive online presence.",
        tags: [
          { colorScheme: "cyan", text: "react" },
          { colorScheme: "purple", text: "next.js" },
          { colorScheme: "blue", text: "typescript" },
          { colorScheme: "green", text: "django" },
          { colorScheme: "orange", text: "django rest framework" },
        ],
        websiteLink: "https://7resume.com",
        sourceCodeLink: "https://github.com/sandippakhanna/7resume",
      },

      {
        image: "/projects/digital-routine.jpg",
        title: "Digital Routine",
        description:
          "Our platform provides a comprehensive dashboard where you can " +
          "create and manage your digital routine. With easy scheduling " +
          "tools, you can add classes and build your daily routine. Once " +
          "complete, your routine is accessible via a unique public URL, " +
          "perfect for sharing with classmates, students or personal use.",
        tags: [
          { colorScheme: "cyan", text: "react" },
          { colorScheme: "purple", text: "next.js" },
          { colorScheme: "blue", text: "typescript" },
          { colorScheme: "green", text: "django" },
          { colorScheme: "orange", text: "graphene" },
        ],
        websiteLink: "https://digital-routine.vercel.app/",
        sourceCodeLink:
          "https://github.com/sandippakhanna/dynamic_routine_maker",
      },
    ],
  },
  testimonials: {
    title: "Here's what peoples say about me",
    cards: [
      {
        body:
          "It was a great working with Sandip in each and every aspect " +
          "of web development part for our organization.He work's smartly, " +
          "he's efficient, and always helping team mates. The best part is " +
          "he was most punctual person in our Tutorify team.",
        image: "/testimonials/imran.jpg",
        name: "Imran Ali",
        designation: "Director at Tutorify",
      },
      {
        body:
          "Sandip is very enthusiastic person. In addition to his ability to " +
          "learn and explore, he has a solid command over full stack " +
          "development. An excellent worker and learner, he is!",
        image: "/testimonials/hayden.jpg",
        name: "Hayden Cordeiro",
        designation: "SDE at BrowserStack",
      },
      {
        body:
          "Sandip is one of the most dedicated professionals I've worked " +
          "with. He is willing to put that extra help whenever you need it. " +
          "His expertise as a full stack developer is innovative, and it " +
          "helped our team come up with more efficient solutions on the " +
          "project. His contribution is valuable to the side, and I highly " +
          "recommend Sandip and would love to work with him again.",
        image: "/testimonials/vedang.jpg",
        name: "Vedang Matey",
        designation: "Analyst at HDFC Bank",
      },
    ],
  },
  footer: {
    text: "Sandip Sadhukhan",
  },
};

export default data;
