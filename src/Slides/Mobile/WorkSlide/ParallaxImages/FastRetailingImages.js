import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import fastRetailingUQImg from "../../../../assets/Images/FastRetailing/UQ.png";
// import fastRetailingGUImg from "../../../../assets/Images/FastRetailing/GU.png";
// import fastRetailingPLSTImg from "../../../../assets/Images/FastRetailing/PLST.png";
// import fastRetailingGU2Img from "../../../../assets/Images/FastRetailing/GU2.png";
import HSALaptop from "../../../../assets/Images/FastRetailing/HSALaptop.png";
import HSAPhone from "../../../../assets/Images/FastRetailing/HSAPhone.png";
import HSATablet from "../../../../assets/Images/FastRetailing/HSATablet.png";
const HSA1 = styled.img.attrs(({ scroll }) => ({
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

const HSA2 = styled.img.attrs(({ scroll }) => ({
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

const FastRetailingPhonePLST = styled.img.attrs(({ scroll }) => ({
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

const HSA3 = styled.img.attrs(({ scroll }) => ({
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

const FastRetailingImages = ({
  scrollPercent,
  boxHeight,
  index,
  scrollHeight,
  screenHeight,
}) => {
  const heightToBeReducedInVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      {/* <FastRetailingPhonePLST
        src={fastRetailingPLSTImg}
        scroll={adjustedScrollPercent}
        alt="fastRetailingPLST"
      /> */}
      <HSA2
        src={HSATablet}
        scroll={adjustedScrollPercent}
        alt="fastRetailingGU"
      />
      <HSA3
        src={HSALaptop}
        scroll={adjustedScrollPercent}
        alt="fastRetailingGU2"
      />
      <HSA1
        src={HSAPhone}
        scroll={adjustedScrollPercent}
        alt="fastRetailingUQ"
      />
    </>
  );
};

FastRetailingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FastRetailingImages;
