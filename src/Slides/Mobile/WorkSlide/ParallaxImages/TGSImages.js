import React from "react";
import PropTypes from "prop-types";
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
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight + index - 1;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      {/* logo */}
      <img
        src={TGCImg1}
        alt="tgcImg1"
        style={{
          transform: `translate(0px, -${adjustedScrollPercent * 19}%)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          top: "110vh",
          left: "15vw",
          height: "30vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      {/* post */}
      <img
        src={TGCImg2}
        alt="tgcImg2"
        style={{
          transform: `translate(0px, -${adjustedScrollPercent * 12}%)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          top: "130vh",
          left: "25vw",
          height: "30vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      {/* tgcHoodie */}
      <img
        src={TGCImg4}
        alt="tgcImg4"
        style={{
          transform: `translate(0px, -${adjustedScrollPercent * 19}%) scale(1)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          bottom: "-130vh",
          right: "30vw",
          height: "30vh",
          filter: "blur(0.6px)",
          objectFit: "cover",
          zIndex: 3,
        }}
      />
      {/* tgcCard */}
      <img
        src={TGCImg3}
        alt="tgcImg3"
        style={{
          transform: `translate(0px, -${
            adjustedScrollPercent * 9
          }%) scale(0.8)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          top: "190vh",
          right: "5vw",
          height: "30vh",
          filter: "blur(0.6px)",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
    </>
  );
};

TGC.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TGC;
