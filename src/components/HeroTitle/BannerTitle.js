import React from "react";
import { motion } from "framer-motion";
import "./BannerTitle.css";

const bannerTitle = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
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
      <BannerRowTop title={"DESIGNER"} />
      <div className="a">
        <BannerRowBottom title={"&"} />
      </div>
      <BannerRowBottom title={"DEVELOPER"} />
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
    <div className="row-col">
      <AnimatedLetters title={title} />
    </div>
  );
};
const BannerRowBottom = ({ title }) => {
  return (
    <div className="row-col">
      <AnimatedLetters title={title} />
    </div>
  );
};

export default BannerTitle;
