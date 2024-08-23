import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import homeImg from "../../../../assets/Images/WhatsMyFood/Home.png";
import restaurantImg from "../../../../assets/Images/WhatsMyFood/Restaurant.png";
import addRestaurantImg from "../../../../assets/Images/WhatsMyFood/AddRestaurant.png";
import addFoodImg from "../../../../assets/Images/WhatsMyFood/AddFood.png";

const Restaurant = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 15}%) scale(0.7)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -170vh;
  transform-origin: left center;
  left: 2vw;
  height: 80vh;
`;

const Home = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 8.5}%) scale(0.62)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -125vh;
  right: 2vw;
  transform-origin: right center;
  height: 80vh;
  filter: blur(0.6px);
`;

const AddFood = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 3.5}%) scale(0.5)`,
  },
}))`
  transition: transform 0.2s ease-out;
  bottom: -110vh;
  left: 10vw;
  transform-origin: left center;
  position: absolute;
  height: 80vh;
  filter: blur(0.8px);
`;

const AddRestaurant = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 2}%) scale(0.45)`,
  },
}))`
  transition: transform 0.2s ease-out;
  bottom: -105vh;
  right: 10vw;
  transform-origin: right center;
  position: absolute;
  height: 80vh;
  filter: blur(1.2px);
`;

const WhatsMyFoodImages = ({
  boxHeight,
  index,
  scrollHeight,
  screenHeight,
  scrollPercent,
}) => {
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight + index - 1;

  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  if (adjustedScrollPercent > 0 && adjustedScrollPercent < 0.1) {
    console.log("WMF");
  }

  return (
    <>
      <AddFood src={addFoodImg} scroll={adjustedScrollPercent} alt="addFood" />
      <AddRestaurant
        src={addRestaurantImg}
        scroll={adjustedScrollPercent}
        alt="addRestaurant"
      />
      <Home src={homeImg} scroll={adjustedScrollPercent} alt="Home" />
      <Restaurant
        src={restaurantImg}
        scroll={adjustedScrollPercent}
        alt="Restaurant"
      />
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
