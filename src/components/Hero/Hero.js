import { about } from "../../portfolio";
import "./Hero.css";
import { motion } from "framer-motion";
import BannerTitle from "../HeroTitle/BannerTitle";

const Hero = () => {
  const { description } = about;

  return (
    <div>
      {/* <BannerTitle /> */}
      <div className="hero">
        <div className="title_left">
          <h3>creative</h3>

          <h1 className="title_headline">Designer</h1>
          <span>&</span>
          <h1 className="title_headline">Developer</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className="desc_right"
        >
          <p>{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
