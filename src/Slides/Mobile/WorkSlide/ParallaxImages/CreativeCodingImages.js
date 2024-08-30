import React from "react";
import PropTypes from "prop-types";
import ninjaImg from "../../../../assets/Images/CreativeCoding/ninjaBunny.png";
import fireImg from "../../../../assets/Images/CreativeCoding/interactiveFire.png";
import sketchImg from "../../../../assets/Images/CreativeCoding/sketchPad.png";

const CreativeCodingImages = ({
  boxHeight,
  index,
  screenHeight,
  scrollHeight,
  scrollPercent,
}) => {
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  // Image-specific styles
  const styleBunnyPhone = {
    transform: `translate(0px, -${adjustedScrollPercent * 8}%) scale(0.5)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-60vh",
    right: "-35vw",
    height: "40vh",
    filter: "blur(0.4px)",
  };

  const styleP5Fire = {
    transform: `translate(0px, -${adjustedScrollPercent * 8}%) scale(0.5)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-90vh",
    right: "-35vw",
    height: "40vh",
    filter: "blur(0.4px)",
  };

  const styleP5SketchPad = {
    transform: `translate(0px, -${adjustedScrollPercent * 8}%) scale(0.5)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-130vh",
    right: "-35vw",
    height: "40vh",
    filter: "blur(0.4px)",
  };

  return (
    <>
      <img src={sketchImg} style={styleP5SketchPad} alt="sketchPad" />
      <img src={fireImg} style={styleP5Fire} alt="interactiveFire" />
      <img src={ninjaImg} style={styleBunnyPhone} alt="ninjaBunny" />
    </>
  );
};

CreativeCodingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CreativeCodingImages;
