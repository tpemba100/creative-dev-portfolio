import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import VoistrapImages from "./ParallaxImages/VoistrapImages";
import FastRetailingImages from "./ParallaxImages/FastRetailingImages";
import WhatsMyFoodImages from "./ParallaxImages/WhatsMyFoodImages";
import EyepImages from "./ParallaxImages/EyepImages";
import TeslaImages from "./ParallaxImages/TeslaImages";
import LashicImages from "./ParallaxImages/LashicImages";

const ImageContainer = styled.div`
  margin-left: 50%;
  width: 50%;
  height: 925vh;
  display: flex;
  flex-flow: column nowrap;
`;

const ImageBox = styled.div`
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`;

const ImageContent = ({ pageSplitTimes }) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { body, documentElement } = document;
      const sd = Math.max(body.scrollTop, documentElement.scrollTop);
      const sp =
        (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
        100;
      const minlimit =
        (documentElement.clientHeight * 100) / documentElement.scrollHeight;
      const maxlimit =
        (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
      if (sp >= minlimit && sp <= maxlimit) {
        setScrollPercent(sp);
      }
    };

    window.addEventListener("scroll", handleScroll);

    setScrollHeight(Math.round(document.documentElement.scrollHeight));
    setScreenHeight(Math.round(document.documentElement.clientHeight));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const boxHeight = pageSplitTimes * 100;

  return (
    <ImageContainer>
      <ImageBox height={boxHeight}>
        <FastRetailingImages
          boxHeight={boxHeight}
          index={1}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <LashicImages
          boxHeight={boxHeight}
          index={2}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <EyepImages
          boxHeight={boxHeight}
          index={3}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </ImageBox>
      <ImageBox height={boxHeight}>
        <TeslaImages
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
