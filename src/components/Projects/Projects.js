import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import uniqid from "uniqid";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects({ projects }) {
  if (!projects.length) return null;

  return (
    <Box sx={{ flexGrow: 1, p: 0 }} id="projects">
      <h3 className="section__title">{projects[0].name}</h3>
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
        {/* <Grid xs={12} sm={12} md={6} minHeight={30}>
          {" "}
          <h3 className="page">projects</h3>
        </Grid>
        <Grid xs={12} sm={12} md={6} minHeight={30}></Grid> */}

        {projects.slice(1).map((project) => (
          <Grid {...{ xs: 12, sm: 12, md: 6, lg: 6 }} minHeight={160}>
            <Link to="/project" state={project}>
              <ProjectContainer
                key={uniqid()}
                project={project}
                projectImg={project.head_img}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
