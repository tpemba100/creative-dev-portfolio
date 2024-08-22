import React from "react";
import PropTypes from "prop-types";
import eyepTabletImg from "../../../../assets/Images/Eyep/Tablet.png";
import eyepIphoneImg from "../../../../assets/Images/Eyep/Iphone.png";

const EyepImages = ({
  scrollPercent,
  boxHeight,
  index,
  scrollHeight,
  screenHeight,
}) => {
  const heighttoBeReducedinVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight + index - 1;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      <img
        src={eyepTabletImg}
        alt="eyepTablet"
        style={{
          transform: `translate(0px,-${
            adjustedScrollPercent * 2
          }%) scale(0.94)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          bottom: "-40vh",
          right: "0vw",
          height: "80vh",
          filter: "blur(0.6px)",
        }}
      />
      <img
        src={eyepIphoneImg}
        alt="eyepIphone"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 12}%)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          bottom: "-70vh",
          left: "0vw",
          height: "80vh",
        }}
      />
    </>
  );
};

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;
