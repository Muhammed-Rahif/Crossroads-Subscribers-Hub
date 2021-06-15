import { Backdrop } from "@material-ui/core";
import React from "react";
import "./BackdropLoading.css";

function BackdropLoading({ open }) {
  return (
    <Backdrop open={open} className="backdrop-loading">
      <div className="dot-flashing"></div>
    </Backdrop>
  );
}

export default BackdropLoading;
