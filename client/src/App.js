import React, { useContext } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Components
import Home from "./pages/Home";
import { ThemeContext } from "./contexts/Contexts";

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
