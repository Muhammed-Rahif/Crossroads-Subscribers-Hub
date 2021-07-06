import React from "react";
import "./CircleLoading.css";
import { CircularProgress } from "@material-ui/core";

function CircleLoading() {
  return (
    <div className="loading-wrapper">
      <CircularProgress color="secondary" />
    </div>
  );
}

export default CircleLoading;
