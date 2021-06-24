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

function App() {
  const { theme } = useContext(ThemeContext);
  const { setBackdropLoading } = useContext(BackdropLoadingContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    window.onload = () => {
      setBackdropLoading(false);
    };
  }, [setBackdropLoading]);

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
