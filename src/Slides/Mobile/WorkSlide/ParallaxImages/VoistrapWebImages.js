import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import dots from "../../../../assets/Images/Showcase/Dots.png";
import bubbles from "../../../../assets/Images/Showcase/Bubble.png";
import paths from "../../../../assets/Images/Showcase/Paths.png";
import bigBubble from "../../../../assets/Images/Showcase/BigBubble.png";

const Dots = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 36}%) scale(0.99)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -250vh;
  left: 2vw;
  transform-origin: left center;
  width: 80vw;
`;

const Bubbles = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 25}%) scale(0.9)`,
  },
}))`
  position: absolute;
  bottom: -210vh;
  right: 2vw;
  transform-origin: right center;
  width: 80vw;
  filter: blur(0.2px);
`;

const BigBubble = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 13}%) scale(0.8)`,
  },
}))`
  bottom: -160vh;
  left: 2vw;
  transform-origin: left center;
  position: absolute;
  width: 80vw;
  filter: blur(0.5px);
`;

const Paths = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 4}%) scale(0.7)`,
  },
}))`
  bottom: -120vh;
  right: 2vw;
  transform-origin: right center;
  position: absolute;
  width: 80vw;
  filter: blur(0.8px);
`;

const VoistrapWebImages = ({
  boxHeight,
  index,
  screenHeight,
  scrollHeight,
  scrollPercent,
}) => {
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      <Paths src={paths} scroll={adjustedScrollPercent} alt="paths" />
      <BigBubble
        src={bigBubble}
        scroll={adjustedScrollPercent}
        alt="bigBubble"
      />
      <Bubbles src={bubbles} scroll={adjustedScrollPercent} alt="bubbles" />
      <Dots src={dots} scroll={adjustedScrollPercent} alt="dots" />
    </>
  );
};

VoistrapWebImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapWebImages;
