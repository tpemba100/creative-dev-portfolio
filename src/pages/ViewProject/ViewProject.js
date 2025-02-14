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
    website,
  } = project;

  const projectImg = head_img;

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      {/* Main Header */}
      <div className="hero">
        <div className="hero_txt">
          <h1 className="hero_txt_title">{name}</h1>
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

      <div className="vp_sections">
        {sections.map((section, index) => (
          // section
          <div key={index} className="vp_section">
            <h2 className="head--font vp_section_head_title">
              {section.title}
            </h2>
            <p>{section.brief}</p>

            {/* img section */}
            <div className="vp_section_img_cont">
              {section.img.map((img, index) => (
                <div
                  key={index}
                  className="vp_section_img"
                  // onClick={() => handleEnlarge(index)}
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
        {sourceCode ? (
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
        ) : null}
        {prototype ? (
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
        ) : null}

        {website ? (
          <span
            type="button"
            className="btn btn--outline abt-btn"
            onClick={() => handleClick(website)}
            style={{
              width: "300px",
            }}
          >
            Website
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ViewProject;
