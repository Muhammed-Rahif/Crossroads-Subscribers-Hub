import React, { useEffect, useState } from "react";

import { io } from "socket.io-client";
// Components
import SideDrawer from "../SideDrawer/SideDrawer";
import {
  LeftBubble,
  LeftSecondaryBubble,
  RightBubble,
  RightSecondaryBubble,
  StaticBubble,
} from "../ChatBubbles/ChatBubbles";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

// Material Ui styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 100,
    maxHeight: 100,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "'Bree Serif', serif",
  },
  header: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chatBody: {
    zIndex: "-1",
    marginTop: "100px",
    height: "80vh",
    overflowY: "scroll",
  },
}));

var socket = io("http://192.168.43.102:5000");
var lastMessageUserId;
function ChatHome({ logoutUser, getUserData, changeMode }) {
  const [chatBubbles, setChatBubbles] = useState([]);
  const [sideDrawer, setSideDrawer] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  const classes = useStyles();

  const handleMenuClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  var RenderChat = ({ itm }) => {
    console.log(itm);
    if (
      itm.type === "static" &&
      getUserData().userId === itm.userId &&
      itm.reason === "connect"
    ) {
      return <StaticBubble text="You Joined" />;
    } else if (itm.type === "static" && itm.reason === "connect") {
      return <StaticBubble text={`${itm.name} Joined`} />;
    } else if (itm.type === "static" && itm.reason === "disconnect") {
      return <StaticBubble text={`${itm.name} Left`} />;
    } else if (itm.type === "message" && getUserData().userId === itm.userId) {
      return <RightBubble name="You" msg={itm.msg} time={itm.time} />;
    } else if (itm.type === "message") {
      return <LeftBubble name={itm.name} msg={itm.msg} time={itm.time} />;
    } else if (
      itm.type === "secondary" &&
      getUserData().userId === itm.userId
    ) {
      return <RightSecondaryBubble msg={itm.msg} time={itm.time} />;
    } else if (itm.type === "secondary") {
      return <LeftSecondaryBubble msg={itm.msg} time={itm.time} />;
    } else {
      return (
        <StaticBubble text="Someting went wrong. You need to reload or reenter.!" />
      );
    }
  };

  var sendMessage = () => {
    if (
      textFieldValue === null ||
      textFieldValue === " " ||
      textFieldValue === ""
    ) {
      document.getElementById("textField").focus();
    } else {
      let data = getUserData();
      data.msg = textFieldValue;
      socket.emit("massage", data);
      setTextFieldValue("")
      document.getElementById("textField").focus();
    }
  };

  useEffect(() => {
    // Socket.io
    socket.on("connect", () => {
      socket.emit("userConnected", getUserData());
      socket.on("userConnect", (data) => {
        setChatBubbles((chatBubbles) => [...chatBubbles, data]);
      });
      socket.on("userDisconnect", (data) => {
        setChatBubbles((chatBubbles) => [...chatBubbles, data]);
      });
      socket.on("message", (data) => {
        if (lastMessageUserId === data.userId) {
          data.type = "secondary";
          setChatBubbles((chatBubbles) => [...chatBubbles, data]);
        } else {
          data.type = "message";
          setChatBubbles((chatBubbles) => [...chatBubbles, data]);
        }
        let chatBody = document.getElementById("chatBody");
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' })
        lastMessageUserId = data.userId;
      });
    });
  }, []);

  return (
    <div className={classes.root}>
      <SideDrawer
        status={sideDrawer}
        changeMode={changeMode}
        setSideDrawer={setSideDrawer}
      />
      <AppBar
        position="fixed"
        color="inherit"
        style={{
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setSideDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.header}>
            <Typography className={classes.title} variant="h4" noWrap>
              <img src="./logo192.png" width="80" height="80" alt="CR CHAT" />
            </Typography>
          </div>
          <IconButton
            onClick={handleMenuClick}
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            keepMounted
            anchorEl={menuOpen}
            open={Boolean(menuOpen)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                logoutUser();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div id="chatBody" className={classes.chatBody}>
        {chatBubbles.map((itm, key) => (
          <RenderChat itm={itm} key={key} />
        ))}
      </div>
      <div
        style={{
          bottom: 0,
          position: "sticky",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          id="filled-textarea"
          label="Type here...!"
          placeholder="Get to know everyone."
          multiline
          variant="filled"
          fullWidth
          rows="1"
          id="textField"
          rowsMax="4"
          color="primary"
          value={textFieldValue}
          onChange={(e) => {
            setTextFieldValue(e.target.value);
          }}
        />
        {/* <IconButton style={{ backgroundColor: "inherit",borderRadius:0,padding:"1rem" }}>
                    <EmojiEmotionsIcon />
                </IconButton> */}
        <IconButton
          style={{
            borderRadius: 0,
            padding: "1rem",
          }}
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHome;
