import { Paper, Typography, Chip, Button, IconButton } from "@material-ui/core";
import React from "react";
import "./ProjectCard.css";
import { getIcon } from "../IconConfig/Badges";
import { AccountTreeTwoTone, GitHub, Launch } from "@material-ui/icons";
import { openUrlInNewTab } from "../../constants/constants";

function ProjectCard({
  projectImageUrl = "",
  title = "",
  description = "",
  githubLink = "",
  hostedIn = "",
  contributors = [],
  usedTechnologies = [],
  usedLanguages = [],
  stableBranch = [],
}) {
  var toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <Paper className="project-card-wrapper" elevation={3}>
      <img src={projectImageUrl} alt={title} style={{ marginBottom: "1rem" }} />
      <Typography variant="h5">{title}</Typography>
      <hr className="hr" />
      <Typography variant="subtitle1">{description}</Typography>
      <br />
      <Typography variant="subtitle1">Contributors :-</Typography>
      <div className="badges">
        {contributors.map((contributor, key) => {
          return (
            <div className="badge" key={key}>
              <Chip
                icon={getIcon("member")}
                color="secondary"
                label={toTitleCase(contributor)}
                clickable
              />
            </div>
          );
        })}
      </div>
      <br />
      <Typography variant="subtitle1">Technologies :-</Typography>
      <div className="badges">
        {usedTechnologies.map((technology, key) => {
          return (
            <div className="badge" key={key}>
              <Chip
                icon={getIcon("contributor")}
                color="secondary"
                label={toTitleCase(technology)}
                clickable
              />
            </div>
          );
        })}
      </div>
      <br />
      <Typography variant="subtitle1">Languages :-</Typography>
      <div className="badges">
        {usedLanguages.map((language, key) => {
          return (
            <div className="badge" key={key}>
              <Chip
                icon={getIcon("contributor")}
                color="secondary"
                label={toTitleCase(language)}
                clickable
              />
            </div>
          );
        })}
      </div>
      <hr className="hr" />
      <div className="links">
        <Button
          variant="contained"
          color="secondary"
          className="link"
          onClick={() => {
            openUrlInNewTab(githubLink);
          }}
        >
          <GitHub />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="link"
          onClick={() => {
            openUrlInNewTab(hostedIn);
          }}
        >
          <Launch />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="link"
          onClick={() => {
            openUrlInNewTab(githubLink + "tree/" + stableBranch);
          }}
        >
          <AccountTreeTwoTone />
        </Button>
      </div>
    </Paper>
  );
}

export default ProjectCard;
