import React, { useState, useEffect } from "react";
import styled from "styled-components";
import device from "../../assets/breakpoints";

const Container = styled.div`
  height: 120vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  /* border: 1px solid blue; */
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0); /* Fully transparent white */
`;

const SkillsTitle = styled.div.attrs(({ scrollPercent }) => ({
  style: {
    transform: `translateX(-${scrollPercent * 10}%)`,
  },
}))`
  transition: transform 0.5s ease-out;
  font-family: "AvenirHeavy";
  position: absolute;
  color: #eee;
  top: 30%;
  right: -50%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SkillsList = styled.div`
  /* border: 1px solid #EFEFEF; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: "AvenirRoman";
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 35px;
  }
  @media ${device.desktop} {
    font-size: 65px;
  }
`;

const Skills = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxScroll = scrollHeight - clientHeight;
    const scroll = (scrollTop / maxScroll) * 100;
    const minLimit = (clientHeight * 950) / scrollHeight;
    const maxLimit = (clientHeight * 1180) / scrollHeight;

    if (scroll >= minLimit && scroll <= maxLimit + 3) {
      setScrollPercent(scroll - minLimit);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Container>
      <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
      <SkillsList>
        <div>
          Product Design
          <br />
          Design System
          <br />
          Information Architecture
          <br />
          <br />
          HTML & CSS
          <br />
          React
          <br />
          Node JS
          <br />
        </div>
        <div>
          Project Management
          <br />
          Visual Communication
          <br />
          Concept Development
          <br />
          <br />
          Figma
          <br />
          Sketch
          <br />
          Principle
          <br />
        </div>
      </SkillsList>
    </Container>
  );
};

export default Skills;
