import { useState, createContext, useMemo } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

// Contexts
export const SideDrawerContext = createContext(false);
export const ThemeContext = createContext(null);
export const NotificationsPopoverContext = createContext(false);

export default function Contexts({ children }) {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [notificationsPopover, setNotificationsPopover] = useState(false);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkTheme ? "dark" : "light",
        },
      }),
    [darkTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, darkTheme, setDarkTheme }}>
      <NotificationsPopoverContext.Provider
        value={{ notificationsPopover, setNotificationsPopover }}
      >
        <SideDrawerContext.Provider value={{ sideDrawer, setSideDrawer }}>
          {children}
        </SideDrawerContext.Provider>
      </NotificationsPopoverContext.Provider>
    </ThemeContext.Provider>
  );
}
