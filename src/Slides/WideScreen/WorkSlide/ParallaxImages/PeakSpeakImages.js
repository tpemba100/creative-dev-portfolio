import React from "react";
import PropTypes from "prop-types";
import SPEAK1 from "../../../../assets/Images/Lashic/SPEAK1.png";
import SPEAK2 from "../../../../assets/Images/Lashic/SPEAK2.png";
import SPEAK3 from "../../../../assets/Images/Lashic/SPEAK3.png";
import SPEAK4 from "../../../../assets/Images/Lashic/SPEAK4.png";

const LashicImages = ({
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
        src={SPEAK1}
        alt="Task"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 15}%)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          bottom: "-100vh",
          left: "0vw",
          height: "80vh",
        }}
      />
      <img
        src={SPEAK2}
        alt="Alert"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 9}%) scale(0.9)`,
          transition: "transform 0.2s ease-out",
          position: "absolute",
          bottom: "-85vh",
          right: "2vw",
          height: "80vh",
          filter: "blur(0.6px)",
        }}
      />
      <img
        src={SPEAK3}
        alt="Customer Details"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 5}%) scale(0.7)`,
          transition: "transform 0.2s ease-out",
          bottom: "-95vh",
          left: "2vw",
          position: "absolute",
          height: "80vh",
          filter: "blur(0.8px)",
        }}
      />
      <img
        src={SPEAK4}
        alt="Customers"
        style={{
          transform: `translate(0px,-${adjustedScrollPercent * 2}%) scale(0.6)`,
          transition: "transform 0.2s ease-out",
          bottom: "-75vh",
          right: "5vw",
          position: "absolute",
          height: "80vh",
          filter: "blur(1.2px)",
        }}
      />
    </>
  );
};

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;
