import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import eyepTabletImg from "../../../../assets/Images/Eyep/Tablet.png";
import eyepIphoneImg from "../../../../assets/Images/Eyep/Iphone.png";

const Iphone = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 22}%) scale(0.65)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -320vh;
  transform-origin: left center;
  left: 2vw;
  height: 100vh;
`;

const Tablet = styled.img.attrs(({ scroll }) => ({
  style: {
    transform: `translate(0px,-${scroll * 6}%) scale(0.65)`,
  },
}))`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -180vh;
  transform-origin: right center;
  right: 2vw;
  height: 100vh;
`;

class EyepImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent =
      (scrollOffset * 100) / scrollHeight + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <>
        <Tablet src={eyepTabletImg} scroll={scrollPercent} alt="eyepTablet" />
        <Iphone src={eyepIphoneImg} scroll={scrollPercent} alt="eyepIphone" />
      </>
    );
  }
}

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;
