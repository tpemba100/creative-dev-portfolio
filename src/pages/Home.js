import React from "react";
import About from ".././components/About/About";
import Projects from ".././components/Projects/Projects";
import Contact from ".././components/Contact/Contact";
import ".././App.css";
// import Hero from ".././components/Hero/Hero";
import { projects } from "../portfolio";
import MediaQuery from "react-responsive";
import WideScreenHero from ".././Slides/WideScreen/HeroSlide/Hero";
import WideScreenWork from ".././Slides/WideScreen/WorkSlide/Work";
import WideScreenSkills from ".././Slides/WideScreen/Skills";
import WideScreenContact from ".././Slides/WideScreen/ContactSlide/Contact";
const Home = () => {
  if (!projects.length) return null;

  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <WideScreenHero />
        <WideScreenWork />
        <WideScreenSkills />
        {/* <WideScreenContact /> */}
        <Contact />
      </MediaQuery>
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Projects projects={projects} /> */}
    </div>
  );
};

export default Home;
