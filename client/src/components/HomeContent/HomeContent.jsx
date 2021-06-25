import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import "./HomeContent.css";
import MemberCard from "../MemberCard/MemberCard";
import EventCard from "../EventCard/EventCard";
import IntroductionSection from "../IntroductionSection/IntroductionSection";
import VideoCard from "../VideoCard/VideoCard";
import { UserContext } from "../../contexts/Contexts";
import { getIntroduction } from "../../constants/apiReqs";

function HomeContent(props) {
  const { user } = useContext(UserContext);

  const [introduction, setIntroduction] = useState(null);

  useEffect(() => {
    getIntroduction().then((introductionData) => {
      if (introductionData) {
        setIntroduction(introductionData);
      }
    });
  }, [user]);

  const persons = [
    {
      name: "Muhammed Rahif",
      badges: ["developer", "student", "contributer", "member"],
      github: "https://github.com/Muhammed-Rahif",
      instagram: "https://www.instagram.com/Muhammed_Rahif_/",
      email: "rahifpalliyalil@gmail.com",
    },
    {
      name: "Nikhil Kilivayil",
      badges: ["developer", "contributer", "member", "working"],
      github: true,
      instagram: true,
      email: false,
    },
    {
      name: "Sonu Gopal",
      badges: ["developer", "contributer", "member", "working"],
      github: true,
      instagram: true,
      email: false,
    },
    {
      name: "Sreeganesh",
      badges: ["developer", "contributer", "member", "working"],
      github: true,
      instagram: true,
      email: true,
    },
    {
      name: "Rishal Richu",
      badges: ["developer", "student", "member"],
      github: true,
      instagram: true,
      email: true,
    },
    {
      name: "Jaseem",
      badges: ["developer", "contributer", "member"],
      github: true,
      email: true,
      instagram: true,
    },
    {
      name: "Latheef Akbar Ansar",
      badges: ["member"],
      github: false,
      email: false,
      instagram: false,
    },
  ];
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
        <Grid sm={6} xs={12}>
          <VideoCard
            videoId="pDmEYRhyusU"
            title="Basic Programming Tutorial Video Series ( 100K Coding Challenge )"
            topicsCovered={[
              "C",
              "Basic Programming Concepts",
              "Java",
              "Variables",
              "Datatypes",
              "I/O Operations",
              "If, if else, switch",
              "Loop",
              "Array, Array operations",
              "Functions and type of functions",
              "Class and objects",
              "Contructors",
              "Inheritance",
              "Polymorphism",
              "Abstract class",
              "Exeptions",
              "Threads",
            ]}
            projects={["Calcualtor"]}
            description={`100K Coding Challenge is an initiative by Team Crossroads to teach
                programming in the simplest possible manner to 1 lakh students across
                Kerala completely FREE of cost. This video is the part one video of
                the series and today we will be discussing about the general aspects
                of programming such as why we should do programming? who can learn
                programming? several terminologies associated with programming etc.
                Also, today we will finish installing few softwares and tools and will
                set up an environment for us to start learning to programme`}
            btnLink="https://youtube.com/playlist?list=PLY-ecO2csVHeKaBI7lAM1jbIPU8K6fUxY"
            numOfVideos={14}
            btnText="Go to playlist"
          />
        </Grid>
        <Grid sm={6} xs={12}>
          <VideoCard
            videoId="2TfED5L4c3M"
            title="Web Designing Challenge"
            topicsCovered={["HTML", "CSS", "JavaScript", "Jquery", "Bootstap"]}
            projects={[
              "Personal Website",
              "Hosting a static website in GitHub pages",
            ]}
            description={`Web Designing Challenge is an initiative by Team Crossroads to teach how to develop and deploy a static website from scratch. The complete series will be of 10 videos and each video will cover the necessary topics such as HTML, CSS, Javascript, JQuery and Bootstrap. Also in the end we will teach you how to purchase a domain name and live host a website. `}
            btnLink="https://youtube.com/playlist?list=PLY-ecO2csVHfRMEmW_ltccnJcMtSGUKSk"
            numOfVideos={14}
            btnText="Go to playlist"
          />
        </Grid>
        <Grid sm={6} xs={12}>
          <VideoCard
            videoId="-wGc24R3_eM"
            title="Date with Git ( Git Tutorials )"
            topicsCovered={[
              "Git",
              "GitHub",
              "Branch",
              "Merge",
              "Git remote",
              "Small team collabration",
              "Open source contrbution",
              "Project managment",
            ]}
            projects={[]}
            description={`Date with Git is an initiative by Team Crossroads. The complete series will be of 5 videos and each video will cover the necessary topics. Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows`}
            btnLink="https://youtube.com/playlist?list=PLY-ecO2csVHdLhAO6TERaMJXP8aqyWVt-"
            numOfVideos={8}
            btnText="Go to playlist"
          />
        </Grid>
        <Grid sm={6} xs={12}>
          <h2 className="card-title">Upcoming Events</h2>
          <EventCard
            title="Javascript Develpers Meeting"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis inventore adipisci ratione voluptatibus, facere accusantium sapiente illo doloribus dignissimos, accusamus maxime molestias alias totam hic. Officiis ut doloribus praesentium."
            date="12.04.2022"
            time="10 AM"
            location="Cyber Park, Kozhikode"
            imageSrc="https://javascript-conference.com/wp-content/uploads/2019/05/45446385882_2738d47a46_z.jpg"
            btnLink="https://www.google.com/"
            btnText="Go to Google"
          />
        </Grid>
        <Grid sm={6} xs={12}>
          {!user && (
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
              <Button variant="contained" color="secondary">
                Sign up
              </Button>
            </Paper>
          )}
        </Grid>
        <Grid sm={6} xs={12}>
          <h2 className="card-title">Members</h2>
          {persons.map((itm, key) => {
            return (
              <MemberCard
                key={key}
                memberName={itm.name}
                memberBadges={itm.badges}
                emailLink={itm.email}
                githubLink={itm.github}
                instagramLink={itm.instagram}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeContent;
