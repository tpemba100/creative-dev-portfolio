import React from "react";
import PropTypes from "prop-types";
import homeImg from "../../../../assets/Images/WhatsMyFood/Home.png";
import restaurantImg from "../../../../assets/Images/WhatsMyFood/Restaurant.png";
import addRestaurantImg from "../../../../assets/Images/WhatsMyFood/AddRestaurant.png";
import addFoodImg from "../../../../assets/Images/WhatsMyFood/AddFood.png";

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

  const styleRestaurant = {
    transform: `translate(0px,-${adjustedScrollPercent * 15}%)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-90vh",
    left: "0vw",
    height: "80vh",
  };

  const styleHome = {
    transform: `translate(0px,-${adjustedScrollPercent * 8}%) scale(0.9)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-45vh",
    right: "2vw",
    height: "80vh",
    filter: "blur(0.6px)",
  };

  const styleAddFood = {
    transform: `translate(0px,-${adjustedScrollPercent * 5}%) scale(0.7)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-75vh",
    left: "2vw",
    height: "80vh",
    filter: "blur(0.8px)",
  };

  const styleAddRestaurant = {
    transform: `translate(0px,-${adjustedScrollPercent * 2}%) scale(0.6)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-55vh",
    right: "5vw",
    height: "80vh",
    filter: "blur(1.2px)",
  };

  return (
    <>
      <img src={addFoodImg} style={styleAddFood} alt="addFood" />
      <img
        src={addRestaurantImg}
        style={styleAddRestaurant}
        alt="addRestaurant"
      />
      <img src={homeImg} style={styleHome} alt="Home" />
      <img src={restaurantImg} style={styleRestaurant} alt="Restaurant" />
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
