import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import teslaTyreImg from "../../../../assets/Images/Tesla/Tyre.png";
// import teslaHeatImg from "../../../../assets/Images/Tesla/Heat.png";
// import teslaLockImg from "../../../../assets/Images/Tesla/Lock.png";
// import teslaBatteryImg from "../../../../assets/Images/Tesla/Battery.png";
import bookSpace1 from "../../../../assets/Images/BookSpace/BookSpacePhone1.png";
import bookSpace2 from "../../../../assets/Images/BookSpace/BookSpacePhone2.png";
import bookSpace3 from "../../../../assets/Images/BookSpace/BookSpacePhone3.png";
import bookSpace4 from "../../../../assets/Images/BookSpace/BookSpacePhone4.png";

const Heat = styled.img.attrs(({ scroll }) => ({
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

const Tyre = styled.img.attrs(({ scroll }) => ({
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

const Battery = styled.img.attrs(({ scroll }) => ({
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

const Lock = styled.img.attrs(({ scroll }) => ({
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

const TeslaImages = ({
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

  return (
    <>
      <Lock src={bookSpace4} scroll={adjustedScrollPercent} alt="teslaLock" />
      <Battery
        src={bookSpace3}
        scroll={adjustedScrollPercent}
        alt="teslaBattery"
      />
      <Tyre src={bookSpace2} scroll={adjustedScrollPercent} alt="teslaTyre" />
      <Heat src={bookSpace1} scroll={adjustedScrollPercent} alt="teslaHeat" />
    </>
  );
};

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
