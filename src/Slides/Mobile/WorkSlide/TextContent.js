import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import device from "../../../assets/breakpoints";

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
  align-items: flex-start; /* Aligns content to the start of the container */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  padding: 0 5%; /* Adjust padding as needed */
  box-sizing: border-box; /* Includes padding in width/height calculations */
`;

const ProjectName = styled.div`
  font-family: "AvenirHeavy";
  font-size: 4vw; /* Responsive font size */
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 45px;
  }
  @media ${device.mobileL} {
    font-size: 50px;
  }
  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
`;

const ProjectDesc = styled.div`
  padding-top: 2%;
  font-family: "AvenirBook";
  font-size: 2vw; /* Responsive font size */
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`;

const MyRole = styled.div`
  padding-top: 5%;
  font-family: "AvenirHeavy";
  font-size: 2vw; /* Responsive font size */
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`;

const ProjectID = styled.div`
  font-family: "AvenirHeavy";
  font-size: 4vw; /* Responsive font size */
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  padding: 5%;
`;

const ProjectType = styled.div`
  font-family: "AvenirHeavy";
  font-size: 4vw; /* Responsive font size */
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  padding: 5%;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the start of the container */
  height: 100%;
  width: 100%;
`;

const TextContent = ({
  number,
  projectName,
  projectDesc,
  roles,
  projectType,
  refreshToggle,
}) => {
  return (
    <TextContainer>
      <ProjectID>{number}</ProjectID>
      <ProjectDetailsContainer>
        <ProjectDetails>
          <ProjectName>{projectName}</ProjectName>
          <MyRole>
            {roles.map((role, index, arr) =>
              index === arr.length - 1 ? role : `${role} • `
            )}
          </MyRole>
          <ProjectDesc>{projectDesc}</ProjectDesc>
        </ProjectDetails>
      </ProjectDetailsContainer>
      <ProjectType>{projectType}</ProjectType>
    </TextContainer>
  );
};

TextContent.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  refreshToggle: PropTypes.bool.isRequired,
};

export default TextContent;
