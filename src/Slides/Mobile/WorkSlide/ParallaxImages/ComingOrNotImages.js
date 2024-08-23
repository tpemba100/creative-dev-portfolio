import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import vhCheck from "vh-check";
import VoistrapImages from "./ParallaxImages/VoistrapImages";
import FastRetailingImages from "./ParallaxImages/FastRetailingImages";
import WhatsMyFoodImages from "./ParallaxImages/WhatsMyFoodImages";
import LashicImages from "./ParallaxImages/LashicImages";
import TeslaImages from "./ParallaxImages/TeslaImages";
import EyepImages from "./ParallaxImages/EyepImages";

const ImageContainer = styled.div`
  width: 100%;
  height: 900vh;
  margin-bottom: 30vh;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`;

const ImageContent = ({ pageSplitTimes }) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      const minLimit = (clientHeight * 100) / scrollHeight;
      const maxLimit = (clientHeight * 1040) / scrollHeight;

      if (scrollPercentage >= minLimit && scrollPercentage <= maxLimit) {
        setScrollPercent(scrollPercentage);
      }
    };

    const updateDimensions = () => {
      setScreenHeight(
        Math.round(document.documentElement.clientHeight + vhCheck().offset)
      );
      setScrollHeight(Math.round(document.documentElement.scrollHeight));
    };

    updateDimensions();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const boxHeight = pageSplitTimes * 100;

  return (
    <ImageContainer>
      {[
        FastRetailingImages,
        LashicImages,
        EyepImages,
        TeslaImages,
        WhatsMyFoodImages,
        VoistrapImages,
      ].map((Component, index) => (
        <ImageBox key={index} height={boxHeight}>
          <Component
            boxHeight={boxHeight}
            index={index + 1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
      ))}
    </ImageContainer>
  );
};

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
