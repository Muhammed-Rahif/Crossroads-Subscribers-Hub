import { Button, Popover, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { NotificationsPopoverContext } from "../../contexts/Contexts";
import "./NotificationsPopover.css";

function NotificationsPopover() {
  const { notificationsPopover, setNotificationsPopover } = useContext(
    NotificationsPopoverContext
  );

  var handleClose = () => {
    setNotificationsPopover(!notificationsPopover);
  };

  return (
    <Popover
      open={notificationsPopover}
      anchorEl={notificationsPopover}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className="notificaion-popover">
        <Button variant="outlined" className="notificaion-popover-wrapper">
          <div className="content">
            <Typography variant="subtitle1" className="title">
              Your badge request accepted..!
            </Typography>
            <Typography variant="">
              Your request for student has been accepted by the admin panel. You
              have now the student badge on your profile.
            </Typography>
          </div>
        </Button>
      </div>
    </Popover>
  );
}

export default NotificationsPopover;
