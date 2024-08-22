import React from "react";
import PropTypes from "prop-types";
import fastRetailingUQImg from "../../../../assets/Images/FastRetailing/UQ.png";
import fastRetailingGUImg from "../../../../assets/Images/FastRetailing/GU.png";
import fastRetailingPLSTImg from "../../../../assets/Images/FastRetailing/PLST.png";
import fastRetailingGU2Img from "../../../../assets/Images/FastRetailing/GU2.png";
import styled from "styled-components";

const Image = styled.img`
  transition: transform 0.2s ease-out;
  position: absolute;
  height: 80vh;
`;

const FastRetailingPhoneUQ = styled(Image)`
  top: 90vh;
  left: 0vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 14}%)`};
`;

const FastRetailingPhoneGU = styled(Image)`
  top: 45vh;
  right: 2vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 8}%) scale(0.9)`};
  filter: blur(0.6px);
`;

const FastRetailingPhonePLST = styled(Image)`
  top: 75vh;
  right: 25vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 4}%) scale(0.8)`};
  filter: blur(0.8px);
`;

const FastRetailingPhoneGU2 = styled(Image)`
  top: 55vh;
  right: 5vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 2}%) scale(0.6)`};
  filter: blur(1.2px);
`;

const FastRetailingImages = ({
  boxHeight,
  index,
  screenHeight,
  scrollHeight,
  scrollPercent,
}) => {
  const heighttoBeReducedinVH = boxHeight * index - 100;
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
  const adjustedScrollPercent = scrollPercent - scrollOffsetInPercent;

  return (
    <>
      <FastRetailingPhoneUQ
        src={fastRetailingUQImg}
        scroll={adjustedScrollPercent}
        alt="fastRetailingUQ"
      />
      <FastRetailingPhoneGU
        src={fastRetailingGUImg}
        scroll={adjustedScrollPercent}
        alt="fastRetailingGU"
      />
      <FastRetailingPhonePLST
        src={fastRetailingPLSTImg}
        scroll={adjustedScrollPercent}
        alt="fastRetailingPLST"
      />
      <FastRetailingPhoneGU2
        src={fastRetailingGU2Img}
        scroll={adjustedScrollPercent}
        alt="fastRetailingGU2"
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
