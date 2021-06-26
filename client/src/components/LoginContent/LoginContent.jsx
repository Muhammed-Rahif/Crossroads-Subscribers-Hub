import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  Tooltip,
} from "@material-ui/core";
import "./LoginContent.css";
import { useForm } from "react-hook-form";
import { LockOutlined } from "@material-ui/icons";
import { BackdropLoadingContext, UserContext } from "../../contexts/Contexts";
import { emailRegexPattern } from "../../constants/constants";
import { getUserData, loginUser } from "../../constants/apiReqs";
import { Link } from "react-router-dom";

function LoginContent(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  const [loginError, setLoginError] = useState(null);

  const { setBackdropLoading } = useContext(BackdropLoadingContext);
  const { setUser } = useContext(UserContext);

  const onSubmit = (data) => {
    setBackdropLoading("Logging in...");
    loginUser(data)
      .then((response) => {
        setBackdropLoading(false);
        setLoginError(false);
        getUserData().then((userData) => {
          setUser(userData);
        });
      })
      .catch((err) => {
        setBackdropLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoginError(err.message);
      });
  };

  return (
    <div className="login-content-wrapper">
      <Grid container className="container">
        <Avatar style={{ margin: "auto", backgroundColor: "#f50057" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">Login</Typography>
        {loginError && (
          <Typography style={{ color: "crimson" }} variant="subtitle2">
            {loginError}
          </Typography>
        )}
        <Grid sm={5} item xs={12} className="container">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
            <div className="input-field-wrapper">
              <Tooltip
                title="Email that you typed when you're sign up."
                arrow
                interactive
              >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  color="secondary"
                  {...register("email", {
                    required: "Email is required.",
                    maxLength: {
                      value: 50,
                      message: "Maximum length allowed 50.",
                    },
                    minLength: {
                      value: 4,
                      message: "Minimum 4 charecters.",
                    },
                    pattern: {
                      value: emailRegexPattern,
                      message: "This is not a valid email.",
                    },
                  })}
                  error={errors.hasOwnProperty("email")}
                  helperText={
                    errors.hasOwnProperty("email") && errors.email.message
                  }
                />
              </Tooltip>
            </div>
            <div className="input-field-wrapper">
              <Tooltip
                title="Password that you typed when you're sign up."
                arrow
                interactive
              >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  color="secondary"
                  type="password"
                  {...register("password", {
                    required: "Password is required.",
                    maxLength: {
                      value: 24,
                      message: "Maximum length allowed 24.",
                    },
                  })}
                  error={errors.hasOwnProperty("password")}
                  helperText={
                    errors.hasOwnProperty("password") && errors.password.message
                  }
                />
              </Tooltip>
            </div>
            <div className="input-field-wrapper">
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </div>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-body2 MuiTypography-colorPrimary"
                  to="/sign-up"
                  variant="body2"
                >
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginContent;
