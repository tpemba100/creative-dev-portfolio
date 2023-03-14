const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "Tsering Pemba",
};

//ABOUT
//ABOUT
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

//PROJECTS
//PROJECTS
//PROJECTS
//PROJECTS
//PROJECTS
//PROJECTS
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  //TIQC COLLECTIVE
  //TIQC COLLECTIVE
  //TIQC COLLECTIVE
  {
    name: "projects",
  },
  //NETFLIX
  //NETFLIX
  //NETFLIX
  //NETFLIX
  {
    name: "Netflix Clone",
    header: "Full Stack Development",
    description: "A full stack netflix movie app clone using MERN stack.",
    stack: ["react", "scss", "Material UI", "MongoDB", "Node", "Express"],
    head_img: "netflix/register.png",
    sections: [
      {
        title: "introduction",
        brief:
          "A NETFLIX clone app with very similar interface and experience created with MERN Stack (MongoDb, Express, React, NodeJs). The Front end was developed using React, SCSS and Material UI for similar User Experience as original Netflix. And the back end is built with NodeJs, Express, Mongoose and with MongoDB as database.",
        img: ["netflix/nextflix.gif"],
      },
      {
        title: "features",
        brief:
          "User can navigate to sign up page, login page, home and movie view page. User can slide thru sections to see more movies and hover to see preview. The video player is implemented with Vimeo and has most usabilty such as play/pause, full screen and options. ",
        img: [
          "netflix/register.png",
          "netflix/login.png",
          "netflix/fullpage.jpeg",
          "netflix/home_hover.png",
          "netflix/watch.png",
          "netflix/mongoDb.png",
        ],
      },
    ],
    prototype: "https://netflix-clone-front.onrender.com/",
  },
  {
    name: "Qcti Collective",
    header: "ui/ux case study",
    description:
      "Case Study for our Queens College Tech Incubator, Including research, interviews, analysis and prototype.",
    stack: [
      "Figma",
      "Miro",
      "Photoshop",
      "inDesign",
      "Google Forms",
      "inVision",
    ],
    head_img: "qcti/qcti-header.jpg",
    sections: [
      {
        title: "introduction",
        brief:
          "Queens College tech incubator is a program in Queens College that provides assistance to small business and start ups in our community. We had the opportunity to make a meaningful immpact to our commuity by trying to help the qcti achive greater engagment and involvement.",
        img: [
          "qcti/qcti-problem-statement.jpg",
          "qcti/qcti-project-overview.jpg",
          "qcti/qcti-customer-problem.jpg",
          "qcti/qcti-tiqc-background.jpg",
          "qcti/qcti-design-process.jpg",
        ],
      },
      {
        title: "discover",
        brief:
          "We reserached and interviewed 5 individuals (entrepreneurs, staff members and student interns) and found the importance creating a Cohesive Ecosystem that creates environment of connections, community and collaboration.",

        img: [
          "qcti/qcti-discovery.jpg",
          "qcti/qcti-user-persona.jpg",
          "qcti/qcti-user-interview.jpg",
        ],
      },
      {
        title: "define",
        brief:
          "Focusing on Cohesive Ecosystem, We believe a web app would be the best solution that would bring about collaboration, community and support to all party.  ",
        img: [
          "qcti/qcti-define.jpg",
          "qcti/qcti-define.jpg",
          "qcti/qcti-full-analysis.jpg",
        ],
      },
      {
        title: "develop",
        brief:
          "After many itterations on our wireframing and user interaction to create a seamless user experience, we designed and developed a prototype of the web app. ",
        img: ["qcti/qcti-prototype.jpg", "qcti/qcti-prototype-1.jpg"],
      },
      {
        title: "deliver",
        brief:
          "Final Step: User Testing. We evaluated user's experience and their feed back for solutions. Always room for improvement. ",
        img: ["qcti/qcti-final-decision.jpg"],
      },
    ],
  },

  //PEAK SPEAK
  //PEAK SPEAK
  //PEAK SPEAK
  //PEAK SPEAK
  {
    name: "Peak Speak",
    header: "ui/ux case study",
    description:
      "A case study on app for langauge learning called peak speak. Focused on easy learning with bite size lessons and real conversation learning.",
    stack: ["figma", "miro", "Otter", "Photoshop", "illustrator"],
    head_img: "peak_speak/peak_speak_1_head_img.jpg",
    sections: [
      {
        title: "introduction",
        img: [
          "peak_speak/peak_speak_2_overview.jpg",
          "peak_speak/peak_speak_3_process.jpg",
        ],
      },
      {
        title: "discover",
        brief:
          "I interviewed my family members, friends and few classmates with various background and various native language. Got many new insights and focused on defining key features of my app. I did an competitive analysis with other similar companies as well. ",
        img: [
          "peak_speak/peak_speak_4_insight.jpg",
          "peak_speak/peak_speak_5_features.jpg",
          "peak_speak/peak_speak_6_competetive.jpg",
        ],
      },
      {
        title: "define",
        brief:
          "After discovering insights from interviews and research. I defined my target audience, a one persona and mapped thier jounrey leading to the usage of my app during its daily life. ",
        img: [
          "peak_speak/peak_speak_7_persona.jpg",
          "peak_speak/peak_speak_8_journey.jpg",
          "peak_speak/peak_speak_9_visual_journey.jpg",
        ],
      },
      {
        title: "ideate",
        brief:
          "After understanding the problem, target users, their brief experience and our features based on insights. User Flow, a flow chart so my app from start to finish.",
        img: ["peak_speak/peak_speak_10_user_flow.jpg"],
      },
      {
        title: "design",
        brief:
          "After various itteration of wire frames and design to create a simple but effective user experience, we developed the app protoype. Then i tested and made improvements based on result of user testing. ",
        img: [
          "peak_speak/peak_speak_11_wireframe.jpg",
          "peak_speak/peak_speak_12_style.jpg",
          "peak_speak/peak_speak_13_proto.jpg",
          "peak_speak/peak_speak_16_access.jpg",
          "peak_speak/peak_speak_14_testing.jpg",
          "peak_speak/peak_speak_15_mock.jpg",
        ],
      },
    ],
    prototype:
      "https://www.figma.com/proto/hvAGnjSm7wL929Y7v05dtg/Learning-app?node-id=9-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A3",
  },

  //REACT TODO
  //REACT TODO
  //REACT TODO
  {
    name: "Todo List",
    header: "development",
    description:
      "A Classc Todo App with extra features such as filter and dark/light themed design.",
    stack: [
      "React",
      "TypeScript",
      "Scss",
      "Chakra UI",
      "Vite",
      "React Toastify",
    ],
    head_img: "todo_list/todo.png",
    sections: [
      {
        title: "features",
        brief:
          "Add or Delete list. Filter thru the list weather its all, active or completed. Readibility accessibilty:Dark and Light themed. Responsive Design and Development. Todo List are saved locally within your browser.",
        img: [
          "todo_list/react-ts-todo.gif",
          "todo_list/todo.png",
          "todo_list/todo_light.png",
          "todo_list/todo_notification.png",
        ],
      },
    ],
    prototype: "https://react-todo-ts-omega.vercel.app/",
  },

  //COMPUTER REPAIR
  //COMPUTER REPAIR
  //COMPUTER REPAIR
  //COMPUTER REPAIR
  {
    name: "Computer Repair",
    header: "Full stack Development",
    description:
      " A full stack application to raise a ticket for computer repairs",
    stack: ["React", "CSS", "TypeScript", "Redux", "MongoDb", "React Testing"],
    head_img: "computer_repair/dashboard.png",
    sections: [
      {
        title: "features",
        brief:
          "Navigating dashboard. Log in with User Authentication that is saved in browser. Raising a ticket for repair that can be submitted. Reactive Form that changes based on the user's option. Communicating with backend server to save the user info and tokens in database. Communicating with backend server to save the tickets raised by the user",
        img: [
          "computer_repair/flow.gif",
          "computer_repair/dashboard.png",
          "computer_repair/local_token.png",
          "computer_repair/mongodb_tickets.png",
          "computer_repair/mongodb_users.png",
        ],
      },
    ],
    sourceCode: "https://github.com/tpemba100/ComputerTicketSystem",
  },

  //STUDENT GROUPS
  //STUDENT GROUPS
  //STUDENT GROUPS
  //STUDENT GROUPS
  //STUDENT GROUPS
  {
    name: "Student Groups",
    header: "Full stack Development",
    description: " A full stack application to help manage students database.",
    stack: [
      "React",
      "CSS",
      "Material UI",
      "Spring Boot",
      "MySQL Database",
      "PHP MyAdmin",
    ],
    head_img: "student_group/main.png",
    sections: [
      {
        title: "Introduction",
        brief:
          "This is an application that can help students manage members in their group. The students can be added directly from a form container and displayed right below it. All the data is stored in MySQL Database or PHP MyAdmin. Developed a full stack application that manages student database using React and Spring Boot. The backend server was built using java, Spring Boot and MySQL database with Restful API. and The front end was built on React.js with Material UI, CSS and implementation of React Hooks.",
        img: ["student_group/flow.gif"],
      },
      {
        title: "features",
        brief:
          "Add Students information. Save Employee information. Delete Employee information. Update Employee information",
        img: [
          "student_group/main.png",
          "student_group/itellij.png",
          "student_group/data.png",
        ],
      },
    ],
    sourceCode: "https://github.com/tpemba100/Student-Group",
  },
];

//ARCHIVE
//ARCHIVE
//ARCHIVE
//ARCHIVE
const archives = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "archive",
  },
  {
    name: "Random Cards",
    header: "ui/ux design",
    description:
      " This is a basic description of the project. Nothing more, nothing less.",
    stack: ["Figma", "Miro", "Photoshop", "inDesign", "Google Forms"],
    head_img: "tiqc_collective.jpg",
    sourceCode: "https://github.com/tpemba100/Student-Group",
    livePreview: "https://github.com/tpemba100/ComputerTicketSystem",
  },
  {
    name: "Movie Filter",
    header: "development",
    description:
      " A simple web page displaying the movies using grids with features to filter them and with smooth animation using framer motion.",
    stack: ["React", "Redux", "API", "CSS", "Framer Motion"],
    head_img: "movie_filter_animation.gif",
    sourceCode: "https://github.com/tpemba100/movie-filter-animation",
    livePreview: "https://movie-filter-animation.vercel.app/",
  },
  {
    name: "Todo List",
    header: "Development",
    description:
      " This is a basic description of the project. Nothing more, nothing less.",
    stack: ["React", "SCSS", "React Hooks"],
    head_img: "nextflix.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Nextflix",
    header: "ui/ux Design",
    description:
      " This is a basic description of the project. Nothing more, nothing less.",
    stack: ["React", "SCSS", "React Hooks"],
    head_img: "nextflix.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Github Finder",
    header: "Development",
    description:
      "Search for any users in github with the username and see the repo",
    stack: ["React", "CSS", "API", "Hooks"],
    head_img: "github_search.gif",
    sourceCode: "https://github.com/tpemba100/github-profile-search",
    // livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Food Branding",
    header: "branding design",
    description:
      " This is a basic description of the project. Nothing more, nothing less.",
    stack: ["React", "SCSS", "React Hooks"],
    head_img: "random_1.png",
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
];

//SKILLS
//SKILLS
//SKILLS
//SKILLS
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
  "Java",
  "UI/UX",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "tpemba.96@gmail.com",
  linkedin: "https://tpemba.linkedin.com",
  github: "https://tpemba100.github.io",
};

export {
  header,
  about,
  projects,
  archives,
  skills,
  contact,
  design_about,
  develop_about,
};
