import { Backdrop, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { BackdropLoadingContext } from "../../contexts/Contexts";
import "./BackdropLoading.css";

function BackdropLoading() {
  const { backdropLoading } = useContext(BackdropLoadingContext);
  return (
    <Backdrop open={backdropLoading} className="backdrop-loading">
      <div className="dot-flashing"></div>
      <div className="text-container">
        <Typography variant="subtitle1">
          {typeof backdropLoading === "string" && backdropLoading}
        </Typography>
      </div>
    </Backdrop>
  );
}

export default BackdropLoading;
