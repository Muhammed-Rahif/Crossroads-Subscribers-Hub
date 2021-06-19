import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import "./NetworkStatus.css";
import $ from "jquery";

function NetworkStatus() {
  const [online, setOnline] = useState();

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setOnline(false);
      $(".network-status-wrapper").fadeIn();
      setTimeout(() => {
        $(".network-status-wrapper").fadeOut();
      }, 4000);
    });
    window.addEventListener("online", (e) => {
      setOnline(true);
      $(".network-status-wrapper").fadeIn();
      setTimeout(() => {
        $(".network-status-wrapper").fadeOut();
      }, 4000);
    });
  }, []);

  return (
    <Paper
      className="network-status-wrapper"
      elevation={0}
      style={{ backgroundColor: online ? "green" : "red" }}
    >
      <Typography variant="subtitle2" className="text">
        {online
          ? "Okay.. You are online now.."
          : "This app will not work properly on offline!"}
      </Typography>
    </Paper>
  );
}

export default NetworkStatus;
