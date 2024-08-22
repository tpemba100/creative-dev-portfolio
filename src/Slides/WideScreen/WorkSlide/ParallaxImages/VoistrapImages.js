import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import voistrapHomeImg from "../../../../assets/Images/Voistrap/Home.png";
import voistrapMeetingsImg from "../../../../assets/Images/Voistrap/Meetings.png";
import voistrapPeopleImg from "../../../../assets/Images/Voistrap/People.png";
import voistrapScoreImg from "../../../../assets/Images/Voistrap/Score.png";

const VoistrapPhoneHome = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 18}%)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -200vh;
  left: 0vw;
  height: 80vh;
`;

const VoistrapPhoneMeetings = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 9}%) scale(0.9)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -120vh;
  right: 2vw;
  height: 80vh;
  filter: blur(0.6px);
`;

const VoistrapPhoneScore = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 7}%) scale(0.7)`,
  },
}))`
  transition: transform 0.2s ease-out;
  bottom: -135vh;
  left: 2vw;
  position: absolute;
  height: 80vh;
  filter: blur(0.8px);
`;

const VoistrapPhonePeople = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 3}%) scale(0.6)`,
  },
}))`
  transition: transform 0.2s ease-out;
  bottom: -95vh;
  right: 5vw;
  position: absolute;
  height: 80vh;
  filter: blur(1.2px);
`;

const VoistrapImages = ({
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
      <VoistrapPhonePeople
        src={voistrapPeopleImg}
        scroll={adjustedScrollPercent}
        alt="voistrapPeople"
      />
      <VoistrapPhoneScore
        src={voistrapScoreImg}
        scroll={adjustedScrollPercent}
        alt="voistrapScore"
      />
      <VoistrapPhoneMeetings
        src={voistrapMeetingsImg}
        scroll={adjustedScrollPercent}
        alt="voistrapMeetings"
      />
      <VoistrapPhoneHome
        src={voistrapHomeImg}
        scroll={adjustedScrollPercent}
        alt="voistrapHome"
      />
    </>
  );
};

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;
