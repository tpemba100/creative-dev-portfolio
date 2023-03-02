import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import "./ProjectContainer.css";

const ProjectContainer = ({ project, projectImg }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="project">
      <div className="project_title" style={{ zIndex: hovered ? 0 : 1 }}>
        <h3 className="project_name">{project.name}</h3>
        <p className="project_description">{project.description}</p>
      </div>

      <div
        className="img_cont"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: hovered ? "scale(1.14)" : "scale(1)",
          opacity: hovered ? "1" : "0.8",
        }}
      >
        <img src={require("../.././assets/project_img/" + projectImg)} />
      </div>
    </div>
  );
};

export default ProjectContainer;
