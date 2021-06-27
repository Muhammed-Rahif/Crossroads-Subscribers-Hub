import React, { useContext, useEffect } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Components
import Home from "./pages/Home";
import {
  AlertDialogContext,
  BackdropLoadingContext,
  ThemeContext,
  UserContext,
} from "./contexts/Contexts";
import About from "./pages/About";
import BackdropLoading from "./components/BackdropLoading/BackdropLoading";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AlertDialog from "./components/AlertDialog/AlertDialog";
import NetworkStatus from "./components/NetoworkStatus/NetworkStatus";
import Login from "./pages/Login";
import { getUserData } from "./constants/apiReqs";

function App() {
  const { theme } = useContext(ThemeContext);
  const { setBackdropLoading } = useContext(BackdropLoadingContext);
  const { user, setUser } = useContext(UserContext);
  const { alertDialog, setAlertDialog } = useContext(AlertDialogContext);

  useEffect(() => {
    getUserData().then((userData) => {
      setUser(userData);
      setTimeout(() => {
        if (!userData) {
          setAlertDialog({
            open: true,
            text: `Signing up or logging in is highly recommended.
            Be a member of Crossroads subscribers community.
            So you can access more information and get in touch with every member of this community.`,
            title: "Want to explore more features. Sign up right now..",
          });
        }
      }, 18000);
    });
    window.onload = () => {
      setBackdropLoading(false);
    };
  }, [setBackdropLoading, setUser, setAlertDialog, user]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NetworkStatus />
        <NavBar />
        <SideDrawer />
        <BackdropLoading />
        <AlertDialog />
        <Switch>
          <Route path="/sign-up">
            {user ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            {user ? <Profile /> : <Redirect to="/sign-up" />}
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
