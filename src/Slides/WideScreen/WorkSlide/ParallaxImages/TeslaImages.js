import React from "react";
import PropTypes from "prop-types";
import teslaTyreImg from "../../../../assets/Images/Tesla/Tyre.png";
import teslaHeatImg from "../../../../assets/Images/Tesla/Heat.png";
import teslaLockImg from "../../../../assets/Images/Tesla/Lock.png";
import teslaBatteryImg from "../../../../assets/Images/Tesla/Battery.png";

const TeslaImages = ({
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

  const styleHeat = {
    transform: `translate(0px,-${adjustedScrollPercent * 15}%)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-90vh",
    left: "0vw",
    height: "80vh",
  };

  const styleTyre = {
    transform: `translate(0px,-${adjustedScrollPercent * 8}%) scale(0.9)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-45vh",
    right: "2vw",
    filter: "blur(0.6px)",
    height: "80vh",
  };

  const styleBattery = {
    transform: `translate(0px,-${adjustedScrollPercent * 5}%) scale(0.7)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-75vh",
    left: "2vw",
    filter: "blur(0.8px)",
    height: "80vh",
  };

  const styleLock = {
    transform: `translate(0px,-${adjustedScrollPercent * 2}%) scale(0.6)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-55vh",
    right: "5vw",
    filter: "blur(1.2px)",
    height: "80vh",
  };

  return (
    <>
      <img src={teslaLockImg} style={styleLock} alt="teslaLock" />
      <img src={teslaBatteryImg} style={styleBattery} alt="teslaBattery" />
      <img src={teslaTyreImg} style={styleTyre} alt="teslaTyre" />
      <img src={teslaHeatImg} style={styleHeat} alt="teslaHeat" />
    </>
  );
};

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
