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

const BunnyNinja = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 18}%)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -80vh;
  left: -25vw;
  height: 80vh;
  scale: 0.5;
`;

const InteractiveFire = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 9}%) scale(0.4)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -145vh;
  right: -15vw;
  height: 80vh;
  filter: blur(0.6px);
`;

const SketchPad = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 7}%) scale(0.6)`,
  },
}))`
  transition: transform 0.2s ease-out;
  bottom: -145vh;
  left: -25vw;
  position: absolute;
  height: 80vh;
  filter: blur(0.8px);
  scale: 0.8;
`;

// const VoistrapPhonePeople = styled.img.attrs(({ scroll }) => ({
//   style: {
//     transform: `translate(0px,-${scroll * 3}%) scale(0.6)`,
//   },
// }))`
//   transition: transform 0.2s ease-out;
//   bottom: -95vh;
//   right: 5vw;
//   position: absolute;
//   height: 80vh;
//   filter: blur(1.2px);
// `;

const CreativeCodingImages = ({
  scrollPercent,
  boxHeight,
  index,
  scrollHeight,
  screenHeight,
}) => {
  const heighttoBeReducedinVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      {/* <VoistrapPhonePeople
        src={voistrapPeopleImg}
        scroll={adjustedScrollPercent}
        alt="voistrapPeople"
      /> */}
      <BunnyNinja
        src={ninjaImg}
        scroll={adjustedScrollPercent}
        alt="voistrapHome"
      />
      <InteractiveFire
        src={fireImg}
        scroll={adjustedScrollPercent}
        alt="voistrapMeetings"
      />
      <SketchPad
        src={sketchImg}
        scroll={adjustedScrollPercent}
        alt="voistrapScore"
      />
    </>
  );
};

CreativeCodingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CreativeCodingImages;
