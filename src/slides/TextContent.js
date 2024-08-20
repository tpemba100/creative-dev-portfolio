import { color } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const TextContent = ({
  number,
  projectName,
  projectDesc,
  roles,
  projectType,
  refreshToggle,
}) => {
  const scrollDistance = window.scrollY;
  const h = "700";

  const styles = {
    textContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexFlow: "column nowrap",
      height: "100vh",
      width: "50%",
    },
    projectName: {
      fontFamily: "AvenirHeavy",
      fontSize: "60px",
      display: "inline",
    },
    projectDesc: {
      paddingTop: "2%",
      fontFamily: "AvenirBook",
      fontSize: "25px",
    },
    myRole: {
      paddingTop: "5%",
      fontFamily: "AvenirMedium",
      fontSize: "25px",
      display: "inline",
    },
    projectID: {
      fontFamily: "AvenirHeavy",
      fontSize: "25px",
      padding: "5%",
      display: "inline",
    },
    projectType: {
      fontFamily: "AvenirHeavy",
      fontSize: "25px",
      padding: "5%",
    },
    projectDetails: {
      display: "flex",
      flexFlow: "column nowrap",
      width: "100%",
      padding: "5%",
      paddingLeft: "10%",
      gap: "1.5rem",
    },
    projectDetailsContainer: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "center",
      paddingTop: "5%",
      height: "100%",
    },
  };

  const appearText = keyframes`
  0% {
    color: var(--clr-bg);
  }
  100% {
    color: var(--clr-primary);

  }
`;

  const revBlock = keyframes`
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`;

  // Styled component with animations
  const AnimatedText = styled.span`
    display: ${(props) => (props.inline ? "inline-block" : "block")};
    color: #fff;
    animation: ${appearText} 0.5s linear forwards;
    position: relative;
    padding-right: 10px;

    &::after {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 0%;
      height: 100%;
      background: #222;
      animation: ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
  `;

  return (
    <div style={scrollDistance < h ? null : styles.textContainer}>
      <div style={styles.projectID}>
        <AnimatedText inline>
          <span className="AvenirFont">{number}</span>
        </AnimatedText>
      </div>
      <div style={styles.projectDetailsContainer}>
        <div style={styles.projectDetails}>
          <div style={styles.projectName}>
            <AnimatedText inline>
              <span className="AvenirFont">{projectName}</span>
            </AnimatedText>
          </div>
          <div style={styles.myRole}>
            <AnimatedText inline>
              <span className="AvenirFont">
                {roles.map((role, index, arr) =>
                  index === arr.length - 1 ? (
                    <span key={role}>{role}</span>
                  ) : (
                    <span key={role}>
                      {role}
                      &nbsp; • &nbsp;
                    </span>
                  )
                )}
              </span>
            </AnimatedText>
          </div>
          <div style={styles.projectDesc}>
            <AnimatedText inline>
              <span className="AvenirFont">{projectDesc}</span>
            </AnimatedText>
          </div>
        </div>
      </div>
      <div style={styles.projectType}>
        <AnimatedText inline>
          <span className="AvenirFont">{projectType}</span>
        </AnimatedText>
      </div>
    </div>
  );
};

export default TextContent;
