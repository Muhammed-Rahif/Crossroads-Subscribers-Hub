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
  Info,
  PersonAdd,
  EventNote,
} from "@material-ui/icons";
import "./NavBar.css";
import {
  BackdropLoadingContext,
  NotificationsPopoverContext,
  SideDrawerContext,
  ThemeContext,
  UserContext,
} from "../../contexts/Contexts";
import NotificationsPopover from "../NotificationsPopover/NotificationsPopover";
import { useHistory, useLocation } from "react-router-dom";
import { logoutUser } from "../../constants/apiReqs";

function NavBar(props) {
  const [profilePopover, setProfilePopover] = useState(false);
  const { sideDrawer, setSideDrawer } = useContext(SideDrawerContext);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { setNotificationsPopover } = useContext(NotificationsPopoverContext);
  const { setBackdropLoading } = useContext(BackdropLoadingContext);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

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
          {user ? (
            <>
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
              <NotificationsPopover />{" "}
            </>
          ) : location.pathname !== "/about" ? (
            <IconButton
              className="navbar-link"
              onClick={() => {
                history.push("/about");
              }}
            >
              <Info />
            </IconButton>
          ) : (
            <IconButton
              className="navbar-link"
              onClick={() => {
                // history.push("/events");
              }}
            >
              <EventNote />
            </IconButton>
          )}
          <IconButton
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
            className="navbar-link"
          >
            {darkTheme ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {user ? (
            <Avatar
              className="navbar-link avatar"
              // src="https://material-ui.com/static/images/avatar/2.jpg"
              onClick={(e) => {
                setProfilePopover(e.currentTarget);
              }}
            >
              {user.fullName.match(/\b(\w)/g)}
            </Avatar>
          ) : (
            <IconButton
              color="default"
              variant="contained"
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              <PersonAdd />
            </IconButton>
          )}
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
              {user && (
                <div className="inner-profile-popover">
                  <div className="profile">
                    <Avatar
                      className="navbar-link avatar"
                      alt={user.fullName.match(/\b(\w)/g)}
                      src=""
                    >
                      {user.fullName.match(/\b(\w)/g)}
                    </Avatar>
                    <Typography variant="h6" className="profile-name">
                      {user.fullName}
                    </Typography>
                    <Typography variant="subtitle1">{user.email}</Typography>
                  </div>
                  <hr className="hr" />
                  <div className="profile-btns">
                    <Button
                      variant="contained"
                      color="default"
                      onClick={() => {
                        history.push("/profile");
                        handleProfileClose();
                      }}
                    >
                      View Profile
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        setBackdropLoading("Logging out..!");
                        logoutUser().then((response) => {
                          setBackdropLoading(false);
                          setUser(null);
                          handleProfileClose();
                        });
                      }}
                    >
                      Log out
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Popover>
        </div>
      </div>
    </AppBar>
  );
}

export default NavBar;
