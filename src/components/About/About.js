import { design_about, develop_about } from "../../portfolio";
import { useState, useRef } from "react";
// import ResumePDF from "../../assets/Tsering_Pemba_Resume.pdf";
import "./About.css";
import Square from "../threeModel/square";

const About = () => {
  //to toggle between active for design and develop
  const [activeButton, setActiveButton] = useState("design");

  // to handle the toggle
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="about" id="about">
      <h3 className="section__title">about me</h3>
      <div className="about-btn">
        <button
          onClick={() => handleButtonClick("design")}
          // when the activeButton is design, we do not set active className
          className={`design_cont ${activeButton === "design" ? "" : "active"}`}
          style={{
            backgroundColor:
              activeButton === "design"
                ? "var(--clr-fg)"
                : "var(--clr-primary)",
            color:
              activeButton === "design" ? "var(--clr-bg)" : "var(--clr-bg)",
            opacity: activeButton === "design" ? "1" : "0.5",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            cursor: activeButton === "design" ? "default" : "pointer",
          }}
        >
          Design
        </button>
        <button
          onClick={() => handleButtonClick("develop")}
          // if activeButton != develop, we set active:hover..
          className={`develop_cont ${
            activeButton === "develop" ? "" : "active"
          }`}
          style={{
            backgroundColor:
              activeButton === "develop"
                ? "var(--clr-fg)"
                : "var(--clr-primary)",
            color:
              activeButton === "develop" ? "var(--clr-bg)" : "var(--clr-bg)",
            opacity: activeButton === "develop" ? "1" : "0.5",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            cursor: activeButton === "develop" ? "default" : "pointer",
          }}
        >
          Develop
        </button>
      </div>
      <div className="info_cont">
        <div className="about_visual">
          <Square />
        </div>

        {activeButton === "design" && (
          <div className="info">
            <h2>Description:</h2>
            <p>{design_about.description}</p>
            <h2>Skills:</h2>
            <p>{design_about.skills}</p>
            <h2>Software:</h2>
            <p>{design_about.software}</p>
          </div>
        )}

        {activeButton === "develop" && (
          <div className="info">
            <h2>Description:</h2>
            <p>{develop_about.description}</p>
            <h2>Skills:</h2>
            <p>{develop_about.skills}</p>
            <h2>Software:</h2>
            <p>{develop_about.software}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
