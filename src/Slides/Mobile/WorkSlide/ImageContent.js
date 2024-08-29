import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import vhCheck from "vh-check";
import VoistrapImages from "./ParallaxImages/VoistrapImages";
import WhatsMyFoodImages from "./ParallaxImages/WhatsMyFoodImages";
import HSAImages from "./ParallaxImages/HSAImages";
import TGSImages from "./ParallaxImages/TGSImages";
import BookSpaceImages from "./ParallaxImages/BookSpaceImages";
import PeakSpeakImages from "./ParallaxImages/PeakSpeakImages";

const ImageContainer = styled.div`
  width: 100%;
  height: 900vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
  background: rgba(255, 255, 255, 0); /* Fully transparent white */
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
    const vhDiff = vhCheck().offset;
    const handleScroll = () => {
      const { body, documentElement } = window.document;
      const scrollTop = Math.max(body.scrollTop, documentElement.scrollTop);
      const scrollPercentage =
        (scrollTop /
          (documentElement.scrollHeight - documentElement.clientHeight)) *
        100;
      const minLimit =
        (documentElement.clientHeight * 100) / documentElement.scrollHeight;
      const maxLimit =
        (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
      if (scrollPercentage >= minLimit && scrollPercentage <= maxLimit) {
        setScrollPercent(scrollPercentage);
      }
    };

    setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
    setScreenHeight(
      Math.round(window.document.documentElement.clientHeight + vhDiff)
    );

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const boxHeight = pageSplitTimes * 100;

  return (
    <ImageContainer>
      <ImageBox height={boxHeight}>
        <HSAImages
          boxHeight={boxHeight}
          index={1}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <PeakSpeakImages
          boxHeight={boxHeight}
          index={2}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <BookSpaceImages
          boxHeight={boxHeight}
          index={3}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <TGSImages
          boxHeight={boxHeight}
          index={4}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <WhatsMyFoodImages
          boxHeight={boxHeight}
          index={5}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <VoistrapImages
          boxHeight={boxHeight}
          index={6}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
    </ImageContainer>
  );
};

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
