import React, { useContext, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Components
import Home from "./pages/Home";
import { BackdropLoadingContext, ThemeContext } from "./contexts/Contexts";
import About from "./pages/About";
import BackdropLoading from "./components/BackdropLoading/BackdropLoading";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AlertDialog from "./components/AlertDialog/AlertDialog";

function App() {
  const { theme } = useContext(ThemeContext);
  const { setBackdropLoading } = useContext(BackdropLoadingContext);

  useEffect(() => {
    window.onload = () => {
      setBackdropLoading(false);
    };
  }, [setBackdropLoading]);

  return (
    <ThemeProvider theme={theme}>
      {/* Common components */}
      <CssBaseline />
      <NavBar />
      <SideDrawer />
      <BackdropLoading />
      <AlertDialog />
      {/* Routers */}
      <Router>
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
