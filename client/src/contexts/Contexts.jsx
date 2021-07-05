import { useState, createContext, useMemo, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { getUserData } from "../constants/apiReqs";

// Contexts
export const SideDrawerContext = createContext(null);
export const ThemeContext = createContext(null);
export const NotificationsPopoverContext = createContext(null);
export const BackdropLoadingContext = createContext(null);
export const AlertDialogContext = createContext(null);
export const UserContext = createContext(null);
export const EditProfilePopoverContext = createContext(null);

export default function Contexts({ children }) {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [notificationsPopover, setNotificationsPopover] = useState(false);
  const [backdropLoading, setBackdropLoading] = useState("Getting ready.!");
  const [alertDialog, setAlertDialog] = useState({ open: false });
  const [user, setUser] = useState();
  const [editProfilePopover, setEditProfilePopover] = useState();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkTheme ? "dark" : "light",
        },
      }),
    [darkTheme]
  );

  useEffect(() => {
    getUserData().then((userData) => {
      setUser(userData);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, darkTheme, setDarkTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BackdropLoadingContext.Provider
          value={{ backdropLoading, setBackdropLoading }}
        >
          <EditProfilePopoverContext.Provider
            value={{ editProfilePopover, setEditProfilePopover }}
          >
            <AlertDialogContext.Provider
              value={{ alertDialog, setAlertDialog }}
            >
              <NotificationsPopoverContext.Provider
                value={{ notificationsPopover, setNotificationsPopover }}
              >
                <SideDrawerContext.Provider
                  value={{ sideDrawer, setSideDrawer }}
                >
                  {children}
                </SideDrawerContext.Provider>
              </NotificationsPopoverContext.Provider>
            </AlertDialogContext.Provider>
          </EditProfilePopoverContext.Provider>
        </BackdropLoadingContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
