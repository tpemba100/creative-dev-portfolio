const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "Tsering Pemba",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Tsering Pemba",
  role: "Front End Engineer",
  description:
    "I am a UI/UX Designer and a developer. I create visual and interfaces for users to experience and interact with. Creative coding is fun and exciting so i designing.",
  social: {
    linkedin: "https://linkedin.com/in/tpemba",
    github: "https://github.com/tpemba100",
  },
};

const design_about = {
  name: "Design",
  description:
    "As a designer, I specialize in creating engaging visual experiences that help businesses connect with their audiences and stand out in a crowded marketplace. I'm a designer with a keen eye for detail and a passion for crafting beautiful and impactful designs.",
  skills:
    "graphic design, visual design, ui design, ux design, interaction design",
  software: "adobe xd, figma, photoshop, illustrator, sketchup, Miro, indesign",
};
const develop_about = {
  name: "Develop",
  description:
    "As a developer, i have passion for building elegant and intuitive interfaces that bring design to life. by writing clean and efficient code that creates seamless user experience, meets business objectives and complete my vision.",
  skills:
    "html, css, javascript, react, ux/ui design, frontend and backend dev",
  software:
    "visual studio code, git and github, intellij, mongodb, framer motion, material ui and bootstrap",
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Tiqc Collective",
    description: "ui/ux design",
    stack: [
      "CSS",
      "JavaeScript",
      "React",
      "Spring Boot",
      "Material UI",
      "Node",
      "MySQL Database",
    ],
    img: "tiqc_collective.jpg",
    sourceCode: "https://github.com/tpemba100/Student-Group",
    livePreview: "https://github.com/tpemba100/Student-Gropup",
  },
  {
    name: "The Ghost Clan",
    description: "Web Design",
    stack: ["Redux", "TypeScript", "React", "CSS", "MongoDB"],
    img: "the_ghost_clan.png",
    sourceCode: "https://github.com/tpemba100/ComputerTicketSystem",
    livePreview: "https://github.com/tpemba100/ComputerTicketSystem",
  },
  {
    name: "Nextflix",
    description: "Development",
    stack: ["React", "SCSS", "React Hooks"],
    img: "nextflix.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Nextflix",
    description: "ui/ux Design",
    stack: ["React", "SCSS", "React Hooks"],
    img: "nextflix.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Nextflix",
    description: "Development",
    stack: ["React", "SCSS", "React Hooks"],
    img: "random_1.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Nextflix",
    description: "ui/ux Design",
    stack: ["React", "SCSS", "React Hooks"],
    img: "random_1.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "MongoDB",
  "Node",
  "Git",
  "CI/CD",
  "Jest",
  "Java",
  "UI/UX",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "tpemba.96@gmail.com",
};

export {
  header,
  about,
  projects,
  skills,
  contact,
  design_about,
  develop_about,
};
