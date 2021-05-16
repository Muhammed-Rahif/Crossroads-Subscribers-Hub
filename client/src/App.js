import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import ChatHome from "./Components/ChatHome/ChatHome";
import GetIn from "./Components/GetIn/GetIn";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={ChatHome}>
            <ChatHome />
          </Route>
          <Route path="/getin" component={GetIn}>
            <GetIn />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
