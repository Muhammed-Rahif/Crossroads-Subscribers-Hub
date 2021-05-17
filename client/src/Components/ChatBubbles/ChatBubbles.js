import React from "react";
import "./ChatBubbles.css";
// Material UI
import Paper from "@material-ui/core/Paper";

function LeftBubble({ name, time, msg }) {
  return (
    <div className="msg">
      <div className="bubble">
        <div className="txt">
          <span className="name">{name}</span>
          <span className="timestamp">{time}</span>
          <span className="message">{msg}</span>
        </div>
        <div className="bubble-arrow"></div>
      </div>
    </div>
  );
}

function LeftSecondaryBubble({ time, msg }) {
  return (
    <div className="msg">
      <div className="bubble follow">
        <div className="txt">
          <span className="timestamp">{time}</span>
          <span className="message follow">{msg}</span>
        </div>
      </div>
    </div>
  );
}

function RightBubble({ name, time, msg }) {
  return (
    <div className="msg">
      <div className="bubble alt">
        <div className="txt">
          <span className="name alt">{name}</span>
          <span className="timestamp">{time}</span>
          <p className="message">{msg}</p>
        </div>
        <div className="bubble-arrow alt"></div>
      </div>
    </div>
  );
}

function RightSecondaryBubble({ time, msg }) {
  return (
    <div className="msg">
      <div className="bubble altfollow">
        <div className="txt">
          <span className="timestamp">{time}</span>
          <p className="message follow">{msg}</p>
        </div>
      </div>
    </div>
  );
}

function StaticBubble({ text }) {
  return (
    <Paper
      style={{
        padding: ".1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        width: "45%",
        opacity: "0.7",
        marginTop: ".75rem",
        marginBottom: ".75rem",
      }}
    >
      {text}
    </Paper>
  );
}

export {
  LeftBubble,
  LeftSecondaryBubble,
  RightBubble,
  RightSecondaryBubble,
  StaticBubble,
};
