import React, { useEffect, useState } from "react";
// Component
import Info from "../Info/Info";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { Switch } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";

// Material UI Styles
const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 0,
  },
});

function SideDrawer({ status, setSideDrawer, changeMode }) {
  const [open, setOpen] = useState(true);
  const [switchButton, setSwitchButton] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [info,setInfo] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    setOpen(status);
  }, [status]);
  useEffect(() => {
    changeMode(switchButton);
  }, [switchButton])

  return (
    <div
      style={{ width: "auto" }}
      onClick={() => {
        setSideDrawer(false);
        setOpen(false);
      }}
    >
      {info && <Info status={info} setInfo={setInfo} />}
      <Drawer anchor={"left"} open={open}>
        <List className={classes.list}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="./logo192.png" width="60" height="60" alt="CR CHAT" />
            <h3>CR CHAT</h3>
          </div>
        </List>
        <Divider />
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
            <ListItemText primary={"Dark mode"} />
            <Switch
              name="checkedB"
              color="primary"
              onChange={(e) => {
                setSwitchButton(e.target.checked);
              }}
              checked={switchButton}
            />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
          <ListItem button onClick={() => {
            setInfo(true);
          }}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"Info"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
export default SideDrawer;
