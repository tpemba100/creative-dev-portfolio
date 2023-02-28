import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { design_about, develop_about } from "../../portfolio";
import { useState } from "react";
import ResumePDF from "../../assets/Tsering_Pemba_Resume.pdf";
import "./About.css";

const About = () => {
  const [activeButton, setActiveButton] = useState("design");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="about">
      <h3 className="about-title">about me</h3>
      <div className="about-btn">
        <button
          onClick={() => handleButtonClick("design")}
          className="design_cont"
          style={{
            backgroundColor:
              activeButton === "design"
                ? "rgb(233, 233, 233)"
                : "var(--clr-primary)",
            color: activeButton === "design" ? "var(--clr-primary)" : "#fff",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          Design
        </button>
        <button
          onClick={() => handleButtonClick("develop")}
          className="develop_cont"
          style={{
            backgroundColor:
              activeButton === "develop"
                ? "rgb(233, 233, 233)"
                : "var(--clr-primary)",
            color: activeButton === "develop" ? "var(--clr-primary)" : "#fff",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          Develop
        </button>
      </div>
      <div className="info_cont">
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
