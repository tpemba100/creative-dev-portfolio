import React from "react";
import PropTypes from "prop-types";
// import teslaTyreImg from "../../../../assets/Images/Tesla/Tyre.png";
// import teslaHeatImg from "../../../../assets/Images/Tesla/Heat.png";
// import teslaLockImg from "../../../../assets/Images/Tesla/Lock.png";
// import teslaBatteryImg from "../../../../assets/Images/Tesla/Battery.png";
import bookSpace1 from "../../../../assets/Images/BookSpace/BookSpacePhone1.png";
import bookSpace2 from "../../../../assets/Images/BookSpace/BookSpacePhone2.png";
import bookSpace3 from "../../../../assets/Images/BookSpace/BookSpacePhone3.png";
import bookSpace4 from "../../../../assets/Images/BookSpace/BookSpacePhone4.png";

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

  const styleBookSpace1 = {
    transform: `translate(0px,-${adjustedScrollPercent * 14}%)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-130vh",
    left: "0vw",
    height: "80vh",
  };

  const styleBookSpace2 = {
    transform: `translate(0px,-${adjustedScrollPercent * 8}%) scale(0.9)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-90vh",
    right: "2vw",
    filter: "blur(0.6px)",
    height: "80vh",
  };

  const styleBookSpace3 = {
    transform: `translate(0px,-${adjustedScrollPercent * 5}%) scale(0.8)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-95vh",
    left: "2vw",
    filter: "blur(0.6px)",
    height: "80vh",
  };

  const styleBookSpace4 = {
    transform: `translate(0px,-${adjustedScrollPercent * 4}%) scale(0.7)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    top: "120vh",
    right: "5vw",
    filter: "blur(0.6px)",
    height: "80vh",
  };

  return (
    <div className="tesla">
      <img src={bookSpace4} style={styleBookSpace4} alt="teslaLock" />
      <img src={bookSpace3} style={styleBookSpace3} alt="teslaBattery" />
      <img src={bookSpace2} style={styleBookSpace2} alt="teslaTyre" />
      <img src={bookSpace1} style={styleBookSpace1} alt="teslaHeat" />
      {/* <img src={teslaLockImg} style={styleLock} alt="teslaLock" />
      <img src={teslaBatteryImg} style={styleBattery} alt="teslaBattery" />
      <img src={teslaTyreImg} style={styleTyre} alt="teslaTyre" />
      <img src={teslaHeatImg} style={styleHeat} alt="teslaHeat" /> */}
    </div>
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
