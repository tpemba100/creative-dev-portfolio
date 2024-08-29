import React from "react";
import PropTypes from "prop-types";
import eyepTabletImg from "../../../../assets/Images/Eyep/Tablet.png";
import eyepIphoneImg from "../../../../assets/Images/Eyep/Iphone.png";
import TGCImg1 from "../../../../assets/Images/TGC/tgc1.png";
import TGCImg2 from "../../../../assets/Images/TGC/tgc2.jpg";
import TGCImg3 from "../../../../assets/Images/TGC/tgc3.png";
import TGCImg4 from "../../../../assets/Images/TGC/tgc4.png";
// import TGCImg5 from "../../../../assets/Images/TGC/tgc5.png";
// import TGCImg6 from "../../../../assets/Images/TGC/tgc6.png";
// import TGCImg7 from "../../../../assets/Images/TGC/tgc7.png";

const TGC = ({
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
        src={TGCImg1}
        alt="eyepIphone"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 19}%)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          top: "100vh",
          left: "5vw",
          height: "80vh",
          scale: "0.8",
        }}
      />

      <img
        src={TGCImg2}
        alt="tgcPost"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 12}%)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          top: "110vh",
          left: "10vw",
          height: "80vh",
          scale: "0.5",
        }}
      />
      <img
        src={TGCImg4}
        alt="tgcHoodie"
        style={{
          transform: `translate(0px,-${
            adjustedScrollPercent * 19
          }%) scale(0.94)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          bottom: "-150vh",
          right: "15vw",
          height: "80vh",
          filter: "blur(0.6px)",
          scale: "0.8",
          background: "rgba(255, 255, 255, 0)" /* Fully transparent white */,
        }}
      />
      <img
        src={TGCImg3}
        alt="tgcCard"
        style={{
          transform: `translate(0px,-${
            adjustedScrollPercent * 9
          }%) scale(0.94)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          top: "145vh",
          right: "0vw",
          height: "80vh",
          filter: "blur(0.6px)",
          scale: "0.6",
        }}
      />
    </>
  );
};

// EyepImages.propTypes = {
//   boxHeight: PropTypes.number.isRequired,
//   index: PropTypes.number.isRequired,
//   screenHeight: PropTypes.number.isRequired,
//   scrollHeight: PropTypes.number.isRequired,
//   scrollPercent: PropTypes.number.isRequired,
// };

export default TGC;
