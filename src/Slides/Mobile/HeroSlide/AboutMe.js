/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import device from "../../../assets/breakpoints";

const Container = styled.section`
  height: 50vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const AboutMeDescription = styled.span`
  font-family: "AvenirRoman";
  font-size: 24px;
  text-align: center;
  @media ${device.mobileS} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 24px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 40px;
  }
  @media ${device.laptop} {
    padding: 90px;
    font-size: 45px;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <AboutMeDescription>
        Creative developer blending design and tech to craft user-focused
        digital experiences.
      </AboutMeDescription>
    </Container>
  );
};

export default AboutMe;
