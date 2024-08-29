import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import voistrapHomeImg from "../../../../assets/Images/Voistrap/Home.png";
import voistrapMeetingsImg from "../../../../assets/Images/Voistrap/Meetings.png";
import voistrapPeopleImg from "../../../../assets/Images/Voistrap/People.png";
import voistrapScoreImg from "../../../../assets/Images/Voistrap/Score.png";
import ninjaImg from "../../../../assets/Images/CreativeCoding/ninjaBunny.png";
import fireImg from "../../../../assets/Images/CreativeCoding/interactiveFire.png";
import sketchImg from "../../../../assets/Images/CreativeCoding/sketchPad.png";

const BunnyPhone = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 15}%) scale(0.3)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -200vh;
  transform-origin: left center;
  left: 2vw;
  height: 80vh;
`;

const P5Fire = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 8.5}%) scale(0.3)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -170vh;
  right: 4vw;
  transform-origin: right center;
  height: 80vh;
  filter: blur(0.6px);
`;

const P5SketchPad = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 3.5}%) scale(0.3)`,
  },
}))`
  transition: transform 0.2s ease-out;
  bottom: -140vh;
  left: 2vw;
  transform-origin: left center;
  position: absolute;
  height: 80vh;
  filter: blur(0.8px);
`;

// const VoistrapPhonePeople = styled.img.attrs(({ scroll }) => ({
//   style: {
//     transform: `translate(0px,-${scroll * 2}%) scale(0.45)`,
//   },
// }))`
//   transition: transform 0.2s ease-out;
//   bottom: -155vh;
//   right: 10vw;
//   transform-origin: right center;
//   position: absolute;
//   height: 80vh;
//   filter: blur(1.2px);
// `;

const VoistrapImages = ({
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
      {/* <VoistrapPhonePeople
        src={voistrapPeopleImg}
        scroll={adjustedScrollPercent}
        alt="voistrapPeople"
      /> */}
      <P5SketchPad
        src={sketchImg}
        scroll={adjustedScrollPercent}
        alt="voistrapScore"
      />
      <P5Fire src={fireImg} scroll={adjustedScrollPercent} alt="fireImg" />
      <BunnyPhone
        src={ninjaImg}
        scroll={adjustedScrollPercent}
        alt="bunnyNinja"
      />
    </>
  );
};

// VoistrapImages.propTypes = {
//   boxHeight: PropTypes.number.isRequired,
//   index: PropTypes.number.isRequired,
//   screenHeight: PropTypes.number.isRequired,
//   scrollHeight: PropTypes.number.isRequired,
//   scrollPercent: PropTypes.number.isRequired,
// };

export default VoistrapImages;
