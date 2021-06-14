import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import YouTube from "react-youtube";
import "./IntroductionSection.css";

function IntroductionSection({
  videoId = "",
  mainTitle = "",
  subTitle = "",
  linkButton = {
    link: "",
    text: "",
  },
}) {
  return (
    <Grid className="intro-wrapper" style={{ backgroundColor: "inherit" }}>
      <div className="intro-video">
        <YouTube
          videoId="CJ-0NsEOzcg"
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
          We will help you learn to code and build a better future...
        </Typography>
        <Typography variant="h6" className="intro-main-subtitle">
          No tech education requirements, No age restrictions. Everyone can..!
          Feel free to join with Crossroads...
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ textTransform: "none" }}
        >
          Get started
        </Button>
      </div>
    </Grid>
  );
}

export default IntroductionSection;
