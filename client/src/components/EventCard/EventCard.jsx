import React from "react";
import "./EventCard.css";
import { Button, Chip, Paper, Typography } from "@material-ui/core";
import { getIcon } from "../IconConfig/Badges";
import { openUrlInNewTab } from "../../contants/constantFunctions";

function EventCard({
  title = "",
  discription = "",
  date = "",
  time = "",
  location = "",
  imageSrc = "",
  linkButtons = [
    {
      link: "",
      text: "",
    },
  ],
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
            window
              .open(
                "https://www.google.co.in/maps/search/" + location,
                "_blank"
              )
              .focus();
          }}
        ></Chip>
        <br />
        <Typography className="event-card-discription" variant="subtitle1">
          {discription}
        </Typography>
        <div>
          {linkButtons.map((itm, key) => {
            var pathArray = itm.link.split("/");
            var protocol = pathArray[0];
            var host = pathArray[2];
            var url = protocol + "//" + host;
            return (
              <Button
                className="event-card-link"
                variant="contained"
                color="secondary"
                key={key}
                onClick={() => {
                  openUrlInNewTab(url);
                }}
              >
                {itm.text}
              </Button>
            );
          })}
        </div>
      </div>
    </Paper>
  );
}

export default EventCard;
