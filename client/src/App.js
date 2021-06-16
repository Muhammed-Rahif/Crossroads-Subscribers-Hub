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
import Signup from "./pages/Signup";

function App() {
  const { theme } = useContext(ThemeContext);
  const { backdropLoading, setBackdropLoading } = useContext(
    BackdropLoadingContext
  );

  useEffect(() => {
    window.onload = () => {
      setBackdropLoading(false);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackdropLoading open={backdropLoading} />
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
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
    </ThemeProvider>
  );
}

export default App;
