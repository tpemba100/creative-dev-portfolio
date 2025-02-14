import { motion } from "framer-motion";
import uniqid from "uniqid";
import { useState } from "react";
import "./ProjectContainer.css";
import { useLocation } from "react-router-dom";

const ProjectContainer = ({ project, projectImg }) => {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      animate={{ opcaity: 1 }}
      initial={{ opcaity: 0 }}
      exit={{ opcaity: 0 }}
      layout
      className="project"
    >
      {/* <div className="project"> */}
      <div className="project_title " style={{ zIndex: hovered ? 0 : 1 }}>
        <h3 className="project_name">{project.name}</h3>
        <p className="project_description">{project.header}</p>
      </div>
      {location.pathname === `/archive` ? (
        <div
          className="img_cont"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            opacity: hovered ? "1" : "0.8",
          }}
        >
          <img src={require("../.././assets/project_img/" + projectImg)} />
        </div>
      ) : (
        <div
          className="img_cont"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            opacity: hovered ? "1" : "0.8",
          }}
        >
          <img src={require("../.././assets/project_img/" + projectImg)} />
        </div>
      )}
    </motion.div>
  );
};

export default ProjectContainer;
