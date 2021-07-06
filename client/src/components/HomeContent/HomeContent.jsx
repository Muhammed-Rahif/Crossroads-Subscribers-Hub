import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import "./HomeContent.css";
import MemberCard from "../MemberCard/MemberCard";
import EventCard from "../EventCard/EventCard";
import IntroductionSection from "../IntroductionSection/IntroductionSection";
import VideoCard from "../VideoCard/VideoCard";
import {
  getEvents,
  getIntroduction,
  getMembers,
  getPlaylists,
} from "../../constants/apiReqs";
import { UserContext } from "../../contexts/Contexts";
import CircleLoading from "../CircleLoading/CircleLoading";

function HomeContent(props) {
  const { user } = useContext(UserContext);

  const [introduction, setIntroduction] = useState(null);
  const [members, setMembers] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getIntroduction().then((introductionData) => {
      if (introductionData) {
        setIntroduction(introductionData);
      }
    });
  }, [user]);

  useEffect(() => {
    getMembers().then((members) => {
      if (members) {
        setMembers(members);
      }
    });
    getPlaylists().then((playlists) => {
      if (playlists) {
        console.log(playlists);
        setPlaylists(playlists);
      }
    });
    getEvents().then((events) => {
      if (events) {
        console.log(events);
        setEvents(events);
      }
    });
  }, []);

  return (
    <div className="home-content-wrapper">
      <Grid container>
        <IntroductionSection
          videoId={introduction ? introduction.videoId : undefined}
          mainTitle={introduction ? introduction.mainTitle : undefined}
          subTitle={introduction ? introduction.subTitle : undefined}
          btnLink={introduction ? introduction.btnLink : undefined}
          btnText={introduction ? introduction.btnText : undefined}
        />
        <h2 className="video-cards-title">Video Playlists</h2>
        {playlists.length > 0 ? (
          playlists.map((itm, key) => {
            return (
              <Grid item sm={6} xs={12} key={key}>
                <VideoCard
                  videoId={itm.videoId}
                  title={itm.title}
                  topicsCovered={itm.topicsCovered}
                  projects={itm.projects}
                  description={itm.description}
                  btnLink={itm.btnLink}
                  numOfVideos={itm.numOfVideos}
                  btnText={itm.btnText}
                />
              </Grid>
            );
          })
        ) : (
          <CircleLoading />
        )}
        <Grid sm={6} item xs={12}>
          <h2 className="card-title">Upcoming Events</h2>
          {events.length > 0 &&
            events.map((itm, key) => {
              return (
                <EventCard
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
              );
            })}
          {playlists.length === 0 && <CircleLoading />}
        </Grid>

        {!user && (
          <Grid sm={6} item xs={12}>
            <Paper
              style={{
                padding: "1.5rem",
                padingTop: "1rem",
                paddingBottom: "1rem",
                margin: "1rem",
              }}
              elevation={3}
            >
              <img
                src="https://media.tenor.com/images/abb0f0b2a59f2f263401a552ffa22812/tenor.gif"
                alt="Sign up"
                width="100%"
              />
              <Typography variant="h6">
                Want to explore more features. Sign up right now..
              </Typography>
              <p style={{ opacity: 0.5 }}>
                You can view more details from here by signing up. Signing up or
                logging in is highly recommended.
              </p>
              <Button variant="contained" color="secondary">
                Sign up
              </Button>
            </Paper>
          </Grid>
        )}
        <hr className="hr" />
        <h2 className="card-title">Members</h2>
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          {members.map((itm, key) => {
            return (
              <Grid item xs={12} sm={key % 2 === 0 ? 4 : 3}>
                <MemberCard
                  key={key}
                  memberName={itm.fullName}
                  memberBadges={itm.badges}
                  emailLink={itm.email}
                  githubLink={itm.github}
                  instagramLink={itm.instagram}
                  avatarSrc={itm.profileImageUrl}
                  location={itm.location}
                />
              </Grid>
            );
          })}
          {playlists.length === 0 && <CircleLoading />}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeContent;
