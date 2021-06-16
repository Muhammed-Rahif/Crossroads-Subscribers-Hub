import React from "react";
import { Chip, Grid, Typography } from "@material-ui/core";
import { getIcon } from "../IconConfig/Badges";
import "./ProfileContent.css";

function ProfileContent(props) {
  return (
    <div className="profile-content-wrapper">
      <Grid container>
        <Grid xs={12} sm={3}>
          <img
            src="https://material-ui.com/static/images/avatar/2.jpg"
            alt="Someone"
          />
        </Grid>
        <Grid xs={12} sm={9} className="text-section">
          <Typography variant="h4">
            Muhammed Rahif
            <Chip
              className="location-chip"
              color="secondary"
              label="Mankada, Malappuram"
              icon={getIcon("location")}
              clickable
            ></Chip>
          </Typography>

          <div className="badges">
            <Chip
              className="badge"
              label="Student"
              color="secondary"
              icon={getIcon("student")}
            ></Chip>
            <Chip
              className="badge"
              label="Working"
              className="badge"
              color="secondary"
              icon={getIcon("working")}
            ></Chip>
            <Chip
              className="badge"
              label="Contributer"
              color="secondary"
              icon={getIcon("contributer")}
            ></Chip>
          </div>
          <div className="forms">
          <Typography variant="subtitle1">
              Gender : <span className="">Male</span>
            </Typography>
            <Typography variant="subtitle1">
              Phone : <span className="link">1234567890</span>
            </Typography>
            <Typography variant="subtitle1">
              Address : <span className="">Mankada, Malappuram, Kerala.</span>
            </Typography>
            <Typography variant="subtitle1">
              Website :{" "}
              <span className="link">www.muhammed-rahif.github.io</span>
            </Typography>
          </div>
          <div className="forms">
            <Typography variant="subtitle1">
              GitHub : <span className="link">@Muhammed-Rahif</span>
            </Typography>
            <Typography variant="subtitle1">
              Instagram : <span className="link">@Muhammed_Rahif_</span>
            </Typography>
            <Typography variant="subtitle1">
              Email : <span className="link">@rahifpalliyalil@gmail.com</span>
            </Typography>
          </div>
          <hr className="hr" />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileContent;
