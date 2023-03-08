import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./ViewProject.css";

const ViewProject = () => {
  const location = useLocation();
  const project = location.state;
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const {
    name,
    header,
    description,
    stack,
    head_img,
    sections,
    sourceCode,
    prototype,
  } = project;

  const projectImg = head_img;

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const handleEnlarge = (index) => {
    setEnlargedIndex(enlargedIndex === index ? null : index);
  };

  return (
    <div>
      {/* Main Header */}
      <div className="hero">
        <div className="hero_txt">
          <h1>{name}</h1>
          <h4>{header}</h4>
          <h3>{description}</h3>
          <div className="hero_txt_stack">
            {stack.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="hero_img">
          <img src={require("../.././assets/project_img/" + projectImg)} />
        </div>
      </div>

      {/*  Section Header */}

      <div className="sections">
        {sections.map((section, index) => (
          // section
          <div key={index} className="section ">
            <h2 className="head--font section_head_title">{section.title}</h2>
            <p>{section.brief}</p>

            {/* img section */}
            <div className="section_img_cont">
              {section.img.map((img, index) => (
                <div
                  key={index}
                  className={`section_img ${
                    index === enlargedIndex ? "enlarged" : ""
                  }`}
                  onClick={() => handleEnlarge(index)}
                >
                  <img src={require("../.././assets/project_img/" + img)} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PROTOTYPE OR SOURCE CODE */}
      <div className="btn_cont">
        <span
          type="button"
          className="btn btn--outline abt-btn"
          onClick={() => handleClick(sourceCode)}
          style={{
            width: "300px",
          }}
        >
          Source Code
        </span>
        <span
          type="button"
          className="btn btn--outline abt-btn"
          onClick={() => handleClick(prototype)}
          style={{
            width: "300px",
          }}
        >
          Prototype
        </span>
      </div>
    </div>
  );
};

export default ViewProject;
