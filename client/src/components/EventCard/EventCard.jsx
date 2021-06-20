import React from "react";
import "./EventCard.css";
import { Button, Chip, Paper, Typography } from "@material-ui/core";
import { getIcon } from "../IconConfig/Badges";
import { openLocationInGMap, openUrlInNewTab } from "../../constants/constants";

function EventCard({
  title = "",
  description = "",
  date = "",
  time = "",
  location = "",
  imageSrc = "",
  btnLink = "",
  btnText = "",
}) {
  return (
    <Paper className="event-card" elevation={3}>
      <img src={imageSrc} alt={title} />
      <div className="event-card-content">
        <Typography variant="h5" className="event-card-title">
          {title}
        </Typography>
        <hr className="hr" />
        <Chip
          icon={getIcon("date")}
          color="secondary"
          label={date}
          className="event-card-badge"
        ></Chip>
        <Chip
          icon={getIcon("time")}
          color="secondary"
          label={time}
          className="event-card-badge"
        ></Chip>
        <Chip
          icon={getIcon("location")}
          color="secondary"
          label={location}
          className="event-card-badge"
          clickable
          onClick={() => {
            openLocationInGMap(location);
          }}
        ></Chip>
        <br />
        <Typography className="event-card-description" variant="subtitle1">
          {description}
        </Typography>
        <div>
          {btnLink && (
            <Button
              className="event-card-link"
              variant="contained"
              color="secondary"
              onClick={() => {
                openUrlInNewTab(btnLink);
              }}
            >
              {btnText}
            </Button>
          )}
        </div>
      </div>
    </Paper>
  );
}

export default EventCard;
