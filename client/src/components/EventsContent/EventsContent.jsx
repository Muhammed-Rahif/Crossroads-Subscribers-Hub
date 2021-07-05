import { Grid, Typography, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getEvents } from "../../constants/apiReqs";
import "./EventsContent.css";
import EventCard from "../../components/EventCard/EventCard";

function EventComponent(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then((events) => {
      setLoading(false);
      setEvents(events);
    });
  }, []);

  return (
    <div className="events-content-wrapper">
      <Typography variant="h5" className="title">
        Events
      </Typography>
      <hr className="hr" />
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {events.length > 0 &&
          events.map((itm, key) => {
            return (
              <Grid item xs={12} sm={4}>
                <EventCard
                  key={key}
                  key={key}
                  title={itm.title}
                  description={itm.description}
                  date={itm.date}
                  time={itm.time}
                  location={itm.location}
                  imageSrc={itm.imageSrc}
                  btnLink={itm.btnLink}
                  btnText={itm.btnText}
                />
              </Grid>
            );
          })}
        {!loading && events.length === 0 && (
          <p style={{ opacity: 0.8, margin: "auto", marginTop: "3rem" }}>
            No events found !
          </p>
        )}
        {loading && (
          <div className="loading-wrapper">
            <CircularProgress color="secondary" />
          </div>
        )}
      </Grid>
    </div>
  );
}

export default EventComponent;
