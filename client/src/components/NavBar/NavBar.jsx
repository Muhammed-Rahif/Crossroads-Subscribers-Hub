import React, { useContext, useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Popover,
  Typography,
} from "@material-ui/core";
import {
  Search,
  Menu,
  Brightness7,
  Brightness4,
  Forum,
  CheckCircle,
  Notifications,
} from "@material-ui/icons";
import "./NavBar.css";
import {
  NotificationsPopoverContext,
  SideDrawerContext,
  ThemeContext,
} from "../../contexts/Contexts";
import NotificationsPopover from "../NotificationsPopover/NotificationsPopover";
import { useHistory } from "react-router";

function NavBar(props) {
  const [profilePopover, setProfilePopover] = useState(false);
  const { sideDrawer, setSideDrawer } = useContext(SideDrawerContext);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { setNotificationsPopover } = useContext(NotificationsPopoverContext);
  const history = useHistory();

  var handleProfileClose = () => {
    setProfilePopover(false);
  };

  return (
    <AppBar color="secondary" position="fixed">
      <div className="navbar-wrapper">
        <div className="search-button-wrapper">
          <IconButton
            onClick={() => {
              setSideDrawer(!sideDrawer);
            }}
            className="drawer-button"
          >
            <Menu />
          </IconButton>
          <IconButton className="search-button">
            <Search />
          </IconButton>
        </div>
        <div className="navbar-links">
          <IconButton className="navbar-link">
            <Forum />
          </IconButton>
          <IconButton
            className="navbar-link"
            onClick={(e) => {
              setNotificationsPopover(e.currentTarget);
            }}
          >
            <Badge color="primary" badgeContent={3} showZero>
              <Notifications />
            </Badge>
          </IconButton>
          <NotificationsPopover />
          <IconButton
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
            className="navbar-link"
          >
            {darkTheme ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Avatar
            className="navbar-link avatar"
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
            onClick={(e) => {
              setProfilePopover(e.currentTarget);
            }}
          />
          <Popover
            open={profilePopover}
            anchorEl={profilePopover}
            onClose={handleProfileClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className="profile-popover-wrapper">
              <div className="inner-profile-popover">
                <div className="profile">
                  <Avatar
                    className="navbar-link avatar"
                    alt="Travis Howard"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                  <Typography variant="h6" className="profile-name">
                    Travis Howard
                  </Typography>
                  <Typography variant="subtitle1">
                    travishoward@gmail.com
                  </Typography>
                  <Badge
                    badgeContent={
                      <CheckCircle
                        style={{ color: "#00e676", fontSize: "0.7rem" }}
                      />
                    }
                  >
                    <Typography style={{ fontSize: "0.7rem" }}>
                      Verified User{" "}
                    </Typography>
                  </Badge>
                </div>
                <hr className="hr" />
                <div className="profile-btns">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => {
                      history.push("/profile");
                    }}
                  >
                    View Profile
                  </Button>
                  <Button variant="contained" color="secondary">
                    Log out
                  </Button>
                </div>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </AppBar>
  );
}

export default NavBar;
