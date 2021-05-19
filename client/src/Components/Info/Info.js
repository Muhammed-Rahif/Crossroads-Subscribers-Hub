import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ status, setInfo }) {
  const [open, setOpen] = React.useState(status);

  const handleOpen = () => {
    setInfo(true);
    setOpen(true);
  };
  const handleClose = () => {
    setInfo(false);
    setOpen(false);
  };
  useEffect(() => {
    setOpen(status);
  }, [status]);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Made by Crossroads Subscriber
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Made by a Crossroads Subscriber🎉️</Typography>
          <Typography gutterBottom>
            For communicte Crossroads subscribers in ours chat platform. Make
            more opportunities. More Open source contributions. Making a huge
            tech community with crossroads.
          </Typography>
          <Typography gutterBottom>
            Supports Kerala tech growth. Also you can contribute to this chat
            app. Code available in Gtihub. Make your sign in this project by
            Contributing...
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="inherit">
            That's nice..
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
