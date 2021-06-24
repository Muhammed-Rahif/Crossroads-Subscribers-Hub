import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import YouTube from "react-youtube";
import "./IntroductionSection.css";
import { openUrlInNewTab } from "../../constants/constants";

function IntroductionSection({
  videoId = "CJ-0NsEOzcg",
  mainTitle = "We will help you learn to code and make your future awesome...",
  subTitle = `No tech education requirements, No age restrictions. Everyone can..!
  Feel free to join with Crossroads...`,
  btnLink = "https://youtube.com/playlist?list=PLY-ecO2csVHeKaBI7lAM1jbIPU8K6fUxY",
  btnText = "Get started",
}) {
  return (
    <Grid className="intro-wrapper" style={{ backgroundColor: "inherit" }}>
      <div className="intro-video">
        <YouTube
          videoId={videoId}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
          className="intro-youtube"
        />
      </div>
      <div className="intro-content">
        <Typography variant="h4" className="intro-main-title">
          {mainTitle}
        </Typography>
        <Typography variant="h6" className="intro-main-subtitle">
          {subTitle}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            openUrlInNewTab(btnLink);
          }}
          style={{ textTransform: "none" }}
        >
          {btnText}
        </Button>
      </div>
    </Grid>
  );
}

export default IntroductionSection;
