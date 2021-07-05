import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Switch,
} from "@material-ui/core";
import {
  SideDrawerContext,
  ThemeContext,
  UserContext,
} from "../../contexts/Contexts";
import "./SideDrawer.css";
import {
  AccountCircle,
  Brightness4,
  Brightness7,
  EventNote,
  FormatListNumbered,
  Forum,
  Home,
  Info,
  SupervisedUserCircle,
  VideoLibrary,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function SideDrawer() {
  const { sideDrawer, setSideDrawer } = useContext(SideDrawerContext);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const history = useHistory();

  const toggleSideDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideDrawer(!sideDrawer);
  };

  return (
    <div className="side-drawer-wrapper" onClick={toggleSideDrawer}>
      <SwipeableDrawer
        anchor="left"
        open={sideDrawer}
        onOpen={toggleSideDrawer}
        onClose={toggleSideDrawer}
      >
        <div className="side-drawer-header">
          <img src="./logo.png" alt="Crossroads Subscribers Hub" />
          <h3>Crossroads Subscribers Hub</h3>
        </div>
        <hr className="hr" />
        <List className="drawer-lists">
          <ListItem
            button
            onClick={() => {
              history.push("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("members");
            }}
          >
            <ListItemIcon>
              <SupervisedUserCircle />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FormatListNumbered />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Forum />
            </ListItemIcon>
            <ListItemText primary="Chat Room" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VideoLibrary />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventNote />
            </ListItemIcon>
            <ListItemText
              primary="Events"
              onClick={() => {
                history.push("events");
              }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push(user ? "/profile" : "/sign-up");
            }}
          >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Your Profile" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
          >
            <ListItemIcon>
              {darkTheme ? <Brightness7 /> : <Brightness4 />}
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <Switch
              // onChange={handleChange}
              color="secondary"
              checked={darkTheme}
              onChange={(e) => {
                setDarkTheme(e.target.checked);
              }}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText
              primary="About"
              onClick={() => {
                history.push("/about");
              }}
            />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
}

export default SideDrawer;
