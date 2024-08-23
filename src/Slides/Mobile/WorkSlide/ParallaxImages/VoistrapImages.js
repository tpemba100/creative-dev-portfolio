import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import voistrapHomeImg from "../../../../assets/Images/Voistrap/Home.png";
import voistrapMeetingsImg from "../../../../assets/Images/Voistrap/Meetings.png";
import voistrapPeopleImg from "../../../../assets/Images/Voistrap/People.png";
import voistrapScoreImg from "../../../../assets/Images/Voistrap/Score.png";

const VoistrapPhoneHome = styled.img.attrs(({ scroll }) => ({
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

const VoistrapPhoneMeetings = styled.img.attrs(({ scroll }) => ({
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

const VoistrapPhoneScore = styled.img.attrs(({ scroll }) => ({
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

const VoistrapPhonePeople = styled.img.attrs(({ scroll }) => ({
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
