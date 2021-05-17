import React from "react";
import { useForm } from "react-hook-form";
// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        CR Chat
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function GetIn({ setUserData, getUserData }) {
  const classes = useStyles();
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserData(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Get In
        </Typography>
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            hidden
            value={Math.random().toString(16).slice(2)}
            name="userId"
            {...register("userId")}
          />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                error={Boolean(errors.name)}
                helperText={errors.name ? errors.name.message : null}
                {...register("name", {
                  required: "User Name is required.!",
                  minLength: {
                    value: 4,
                    message: "Minimum 4 charecters.!", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : null}
                {...register("email", {
                  required: "Email is required.!",
                  minLength: {
                    value: 5,
                    message: "Type a valid email address.!",
                  },
                  pattern: {
                    value: emailPattern,
                    message: "Type a valid email address.!",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={Boolean(errors.password)}
                helperText={errors.password ? errors.password.message : null}
                {...register("password", {
                  required: "Password is required.!",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 charecters.!", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required value="true" color="default" />}
                label="I am agree that I am subscribed Crossroads youtube channel."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="" variant="body2">
                {/* Already have an account? Sign in */}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default GetIn;
