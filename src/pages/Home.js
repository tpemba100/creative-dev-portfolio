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
// import WideScreenContact from ".././Slides/WideScreen/ContactSlide/Contact";
import MobileHero from ".././Slides/Mobile/HeroSlide/Hero";
import MobileWork from ".././Slides/Mobile/WorkSlide/Work";
import MobileSkills from ".././Slides/Mobile/Skills";
import MobileContact from ".././Slides/Mobile/ContactSlide/Contact";
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
      <MediaQuery query="(max-device-width: 1224px)">
        <MobileHero />
        <MobileWork />
        <MobileSkills />
        <MobileContact />
      </MediaQuery>
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Projects projects={projects} /> */}
    </div>
  );
};

export default Home;
