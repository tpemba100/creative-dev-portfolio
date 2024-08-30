import React from "react";
import About from ".././components/About/About";
import Projects from ".././components/Projects/Projects";
import Contact from ".././components/Contact/Contact";
import ".././App.css";
import { projects } from "../portfolio";
import MediaQuery from "react-responsive";
import WideScreenHero from ".././Slides/WideScreen/HeroSlide/Hero";
import WideScreenWork from ".././Slides/WideScreen/WorkSlide/Work";
import WideScreenSkills from ".././Slides/WideScreen/Skills";
import WideScreenContact from ".././Slides/WideScreen/ContactSlide/Contact";
import MobileHero from ".././Slides/Mobile/HeroSlide/Hero";
import MobileWork from ".././Slides/Mobile/WorkSlide/Work";
import MobileSkills from ".././Slides/Mobile/Skills";
import MobileContact from ".././Slides/Mobile/ContactSlide/Contact";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  if (!projects.length) return null;

  return (
    <div>
      <Navbar />
      <MediaQuery query="(min-device-width: 1224px)">
        <WideScreenHero />
        <WideScreenWork />
        <WideScreenSkills />
        <WideScreenContact />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <MobileHero />
        <div className="mobile-wrapper">
          <MobileWork />
          {/* Uncomment these if needed */}
          {/* <MobileSkills /> */}
          {/* <MobileContact /> */}
        </div>
      </MediaQuery>
    </div>
  );
};

export default Home;
