import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import alertImg from "../../../../assets/Images/Lashic/Alert.png";
// import taskImg from "../../../../assets/Images/Lashic/Task.png";
// import customersImg from "../../../../assets/Images/Lashic/Customers.png";
// import customerDetailImg from "../../../../assets/Images/Lashic/CustomerDetail.png";
import SPEAK1 from "../../../../assets/Images/Lashic/SPEAK1.png";
import SPEAK2 from "../../../../assets/Images/Lashic/SPEAK2.png";
import SPEAK3 from "../../../../assets/Images/Lashic/SPEAK3.png";
import SPEAK4 from "../../../../assets/Images/Lashic/SPEAK4.png";

const Task = styled.img.attrs(({ scroll }) => ({
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
const Alert = styled.img.attrs(({ scroll }) => ({
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
const CustomerDetail = styled.img.attrs(({ scroll }) => ({
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
const Customers = styled.img.attrs(({ scroll }) => ({
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

const LashicImages = ({
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
      <Customers src={SPEAK4} scroll={adjustedScrollPercent} alt="customers" />
      <CustomerDetail
        src={SPEAK3}
        scroll={adjustedScrollPercent}
        alt="customerDetails"
      />
      <Alert src={SPEAK2} scroll={adjustedScrollPercent} alt="Alert" />
      <Task src={SPEAK1} scroll={adjustedScrollPercent} alt="Task" />
    </>
  );
};

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;
