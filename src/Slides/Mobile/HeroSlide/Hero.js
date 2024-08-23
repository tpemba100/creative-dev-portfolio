import React from "react";
import NameAndJobTitle from "./NameAndJobTitle";
import AboutMe from "./AboutMe";

const Hero = () => {
  return (
    <div className="mobileHero">
      <NameAndJobTitle />
      <AboutMe />
    </div>
  );
};

export default Hero;
