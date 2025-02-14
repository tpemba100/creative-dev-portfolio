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
    "I'm a Developer & Designer based in NYC, passionate about building seamless, visually engaging, and highly functional user experiences. ",

  social: {
    linkedin: "https://www.linkedin.com/in/tpemba/",
    github: "https://github.com/tpemba100",
  },
};

const design_about = {
  name: "Design",
  description:
    "As a designer, I specialize in creating engaging visual experiences that help businesses connect with their audiences and convey the values. I'm a designer with a keen eye for detail and a passion for crafting beautiful and impactful designs.",
  skills:
    "graphic design, visual design, branding, ui design, ux design, interaction design",
  software:
    "adobe xd, adobe photoshop, adobe illustrator, adobe inDesign, figma, sketchup, Miro",
};
const develop_about = {
  name: "Develop",
  description:
    "As a full-stack developer, I'm passionate about crafting seamless user experiences through elegant interfaces and efficient code, bridging the gap between design and functionality to deliver scalable, intuitive, and business-driven solutions that bring my vision to life.",
  skills:
    "java, javascript, react, node, ux/ui design, frontend and backend dev, oop, data structure",
  software:
    "vs code, git/ github, Dbeaver, postman, intellij, mongodb, framer motion, mui and bootstrap",
};

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
  "React Native",
  "Redux",
  "SASS",
  "Material UI",
  "MongoDB",
  "Node",
  "Git",
  "Java",
  "UI/UX",
];

//CONTACTS
//CONTACTS
//CONTACTS
//CONTACTS
const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "tpemba.96@gmail.com",
  linkedin: "https://www.linkedin.com/in/tpemba/",
  github: "https://github.com/tpemba100",
};

const gitProjects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Book Share",
    description:
      "Book Share is a web application that allows users to keep track of their book lists. With Book Mates, users can log in and access their list of books that they have read, books that they are currently reading, and books that they want to read in the future.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Node",
    ],
    sourceCode: "https://github.com/tpemba100/book-club",
    livePreview: "https://bookshare-now.onrender.com/#/landing-page",
  },
  {
    name: "HimaLingo",
    description:
      "A user-friendly fullstack app ddeveloped to help you explore alphabets, words, and sentences in your favorite himalayans languages. Built with React as Front End and Java with Spring Data along with spring security for secured user authentication. ",
    stack: [
      "React",
      "Java",
      "Spring Boot",
      "Sring Data JPAA",
      "MySQL",
      "Junit",
    ],
    sourceCode: "https://github.com/tpemba100/Himalingo-Backend",
    // livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
  {
    name: "Computer Ticketing Sysytem",
    description:
      "This is an full stack application where the user can raise a ticket for any issues with their computer. The users can provide information in the reactive forms to raise a ticket. Only authticated users can login and raise a ticket.",
    stack: ["React", "TypeScript", "Redux", "CSS", "MongoDB", "Node"],
    sourceCode: "https://github.com/tpemba100/ComputerTicketSystem",
    // livePreview: "https://github.com/tpemba100/ComputerTicketSystem",
  },
];
//PROJECTS
//PROJECTS
//PROJECTS
//PROJECTS
//PROJECTS
//PROJECTS
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: "projects",
  },
  //BOOK SHARE
  //BOOK SHARE
  //BOOK SHARE
  {
    name: "Book Share",
    header: "full stack development",
    description:
      "a space to share your book list, connect and discover new books",
    stack: [
      "MERN STACK",
      "REACT",
      "NODE",
      "MONGODB",
      "EXPRESS",
      "RENDER",
      "CI/CD",
    ],
    head_img: "book_share/homepage.png",
    category: "develop",
    sections: [
      {
        title: "introduction",
        brief:
          "A full stack application for book lovers to search, save and share books. Users can save books to their list and create your own summary to remember the connection to that book. You can add notes or summary to each book to remember key details, Then you can share your book list with friends or make your book list easily accessible",
        img: ["book_share/introduction.gif"],
      },
      {
        title: "features",
        brief: "",
        img: [
          "book_share/features.png",
          "book_share/login.gif",
          "book_share/add_book.gif",
          "book_share/delete_book.gif",
          "book_share/notes.gif",
          "book_share/share.gif",
          "book_share/mobile.gif",
        ],
      },
    ],
    sourceCode: "https://github.com/tpemba100/book-club",
    website: "https://bookshare-now.onrender.com",
  },
  //HYOLMO WEBSITE
  //HYOLMO WEBSITE
  {
    name: "Hyolmo Website",
    header: "WordPress Development",
    description:
      "Non-Profit organization Website build using WordPress CMS, templates, plugins and custom CSS & JS",
    stack: ["WordPress", "HTML", "CSS", "JavaScript", "Templates", "Plugins"],
    head_img: "hyolmo_website/our_works_eng.png",
    category: "develop",
    sections: [
      {
        title: "introduction",
        brief:
          "Led end-to-end development of Hyolmo Society of America's website using WordPress, leveraging templates,plugins, and a Content Management System (CMS) for seamless design and functionality.",
        img: ["hyolmo_website/home_gif.gif"],
      },
      {
        title: "features",
        brief:
          "Simple, Accessible and Simple User Experience. Easy accessible to Translate button to nepali, the native language of the community.",
        img: [
          "hyolmo_website/hyolmo_site_map.jpg",
          "hyolmo_website/translate.gif",
          "hyolmo_website/PageMockup.png",
          "hyolmo_website/laptopPhoneMockup.png",
        ],
      },
    ],
    website: "https://www.hyolmosocietyofamerica.org",
  },

  //NETFLIX
  //NETFLIX
  //NETFLIX
  //NETFLIX
  // {
  //   name: "Netflix Clone",
  //   header: "Full Stack Development",
  //   description: "A full stack netflix movie app clone using MERN stack.",
  //   stack: ["react", "scss", "Material UI", "MongoDB", "Node", "Express"],
  //   head_img: "netflix/register.png",
  //   category: "develop",
  //   sections: [
  //     {
  //       title: "introduction",
  //       brief:
  //         "A NETFLIX clone app with very similar interface and experience created with MERN Stack (MongoDb, Express, React, NodeJs). The Front end was developed using React, SCSS and Material UI for similar User Experience as original Netflix. And the back end is built with NodeJs, Express, Mongoose and with MongoDB as database.",
  //       img: ["netflix/nextflix.gif"],
  //     },
  //     {
  //       title: "features",
  //       brief:
  //         "User can navigate to sign up page, login page, home and movie view page. User can slide thru sections to see more movies and hover to see preview. The video player is implemented with Vimeo and has most usabilty such as play/pause, full screen and options. ",
  //       img: [
  //         "netflix/register.png",
  //         "netflix/login.png",
  //         "netflix/fullpage.jpeg",
  //         "netflix/home_hover.png",
  //         "netflix/watch.png",
  //         "netflix/mongoDb.png",
  //       ],
  //     },
  //   ],
  //   sourceCode: "https://github.com/tpemba100/netflix-clone",
  //   prototype: "https://netflix-clone-front.onrender.com/",
  // },

  //QCTI
  //QCTI
  //QCTI
  {
    name: "Tiqc Collective",
    header: "ui/ux case study",
    description:
      // "Case Study for our Queens College Tech Incubator, Including research, interviews, analysis and prototype.",
      "This is a case study that outlines our work with the Queens College Tech Incubator. Our project involved conducting research, interviews, analysis, and developing a prototype. In this study, we will detail our process and the outcomes of our work in assisting the QCTI.",
    stack: [
      "Figma",
      "Miro",
      "Photoshop",
      "inDesign",
      "Google Forms",
      "inVision",
    ],
    head_img: "qcti/qcti-header.jpg",
    category: "design",

    sections: [
      {
        title: "introduction",
        brief:
          "The Queens College Tech Incubator is a program that supports small businesses and startups in our community. We had the opportunity to help increase participation and involvement with the QCTI, which could make a big difference in our community.",
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
          "After conducting research and interviews with five individuals, including entrepreneurs, staff members, and student interns, we discovered the significance of establishing a cohesive ecosystem that nurtures an environment of connectivity, community, and collaboration.",
        img: [
          "qcti/qcti-discovery.jpg",
          "qcti/qcti-user-persona.jpg",
          "qcti/qcti-user-interview.jpg",
        ],
      },
      {
        title: "define",
        brief:
          "Our focus on creating a cohesive ecosystem led us to believe that a web hub that connects students, staff, and entrepreneurs would provide the optimal solution for fostering collaboration, community, and support among all parties involved.",
        img: [
          "qcti/qcti-define.jpg",
          // "qcti/qcti-define.jpg",
          "qcti/qcti-full-analysis.jpg",
        ],
      },
      {
        title: "develop",
        brief:
          "After numerous iterations of wireframing and refining user interaction to ensure a smooth and intuitive user experience, we successfully designed and developed a web app prototype ",
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
    category: "design",
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
          "After conducting interviews and research, I identified my target audience as a single persona and mapped out their journey towards using my app as a part of their daily routine.",
        img: [
          "peak_speak/peak_speak_7_persona.jpg",
          "peak_speak/peak_speak_8_journey.jpg",
          "peak_speak/peak_speak_9_visual_journey.jpg",
        ],
      },
      {
        title: "ideate",
        brief:
          "After gaining an understanding of the problem, the target users, and their experience with our app features, we developed a user flow chart that outlines the various steps involved in using our app from start to finish.",
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

  //THE GHOST CLAN
  //THE GHOST CLAN
  {
    name: "The Ghost Clan",
    header: "Web Design & Branding",
    description:
      "A full on branding project for an upcoming music group based in NYC. The Ghost Clan",
    stack: ["Adobe XD", "PhotoShop", "Illustration"],
    head_img: "the_ghost_clan/the_ghost_clann.png",
    category: "design",
    sections: [
      {
        title: "deliverables",
        brief: "cap, t-shirt, hoodies, business card",
        img: [
          "the_ghost_clan/bussinessCard.png",
          "the_ghost_clan/bussinessCardFront.png",
          "the_ghost_clan/capFront.png",
          "the_ghost_clan/hoodieBack.png",
          "the_ghost_clan/hoodieFront.png",
          "the_ghost_clan/tShirtFront.png",
          "the_ghost_clan/tShirtBack.png",
        ],
      },
    ],
    website:
      "https://xd.adobe.com/view/11471325-d925-4248-a3e6-b7a6a94117ad-4414/?fullscreen&hints=off",
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
    category: "develop",
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
  // {
  //   name: "Computer Repair",
  //   header: "Full stack Development",
  //   description:
  //     " A full stack application to raise a ticket for computer repairs",
  //   stack: ["React", "CSS", "TypeScript", "Redux", "MongoDb", "React Testing"],
  //   head_img: "computer_repair/dashboard.png",
  //   category: "develop",
  //   sections: [
  //     {
  //       title: "features",
  //       brief:
  //         "Navigating dashboard. Log in with User Authentication that is saved in browser. Raising a ticket for repair that can be submitted. Reactive Form that changes based on the user's option. Communicating with backend server to save the user info and tokens in database. Communicating with backend server to save the tickets raised by the user",
  //       img: [
  //         "computer_repair/flow.gif",
  //         "computer_repair/dashboard.png",
  //         "computer_repair/local_token.png",
  //         "computer_repair/mongodb_tickets.png",
  //         "computer_repair/mongodb_users.png",
  //       ],
  //     },
  //   ],
  //   sourceCode: "https://github.com/tpemba100/ComputerTicketSystem",
  // },
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
    name: "Movie Filter",
    header: "development",
    description:
      " A simple web page displaying the movies using grids with features to filter them and with smooth animation using framer motion.",
    stack: ["React", "Redux", "API", "CSS", "Framer Motion"],
    head_img: "movie_filter_animation.gif",
    category: "develop",
    seeMore: "https://movie-filter-animation.vercel.app/",
  },
  {
    name: "Merch Shop",
    header: "Development",
    description:
      "A e-commerce website for all merchandise and products with features and Assessible design.",
    stack: ["React", "CSS", "Redux", "Axios"],
    head_img: "merch-shop.gif",
    category: "develop",
    seeMore: "https://github.com/tpemba100/merch-shop",
  },
  // {
  //   name: "The Ghost Clan",
  //   header: "web Design & Branding",
  //   description:
  //     "a full on branding project for an upcoming music group based in NYC. The Ghost Clan",
  //   stack: ["Adobe XD", "PhotoShop", "Illustration"],
  //   head_img: "the_ghost_clan.png",
  //   category: "design",
  //   seeMore: "https://tpemba.myportfolio.com/the-ghost-clan",
  // },
  {
    name: "Github Finder",
    header: "Development",
    description:
      "Search for any users in github with the username and see the repo",
    stack: ["React", "CSS", "API", "Hooks"],
    head_img: "github_search.gif",
    category: "develop",
    seeMore: "https://github.com/tpemba100/github-profile-search",
  },
  {
    name: "War Dogs",
    header: "Packaging design",
    description:
      "packaging design for (improving, progressive) drink based of military theme.",
    stack: ["Photoshop", "Illustrator"],
    head_img: "war_dogs.jpg",
    category: "design",
    seeMore: "https://tpemba.myportfolio.com/war-dogs-2",
  },

  {
    name: "Ninja Game",
    header: "Game Development",
    description:
      "Ninja Zoom Zoom is a simple movement game made in p5.js which is a javascript library known for its interactive visual and creative coding.",
    stack: ["P5js", "Javascript", "Canvas", "Creative Coding"],
    head_img: "ninja.png",
    category: "develop",
    seeMore: "https://editor.p5js.org/tpemba.design/sketches/y7O4rVGAs",
  },
  {
    name: "Fire Typo",
    header: "Creative Coding",
    description:
      "A interactive visual typography that changes its behavior based on user mouse movement.",
    stack: ["P5js", "Javascript", "Canvas", "Creative Coding"],
    head_img: "fire_typo.gif",
    category: "develop",
    seeMore: "https://editor.p5js.org/tpemba.design/sketches/nvHiYRYns",
  },
];

export {
  header,
  about,
  projects,
  archives,
  skills,
  contact,
  design_about,
  develop_about,
  gitProjects,
};
