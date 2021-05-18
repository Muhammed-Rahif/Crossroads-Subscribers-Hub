import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Components
import ChatHome from "./Components/ChatHome/ChatHome";
import GetIn from "./Components/GetIn/GetIn";
// Store
var store = require("store");
const clientStorageKey = "cr-chat-store";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  var prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  var setUserData = (userData) => {
    store.set(clientStorageKey, userData);
    window.location.reload();
  };
  var getUserData = () => {
    return store.get(clientStorageKey);
  };
  var logoutUser = () => {
    store.remove(clientStorageKey);
    window.location.reload();
  };
  var changeMode = (val) => {
    setDarkMode(val);
  };

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [useMediaQuery("(prefers-color-scheme: dark)")]);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route exact path="/" component={ChatHome}>
            {typeof getUserData() != "undefined" ? (
              <>
              <ChatHome
                changeMode={changeMode}
                getUserData={getUserData}
                logoutUser={logoutUser}
              />
              </>
            ) : (
              <Redirect to="/get-in" />
            )}
          </Route>
          <Route path="/get-in" component={GetIn}>
            {typeof getUserData() == "undefined" ? (
              <GetIn setUserData={setUserData} getUserData={getUserData} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
