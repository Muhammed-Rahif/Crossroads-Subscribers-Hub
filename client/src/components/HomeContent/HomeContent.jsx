import React from "react";
import { Grid } from "@material-ui/core";
import "./HomeContent.css";
import MemberCard from "../MemberCard/MemberCard";
import EventCard from "../EventCard/EventCard";
import IntroductionSection from "../IntroductionSection/IntroductionSection";
import VideoCard from "../VideoCard/VideoCard";

function HomeContent(props) {
  const persons = [
    {
      name: "Muhammed Rahif",
      badges: ["developer", "student", "contributer", "member"],
      github: "https://github.com/Muhammed-Rahif",
      instagram: "https://www.instagram.com/_.raifu.op_/",
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
          videoId="CJ-0NsEOzcg"
          mainTitle="We will help you learn to code and build a better future..."
          subTitle={`No tech education requirements, No age restrictions. Everyone can..!
              Feel free to join with Crossroads...`}
          linkButton={{
            link: "/login",
            text: "Get started",
          }}
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
            discription={`100K Coding Challenge is an initiative by Team Crossroads to teach
                programming in the simplest possible manner to 1 lakh students across
                Kerala completely FREE of cost. This video is the part one video of
                the series and today we will be discussing about the general aspects
                of programming such as why we should do programming? who can learn
                programming? several terminologies associated with programming etc.
                Also, today we will finish installing few softwares and tools and will
                set up an environment for us to start learning to programme`}
            linkToPlaylist="https://youtube.com/playlist?list=PLY-ecO2csVHeKaBI7lAM1jbIPU8K6fUxY"
            numOfVideos={14}
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
            discription={`Web Designing Challenge is an initiative by Team Crossroads to teach how to develop and deploy a static website from scratch. The complete series will be of 10 videos and each video will cover the necessary topics such as HTML, CSS, Javascript, JQuery and Bootstrap. Also in the end we will teach you how to purchase a domain name and live host a website. `}
            linkToPlaylist="https://youtube.com/playlist?list=PLY-ecO2csVHfRMEmW_ltccnJcMtSGUKSk"
            numOfVideos={14}
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
            discription={`Date with Git is an initiative by Team Crossroads. The complete series will be of 5 videos and each video will cover the necessary topics. Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows`}
            linkToPlaylist="https://youtube.com/playlist?list=PLY-ecO2csVHdLhAO6TERaMJXP8aqyWVt-"
            numOfVideos={8}
          />
        </Grid>
        <Grid sm={6} xs={12}>
          <h2 className="card-title">Upcoming Events</h2>
          <EventCard
            title="Javascript Develpers Meeting"
            discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis inventore adipisci ratione voluptatibus, facere accusantium sapiente illo doloribus dignissimos, accusamus maxime molestias alias totam hic. Officiis ut doloribus praesentium."
            date="12.04.2022"
            time="10 AM"
            location="Cyber Park, Kozhikode"
            imageSrc="https://javascript-conference.com/wp-content/uploads/2019/05/45446385882_2738d47a46_z.jpg"
            linkButtons={[
              {
                link: "https://www.google.com/",
                text: "Go to Google",
              },
              {
                link: "https://www.google.com/",
                text: "Go to Official Website",
              },
            ]}
          />
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
