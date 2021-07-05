import React, { useEffect, useState } from "react";
import { getProjects } from "../../constants/apiReqs";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsContent.css";
import { Typography, Grid, CircularProgress } from "@material-ui/core";

function ProjectsContent(props) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((projects) => {
      setLoading(false);
      setProjects(projects);
    });
  }, []);

  return (
    <div className="projects-content-wrapper">
      <Typography variant="h5" className="title">
        Projects
      </Typography>
      <hr className="hr" />
      <Grid xs={12} sm={4}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              projectImageUrl={project.projectImageUrl}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              hostedIn={project.hostedIn}
              contributors={project.contributors}
              usedTechnologies={project.usedTechnologies}
              usedLanguages={project.usedLanguages}
              stableBranch={project.stableBranch}
            />
          ))}
      </Grid>
      {!loading && projects.length === 0 && (
        <p style={{ opacity: 0.8, margin: "auto", marginTop: "3rem" }}>
          No projects found !
        </p>
      )}
      {loading && (
        <div className="loading-wrapper">
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default ProjectsContent;
