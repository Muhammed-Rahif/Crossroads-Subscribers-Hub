import React, { useContext } from "react";
import "./MemberCard.css";
import {
  Avatar,
  Button,
  Chip,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { CheckCircle, Email, GitHub, Instagram } from "@material-ui/icons";
import { ThemeContext, UserContext } from "../../contexts/Contexts";
import { getIcon } from "../IconConfig/Badges";
import { openLocationInGMap, openUrlInNewTab } from "../../constants/constants";

function MemberCard({
  memberName = "",
  memberBadges = [],
  avatarSrc = "",
  githubLink = "",
  emailLink = "",
  instagramLink = "",
  location = "",
}) {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  var toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <Paper className="member-card" elevation={3}>
      <div className="member-card-logo">
        <Avatar
          style={{ backgroundColor: theme.palette.secondary.main }}
          src={avatarSrc}
          alt={memberName && memberName.match(/\b(\w)/g).join("")}
        />
      </div>
      <div className="member-card-text">
        <Typography variant="h5">
          {memberName}
          {memberName === "Muhammed Rahif" && (
            <span>
              {" "}
              <CheckCircle style={{ color: "#00e676" }} />
            </span>
          )}
        </Typography>
        <hr className="hr" />
      </div>
      <div className="member-badges">
        <Chip
          icon={getIcon("location")}
          color="secondary"
          label={location}
          clickable
          onClick={() => {
            openLocationInGMap(location);
          }}
        />
        {memberBadges.map((itm, key) => {
          return (
            <div className="badge" key={key}>
              <Chip
                icon={getIcon(itm)}
                color="secondary"
                label={toTitleCase(itm)}
                clickable
              />
            </div>
          );
        })}
      </div>
      <div className="member-card-links">
        <Tooltip title="Github" arrow interactive>
          <Button
            color="secondary"
            variant="contained"
            className="link-btn"
            disabled={!githubLink}
            onClick={() => {
              openUrlInNewTab(githubLink);
            }}
          >
            <GitHub />
          </Button>
        </Tooltip>
        <Tooltip title="Email" arrow interactive>
          <Button
            color="secondary"
            variant="contained"
            className="link-btn"
            disabled={!emailLink}
            onClick={() => {
              openUrlInNewTab("mailto:" + emailLink);
            }}
          >
            <Email />
          </Button>
        </Tooltip>
        <Tooltip title="Instagram" arrow interactive>
          <Button
            color="secondary"
            variant="contained"
            className="link-btn"
            disabled={!instagramLink}
            onClick={() => {
              openUrlInNewTab(instagramLink);
            }}
          >
            <Instagram />
          </Button>
        </Tooltip>
      </div>
    </Paper>
  );
}

export default MemberCard;
