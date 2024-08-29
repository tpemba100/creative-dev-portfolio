import React from "react";
import PropTypes from "prop-types";
// import homeImg from "../../../../assets/Images/WhatsMyFood/Home.png";
// import restaurantImg from "../../../../assets/Images/WhatsMyFood/Restaurant.png";
// import addRestaurantImg from "../../../../assets/Images/WhatsMyFood/AddRestaurant.png";
// import addFoodImg from "../../../../assets/Images/WhatsMyFood/AddFood.png";
import illImg1 from "../../../../assets/Images/illustrations/ill1_boudha.png";
import illImg2 from "../../../../assets/Images/illustrations/ill2_jh.png";
import illImg3 from "../../../../assets/Images/illustrations/ill3_scarface.png";
// import illImg4 from "../../../../assets/Images/illustrations/ill4_tgc.png";
import illImg5 from "../../../../assets/Images/illustrations/ill5_editorial.jpg";
// import illImg6 from "../../../../assets/Images/illustrations/ill6_tools.png";

const WhatsMyFoodImages = ({
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

  const styleillImg2 = {
    transform: `translate(0px,-${adjustedScrollPercent * 15}%) scale(0.9)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-90vh",
    right: "2vw",
    height: "80vh",
    filter: "blur(0.6px)",
  };
  const styleillImg1 = {
    transform: `translate(0px,-${adjustedScrollPercent * 16}%)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-120vh",
    left: "10svw",
    height: "80vh",
    scale: "0.7",
  };

  const styleillImg3 = {
    transform: `translate(0px,-${adjustedScrollPercent * 5}%) scale(0.7)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-125vh",
    left: "2vw",
    height: "80vh",
    filter: "blur(0.8px)",
  };

  const styleillImg5 = {
    transform: `translate(0px,-${adjustedScrollPercent * 9}%) scale(0.6)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-120vh",
    right: "25vw",
    height: "80vh",
    filter: "blur(1.2px)",
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

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;
