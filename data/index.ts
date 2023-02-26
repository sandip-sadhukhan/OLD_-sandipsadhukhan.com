import iconMap from "./icons";

const data = {
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
};

export default data;
