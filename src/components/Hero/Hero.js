import { about } from "../../portfolio";
import "./Hero.css";

const Hero = () => {
  const { description } = about;

  return (
    <div className="hero">
      <div className="title_left">
        <h3>creative</h3>
        <h1 className="title_headline">Designer</h1>
        <span>&</span>
        <h1 className="title_headline">Developer</h1>
      </div>
      <div className="desc_right">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Hero;
