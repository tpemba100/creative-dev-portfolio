import React from "react";
import { useLocation } from "react-router-dom";

const ViewProject = () => {
  const location = useLocation();
  const project = location.state;
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

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", backgroundColor: "blue" }}>
          <h1>{name}</h1>
          <h4>{header}</h4>
          <h3>{description}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 50px",
            }}
          >
            {stack.map((item) => (
              <p
                style={{
                  padding: "5px 10px",
                  margin: "0px 5px",
                  backgroundColor: "green",
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div style={{ width: "50%", backgroundColor: "red" }}>
          <img
            style={{ width: "100%" }}
            src={require(".././assets/project_img/" + projectImg)}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "gray",
              margin: "50px 20px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                backgroundColor: "red",
                textAlign: "center",
                padding: "10px 0px",
              }}
            >
              {section.title}
            </h3>
            <h3>another one</h3>
            <h3>{section.brief}</h3>

            <div
              style={{
                marginBottom: "100px",
              }}
            >
              {section.img.map((img, index) => (
                <div
                  key={index}
                  style={{
                    width: "70%",
                    backgroundColor: "red",
                    marginBottom: "2rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={require(".././assets/project_img/" + img)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PROTOTYPE OR SOURCE CODE */}
      <div style={{ display: "flex" }}>
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
