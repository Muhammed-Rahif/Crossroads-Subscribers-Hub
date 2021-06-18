import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { AlertDialogContext } from "../../contexts/Contexts";

function AlertDialog() {
  const { alertDialog, setAlertDialog } = useContext(AlertDialogContext);

  const handleClose = () => {
    setAlertDialog({ open: false, title: "", contenText: "" });
  };

  return (
    <Dialog
      open={alertDialog.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{alertDialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {alertDialog.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" autoFocus >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
