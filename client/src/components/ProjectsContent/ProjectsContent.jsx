import React, { useEffect, useState } from "react";
import { getProjects } from "../../constants/apiReqs";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsContent.css";
import { Typography, Grid } from "@material-ui/core";
import CircleLoading from "../CircleLoading/CircleLoading";

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
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {projects.length > 0 &&
          projects.map((project) => (
            <Grid item xs={12} sm={4}>
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
            </Grid>
          ))}
      </Grid>
      {!loading && projects.length === 0 && (
        <p style={{ opacity: 0.8, margin: "auto", marginTop: "3rem" }}>
          No projects found !
        </p>
      )}
      {loading && <CircleLoading />}
    </div>
  );
}

export default ProjectsContent;
