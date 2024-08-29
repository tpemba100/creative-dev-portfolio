import React from "react";
import PropTypes from "prop-types";
// import fastRetailingUQImg from "../../../../assets/Images/FastRetailing/UQ.png";
// import fastRetailingGUImg from "../../../../assets/Images/FastRetailing/GU.png";
// import fastRetailingPLSTImg from "../../../../assets/Images/FastRetailing/PLST.png";
// import fastRetailingGU2Img from "../../../../assets/Images/FastRetailing/GU2.png";
import HSALaptop from "../../../../assets/Images/FastRetailing/HSALaptop.png";
import HSAPhone from "../../../../assets/Images/FastRetailing/HSAPhone.png";
import HSATablet from "../../../../assets/Images/FastRetailing/HSATablet.png";
import styled from "styled-components";

const Image = styled.img`
  transition: transform 0.2s ease-out;
  position: absolute;
  height: 80vh;
`;

const HSA1 = styled(Image)`
  top: 95vh;
  left: 0vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 14}%)`};
`;

const HSA2 = styled(Image)`
  top: 75vh;
  right: 1vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 6}%) scale(0.9)`};
  filter: blur(0.6px);
`;

const HSA3 = styled(Image)`
  top: 75vh;
  right: 25vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 4}%) scale(0.8)`};
  filter: blur(0.8px);
`;

const HSA4 = styled(Image)`
  top: 105vh;
  right: 0vw;
  transform: ${({ scroll }) => `translate(0px,-${scroll * 3}%) scale(1)`};
  // filter: blur(1.2px);
  background: rgba(255, 255, 255, 0); /* Fully transparent white */
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
      {/* <FastRetailingPhoneUQ */}
      <HSA1
        src={HSAPhone}
        scroll={adjustedScrollPercent}
        alt="fastRetailingUQ"
      />
      <HSA2
        src={HSATablet}
        scroll={adjustedScrollPercent}
        alt="fastRetailingGU"
      />
      {/* <HSA3
        src={HSALaptop}
        scroll={adjustedScrollPercent}
        alt="fastRetailingPLST"
      /> */}
      <HSA4
        src={HSALaptop}
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
