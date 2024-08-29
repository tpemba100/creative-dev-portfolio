import React from "react";
import PropTypes from "prop-types";
import illImg1 from "../../../../assets/Images/illustrations/ill1_boudha.png";
import illImg2 from "../../../../assets/Images/illustrations/ill2_jh.png";
import illImg3 from "../../../../assets/Images/illustrations/ill3_scarface.png";
import illImg5 from "../../../../assets/Images/illustrations/ill5_editorial.jpg";

const Illustrations = ({
  scrollPercent,
  boxHeight,
  index,
  scrollHeight,
  screenHeight,
}) => {
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight + index - 1;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  // Mobile-specific styles
  const styleillImg2 = {
    transform: `translate(0px, -${adjustedScrollPercent * 12}%) scale(0.7)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-60vh",
    right: "-5vw",
    height: "40vh",
    filter: "blur(0.4px)",
  };
  const styleillImg1 = {
    transform: `translate(0px, -${adjustedScrollPercent * 14}%) scale(0.8)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-100vh",
    left: "5vw",
    height: "40vh",
  };

  const styleillImg3 = {
    transform: `translate(0px, -${adjustedScrollPercent * 17}%) scale(0.8)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-150vh",
    left: "0vw",
    height: "40vh",
    filter: "blur(0.5px)",
  };

  const styleillImg5 = {
    transform: `translate(0px, -${adjustedScrollPercent * 10}%) scale(0.7)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-150vh",
    right: "10vw",
    height: "40vh",
    filter: "blur(0.7px)",
  };

  return (
    <>
      <img src={illImg2} style={styleillImg2} alt="jh" />
      <img src={illImg1} style={styleillImg1} alt="boudha" />
      <img src={illImg5} style={styleillImg5} alt="editorial" />
      <img src={illImg3} style={styleillImg3} alt="scarface" />
    </>
  );
};

Illustrations.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default Illustrations;
