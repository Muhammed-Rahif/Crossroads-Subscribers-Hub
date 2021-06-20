import { Button, Chip, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";
import YouTube from "react-youtube";
import { openUrlInNewTab } from "../../constants/constants";

function VideoCard({
  videoId = "",
  title = "",
  topicsCovered = [],
  projects = [],
  description = ``,
  btnLink = "",
  numOfVideos = false,
  btnText = "Watch video",
}) {
  return (
    <Paper className="video-card" elevation={3}>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 0,
          },
        }}
        className="youtube-video"
      />
      <div className="content">
        <Typography variant="h5" className="title">
          {title}
        </Typography>
        <hr className="hr" />
        <Typography variant="h6">Covered Topics :-</Typography>
        <div className="badges">
          {topicsCovered.map((itm, key) => {
            return (
              <Chip label={itm} key={key} color="secondary" className="badge">
                C++
              </Chip>
            );
          })}
        </div>
        {projects.length > 0 && <hr className="hr" />}
        {projects.length > 0 && (
          <Typography variant="h6">Projects :-</Typography>
        )}
        <div className="badges">
          {projects.length > 0 &&
            projects.map((itm, key) => {
              return (
                <Chip
                  label={itm}
                  key={key}
                  color="secondary"
                  className="badge"
                ></Chip>
              );
            })}
        </div>
        <hr className="hr" />
        <Typography variant="subtitle1">{description}</Typography>
        {numOfVideos && (
          <Typography variant="subtitle2" style={{ marginTop: "0.5rem" }}>
            Number of videos :- {numOfVideos}
          </Typography>
        )}
        <div className="link-btns">
          <Button
            variant="contained"
            color="secondary"
            className="btn"
            onClick={() => {
              openUrlInNewTab(btnLink);
            }}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default VideoCard;
