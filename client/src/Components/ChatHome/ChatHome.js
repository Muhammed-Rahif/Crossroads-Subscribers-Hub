import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { io } from "socket.io-client";
// Components
import SideDrawer from "../SideDrawer/SideDrawer"
import { LeftBubble, LeftSecondaryBubble, RightBubble, RightSecondaryBubble, StaticBubble } from "../ChatBubbles/ChatBubbles";

// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import App from '../../App';

// Material Ui styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 75,
        maxHeight: 75,
        alignItems: 'flex-start',
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
    }
}));

function ChatHome({ logoutUser, getUserData }) {
    const [sideDrawer, setSideDrawer] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [chatBody, setChatBody] = useState(new Array());

    const classes = useStyles();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const handleMenuClick = (event) => {
        setMenuOpen(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuOpen(null);
    };

    useEffect(() => {
        var socket = io();
        socket.on("connect", () => {
            socket.emit("userConnected", getUserData())
        });
        socket.on("userConnect", (data) => {
            // ReactDOM.render(<StaticBubble text={`${data.name} Joined`}/> , document.getElementById("chatBody"));
            var prevArra = chatBody;
            prevArra.push(data);
            setChatBody(prevArra);
            console.log(chatBody);
        })
    }, [])

    return (
        <div className={classes.root}>
            <SideDrawer status={sideDrawer} setSideDrawer={setSideDrawer} />
            <AppBar position="fixed" color="inherit" style={{ borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem" }}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => { setSideDrawer(true) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.header}>
                        <Typography className={classes.title} variant="h4" noWrap>
                            <img src="./logo192.png" width="80" height="80" alt="CR CHAT" />
                        </Typography>
                    </div>
                    <IconButton onClick={handleMenuClick} aria-label="display more actions" edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        keepMounted
                        anchorEl={menuOpen}
                        open={Boolean(menuOpen)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => {
                            handleMenuClose();
                            logoutUser();
                        }}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <div id="chatBody" className={classes.chatBody}>
                <RightBubble name="You" time="10:00" msg="Hi therre! hi alll" />
                <RightSecondaryBubble name="You" time="10:00" msg="Hi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alll" />
                <LeftBubble name="You" time="10:00" msg="Hi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alll" />
                <LeftSecondaryBubble name="You" time="10:00" msg="Hi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alllHi therre! hi alll" />
                <StaticBubble text="You Joined" />
                {
                    
                }
            </div>
            <div style={{ bottom: 0, position: "sticky", display: "flex", alignItems: "center", justifyContent: "center", }}>
                <TextField
                    id="filled-textarea"
                    label="Type here...!"
                    placeholder="Get to know everyone."
                    multiline
                    variant="filled"
                    fullWidth
                    rows="1"
                    rowsMax="4"
                    color="primary"
                    style={{ backgroundColor: "white", }}
                />
                {/* <IconButton style={{ backgroundColor: prefersDarkMode ? "#424242" : "white",borderRadius:0,padding:"1rem" }}>
                    <EmojiEmotionsIcon />
                </IconButton> */}
                <IconButton style={{ backgroundColor: "lightgrey", borderRadius: 0, padding: "1rem" }}>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatHome;