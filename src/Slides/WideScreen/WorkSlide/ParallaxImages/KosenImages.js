import React from "react";
import PropTypes from "prop-types";
import englishHome from "../../../../assets/Images/Kosen/EnglishHome.png";
import jpnHome from "../../../../assets/Images/Kosen/JpnHome.png";
import player from "../../../../assets/Images/Kosen/Player.png";

const KosenImages = ({
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

  const styleJapaneseTab = {
    transform: `translate(0px,-${adjustedScrollPercent * 15}%)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-140vh",
    left: "0vw",
    height: "80vh",
  };

  const styleEnglishTab = {
    transform: `translate(0px,-${adjustedScrollPercent * 8}%) scale(0.9)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-120vh",
    right: "0.5vw",
    filter: "blur(0.6px)",
    height: "80vh",
  };

  const stylePlayerTab = {
    transform: `translate(0px,-${adjustedScrollPercent * 2}%) scale(0.6)`,
    transition: "transform 0.2s ease-out",
    position: "absolute",
    bottom: "-65vh",
    left: "1vw",
    filter: "blur(1px)",
    height: "80vh",
  };

  return (
    <>
      <img src={player} style={stylePlayerTab} alt="kosenPlayer" />
      <img src={englishHome} style={styleEnglishTab} alt="kosenEnglish" />
      <img src={jpnHome} style={styleJapaneseTab} alt="kosenJapanese" />
    </>
  );
};

KosenImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default KosenImages;
