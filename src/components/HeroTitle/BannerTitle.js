import React from "react";
import { motion } from "framer-motion";
// import "./BannerTitle.css";
import "./temp.css";

const bannerTitle = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 120 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const BannerTitle = () => {
  return (
    <motion.div className="banner" variants={bannerTitle}>
      <div className="ban_title">
        <BannerRowTitle title={"creative"} />
      </div>
      <BannerRowTop title={"DESIGNER"} />
      <div className="ban_and">
        <BannerRowMid title={"&"} />
      </div>
      <BannerRowTop title={"DEVELOPER"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : bannerTitle}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};
const BannerRowMid = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col-mid">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};
const BannerRowTitle = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col-title">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default BannerTitle;
