import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { openUrlInNewTab } from "../../contants/constantFunctions";
import "./AboutContent.css";

function AboutContent(props) {
  return (
    <div className="about-content-wrapper">
      <div className="inner-section">
        <Typography variant="h3" className="main-title">
          Crossroads Subscribers Hub
        </Typography>
        <Typography variant="h6">
          Made by{" "}
          <span
            className="link"
            onClick={() => {
              openUrlInNewTab("https://github.com/Muhammed-Rahif");
            }}
          >
            Muhammed Rahif
          </span>
        </Typography>
      </div>
      <hr className="hr" />
      <div className="inner-section">
        <Typography variant="h5" className="main-title">
          • What is the purpose of this website ?
        </Typography>
        <Typography variant="subtitle1" className="sub-title">
          Purpose of this website is make a awesome community from God's own
          country along with Crossroads youtube channel. You know in tech field
          there increasing job opportunities... Also Kerala is one of fastest
          growing state in India. So we all need support and help from each of
          us to speed up our growth. We all want better relations, communication
          and unity. We think this website helps to that. You can join with us
          this journey. You can find other tech students and experts from this
          website by sign in to this website. And also avaliable their contact
          details such as instgram, github, email. We hope that you join with
          us.. 🤗️
        </Typography>
      </div>
      <div className="inner-section">
        <Typography variant="h6" style={{ textAlign: "center" }}>
          We need your help and support. Join with us. Sign up right now..! 🙃️
        </Typography>
      </div>
      <hr className="hr" />
      <div className="inner-section">
        <form>
          <Typography variant="subtitle1" style={{ marginBottom: "1rem" }}>
            Have any doubt or question 🤔️ ? Send it right now. Answer will be
            shown up here when the admin replies... 🤓️
          </Typography>
          <TextField
            label="Fill your question here..."
            fullWidth
            name="question"
            variant="outlined"
            color="secondary"
            multiline
            rows={5}
            style={{ marginBottom: "1rem" }}
            required
          />
          <div className="btn-container">
            <Button
              variant="contained"
              color="secondary"
              style={{
                textTransform: "none",
              }}
              type="submit"
            >
              Send your question
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutContent;
