import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import uniqid from "uniqid";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ projects }) {
  const [activeGenre, setActiveGenre] = useState("null");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (activeGenre === "null") {
      setFiltered(projects.slice(1));
      return;
    }

    const filtered = projects.filter(
      (project) => project.category === activeGenre
    );
    setFiltered(filtered);
  }, [activeGenre]);

  console.log(projects);
  console.log(filtered);
  console.log(activeGenre);

  const location = useLocation();
  if (!projects.length) return null;

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Box sx={{ flexGrow: 1, p: 0 }} id="projects">
      <h3 className="section__title">{projects[0].name}</h3>
      {/* FILTER NAVIGATION */}
      <div className="filter-container">
        <button
          className={activeGenre === "null" ? "active" : ""}
          onClick={() => setActiveGenre("null")}
        >
          All
        </button>
        <button
          className={activeGenre === "develop" ? "active" : ""}
          onClick={() => setActiveGenre("develop")}
        >
          Develop
        </button>
        <button
          className={activeGenre === "design" ? "active" : ""}
          onClick={() => setActiveGenre("design")}
        >
          Design
        </button>
      </div>
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          <Grid
            container
            spacing={2}
            sx={{
              "--Grid-borderWidth": "2px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "var(--clr-primary)",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "var(--clr-primary)",
              },
            }}
          >
            {filtered.map((project) => (
              // {projects.slice(1).map((project) => (
              <Grid
                {...{ xs: 12, sm: 12, md: 6, lg: 6 }}
                minHeight={160}
                key={uniqid()}
              >
                {/* Archive Page*/}
                {location.pathname === `/archive` ? (
                  <div>
                    <ProjectContainer
                      key={uniqid()}
                      project={project}
                      projectImg={project.head_img}
                    />
                    {/* info */}
                    {/* <h5 className="archive_desc">{project.description} </h5> */}
                    <div className="txt_stack">
                      {project.stack.map((item) => (
                        <p key={uniqid()}>{item}</p>
                      ))}
                    </div>

                    <div className="archive_cont">
                      {project.seeMore ? (
                        <span
                          type="button"
                          className="btn btn--outline abt-btn"
                          onClick={() => handleClick(project.seeMore)}
                          style={{
                            width: "300px",
                          }}
                        >
                          See more
                        </span>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  /* Project Page*/
                  <motion.div
                    animate={{ opcaity: 1 }}
                    initial={{ opcaity: 0 }}
                    exit={{ opcaity: 0 }}
                    layout
                  >
                    <Link to="/project" state={project}>
                      <ProjectContainer
                        key={uniqid()}
                        project={project}
                        projectImg={project.head_img}
                      />
                    </Link>
                  </motion.div>
                )}
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </motion.div>
    </Box>
  );
}
