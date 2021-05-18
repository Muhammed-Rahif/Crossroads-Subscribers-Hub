import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    position:"fixed",
    width:"100vw",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
  },
}));

export default function SimpleBackdrop({reason}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
        <Typography style={{marginTop:"2rem"}} variant="subtitle2">{reason}</Typography>
      </Backdrop>
    </div>
  );
}
