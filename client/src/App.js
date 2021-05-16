import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import ChatHome from "./Components/ChatHome/ChatHome";
import GetIn from "./Components/GetIn/GetIn";
// React cookie
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
const cookieKey = "cr-chat-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies([cookieKey]);
  const [userLogged,setUserLogged] = useState(Boolean(cookies.userData));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  var setUserData = (userData) => {
    setCookie('userData', userData, { path: '/', secure: true });
    window.location.reload();
  }
  var getUserData = () => {
    return cookies.userData;
  }
  var logoutUser = () =>{
    removeCookie("userData");
    window.location.reload();
  }

  console.log(getUserData());
  console.log(userLogged);
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
      <CookiesProvider>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={ChatHome}>
            {(typeof getUserData() != "undefined") ? <ChatHome logoutUser={logoutUser} />:<Redirect to="/get-in" />}
            </Route>
            <Route path="/get-in" component={GetIn}>
              {(typeof getUserData() == "undefined") ? <GetIn setUserData={setUserData} getUserData={getUserData} />:<Redirect to="/" />}
            </Route>
          </Switch>
        </Router>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
