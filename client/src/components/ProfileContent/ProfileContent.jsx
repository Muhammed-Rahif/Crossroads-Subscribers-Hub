import React, { useContext } from "react";
import {
  Chip,
  Grid,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { getIcon } from "../IconConfig/Badges";
import "./ProfileContent.css";
import { UserContext } from "../../contexts/Contexts";

function ProfileContent(props) {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-content-wrapper">
      <Grid container>
        {user ? (
          <>
            <Grid xs={12} sm={3}>
              <img
                src="https://material-ui.com/static/images/avatar/2.jpg"
                alt="Someone"
              />
            </Grid>
            <Grid item xs={12} sm={9} className="text-section">
              <Typography variant="h4">
                {user.fullName}
                <Chip
                  className="location-chip"
                  color="secondary"
                  label={user.location}
                  icon={getIcon("location")}
                  clickable
                ></Chip>
              </Typography>

              <div className="badges">
                {user.badges.map((itm, key) => {
                  return (
                    <Chip
                      className="badge"
                      label={itm}
                      color="secondary"
                      icon={getIcon(itm)}
                      size="small"
                    ></Chip>
                  );
                })}
              </div>
              <div className="forms">
                <Typography variant="subtitle1">
                  Phone : <span className="link">1234567890</span>
                </Typography>
                <Typography variant="subtitle1">
                  Address :{" "}
                  <span className="">Mankada, Malappuram, Kerala.</span>
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
                  Email :{" "}
                  <span className="link">@rahifpalliyalil@gmail.com</span>
                </Typography>
              </div>
              <hr className="hr" />
            </Grid>
          </>
        ) : (
          <CircularProgress
            color="secondary"
            style={{
              margin: "auto",
              marginTop: "8rem",
              marginBottom: "8rem",
            }}
          />
        )}
      </Grid>
    </div>
  );
}

export default ProfileContent;
