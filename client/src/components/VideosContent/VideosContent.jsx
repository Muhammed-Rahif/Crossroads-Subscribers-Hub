import { Typography, Grid, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getVideos } from "../../constants/apiReqs";
import "./VideosContent.css";
import VideoCard from "../VideoCard/VideoCard";

function VideosContent(props) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos().then((videos) => {
      setLoading(false);
      setVideos(videos);
    });
  }, []);

  return (
    <div className="videos-content-wrapper">
      <Typography variant="h5" className="title">
        VIdeos
      </Typography>
      <hr className="hr" />
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {videos.length > 0 &&
          videos.map((video) => (
            <Grid item xs={12} sm={4}>
              <VideoCard
                videoId={video.videoLink.replace("https://youtu.be/", "")}
                title={video.title}
                description={video.description}
                topicsCovered={video.topicsCovered}
                tags={video.tags}
                madeFor={video.madeFor}
                uploadedBy={video.uploadedBy}
                btnLink={video.btnLink}
                btnText={video.btnText}
              />
            </Grid>
          ))}
      </Grid>
      {!loading && videos.length === 0 && (
        <p style={{ opacity: 0.8, margin: "auto", marginTop: "3rem" }}>
          No videos found !
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

export default VideosContent;
