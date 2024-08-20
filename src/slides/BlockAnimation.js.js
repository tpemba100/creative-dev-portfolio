import React from "react";
import styled, { keyframes } from "styled-components";

const appearText = keyframes`
  0% {
    color: #FFF;
  }
  100% {
    color: #333;
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
  display: ${(props) => (props.inline ? "inline" : "block")};
  color: #fff;
  animation: ${appearText} 0.5s linear forwards;
  position: relative;

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
const BlockAnimation = () => (
  <div style={{ width: "50%", backgroundColor: "red" }}>
    <AnimatedText>Simple Animation Test</AnimatedText>
  </div>
);

export default BlockAnimation;
