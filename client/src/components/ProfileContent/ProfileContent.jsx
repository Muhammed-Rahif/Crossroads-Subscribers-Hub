import React, { useContext } from "react";
import {
  Chip,
  Grid,
  Typography,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { getIcon } from "../IconConfig/Badges";
import "./ProfileContent.css";
import {
  EditProfilePopoverContext,
  UserContext,
} from "../../contexts/Contexts";
import { Add, Edit } from "@material-ui/icons";

function ProfileContent(props) {
  const { user } = useContext(UserContext);

  const { setEditProfilePopover } = useContext(EditProfilePopoverContext);

  return (
    <div className="profile-content-wrapper">
      <Grid container>
        {user ? (
          <>
            <Grid xs={12} sm={3}>
              <img
                src={
                  user.profileImageUrl
                    ? user.profileImageUrl
                    : "/def-avatar.png"
                }
                alt={user.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={9} className="text-section">
              <Typography variant="h4" className="full-name">
                {user.fullName + "\t"}
                <Chip
                  className="location-chip"
                  color="secondary"
                  label={user.location}
                  icon={getIcon("location")}
                  clickable
                ></Chip>
                <div className="edit-btn-wrapper">
                  <Chip
                    className="badge"
                    color="primary"
                    label="Edit Profile"
                    icon={<Edit />}
                    clickable
                    onClick={() => {
                      setEditProfilePopover(true);
                    }}
                  ></Chip>
                </div>
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
                <Chip
                  className="badge"
                  color="secondary"
                  icon={<Add />}
                  size="small"
                  clickable
                ></Chip>
              </div>
              <div className="profile">
                <div className="content-div">
                  <Typography>Email : {user.email}</Typography>
                </div>
                <div className="content-div">
                  <Typography>
                    Profile Image URL : {user.profileImageUrl}
                  </Typography>
                </div>
                <div className="content-div">
                  <Typography>Location : {user.location}</Typography>
                </div>
                <div className="content-div">
                  <Typography>Website : {user.website}</Typography>
                </div>
                <div className="content-div">
                  <Typography>Github : {user.github}</Typography>
                </div>
                <div className="content-div">
                  <Typography>Instgram : {user.instgram}</Typography>
                </div>
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
