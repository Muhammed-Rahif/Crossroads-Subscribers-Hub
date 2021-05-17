import React, { useEffect, useState } from "react";
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

function SideDrawer({ status, setSideDrawer }) {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setOpen(status);
  }, [status]);

  return (
    <div
      style={{ width: "auto" }}
      onClick={() => {
        setSideDrawer(false);
        setOpen(false);
      }}
    >
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
            <img src="./logo192.png" width="80" height="80" alt="CR CHAT" />
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
            />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
          <ListItem button>
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
