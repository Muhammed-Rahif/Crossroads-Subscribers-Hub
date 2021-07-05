import { Grid, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";
import { openUrlInNewTab } from "../../constants/constants";
import "./Footer.css";

function Footer(props) {
  const history = useHistory();
  return (
    <Grid className="footer-wrapper" item xs={12}>
      <Paper className="inner-footer" elevation={3}>
        <div className="footer">
          <Typography>
            Wanna contribute ?{" "}
            <span
              className="link"
              onClick={() => {
                openUrlInNewTab(
                  "https://github.com/Muhammed-Rahif/Crossroads-Subscribers-Hub"
                );
              }}
            >
              @Github/Muhammed-Rahif
            </span>
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={3} xl={2} className="link-section">
              <span className="link-title">Pages</span>
              <span
                className="link"
                onClick={() => {
                  history.push("/");
                }}
              >
                Home
              </span>
              <span
                className="link"
                onClick={() => {
                  history.push("/about");
                }}
              >
                About
              </span>
              <span className="link">Chat Room</span>
              <span
                className="link"
                onClick={() => {
                  history.push("/members");
                }}
              >
                Members
              </span>
              <span className="link">Events</span>
              <span className="link"></span>
            </Grid>
            <Grid item xs={12} sm={3} xl={2} className="link-section">
              <span className="link-title">Tutorial Vidoes</span>
              <span className="link">Basics of Programming</span>
              <span className="link">Git Tutorails</span>
              <span className="link">Web Desining Tutorials</span>
              <span className="link">Web Development Tutorails</span>
              <span className="link">React Tutorials</span>
            </Grid>
            <Grid item xs={12} sm={3} xl={2} className="link-section">
              <span className="link-title">Projects</span>
              <span
                className="link"
                onClick={() => {
                  history.push("/about");
                }}
              >
                Netflix Clone
              </span>
              <span className="link">Crossroads Static Website</span>
              <span className="link">Olx Clone</span>
              <span className="link">To Do App</span>
              <span className="link">Tovino Static Website</span>
            </Grid>
            <Grid item xs={12} sm={3} xl={2} className="link-section">
              <span className="link-title">Follow us on</span>
              <span className="link">YouTube</span>
              <span className="link">Instagram</span>
              <span className="link">Facebook</span>
              <span className="link">Twitter</span>
              <span className="link">Clubhouse</span>
            </Grid>
          </Grid>
          <hr className="hr" />
          <div className="copyright-section">
            <Typography>© Crossroads Subscribers Hub</Typography>
            <Typography>2019 - {new Date().getFullYear()}</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default Footer;
