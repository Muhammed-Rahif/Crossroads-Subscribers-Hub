import React, { useRef, useContext, useState } from "react";
import "./SignUpContent.css";
import { Grid, TextField, Typography, Avatar, Button } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { emailRegexPattern } from "../../contants/constants";
import { signUpUser } from "../../contants/apiReqs";
import {
  AlertDialogContext,
  BackdropLoadingContext,
  UserContext,
} from "../../contexts/Contexts";

function SignUpContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    reValidateMode: "onChange",
  });
  const password = useRef({});
  password.current = watch("password", "");

  const [signUpError, setSignUpError] = useState(null);

  const { setBackdropLoading } = useContext(BackdropLoadingContext);
  const { setAlertDialog } = useContext(AlertDialogContext);
  const { setUser } = useContext(UserContext);

  const onSubmit = (data) => {
    setBackdropLoading("Signing up...");
    signUpUser(data)
      .then((userData) => {
        setBackdropLoading(false);
        setSignUpError(false);
        setUser(userData);
      })
      .catch((err) => {
        setBackdropLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (err.status === 409) {
          setSignUpError("This user is already exist!");
        } else if (err.status === 401) {
          setSignUpError("Unauthorized activity!");
        } else {
          setSignUpError("Something really went wrong!");
        }
      });
  };

  return (
    <div className="signup-content-wrapper">
      <Grid container className="container">
        <Avatar style={{ margin: "auto", backgroundColor: "#f50057" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">Sign up</Typography>
        {signUpError && (
          <Typography style={{ color: "crimson" }} variant="subtitle2">
            {signUpError}
          </Typography>
        )}
        <Grid sm={5} xs={12} className="container">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
            <div className="input-field-wrapper">
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Full name"
                autoFocus
                type="text"
                color="secondary"
                {...register("fullName", {
                  required: "Full name is required.",
                  maxLength: {
                    value: 24,
                    message: "Maximum length allowed 24.",
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum 4 charecters.",
                  },
                })}
                error={errors.hasOwnProperty("fullName")}
                helperText={
                  errors.hasOwnProperty("fullName") && errors.fullName.message
                }
              />
            </div>
            <div className="input-field-wrapper">
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Location"
                color="secondary"
                type="text"
                {...register("location", {
                  required: "Location is required.",
                  maxLength: {
                    value: 50,
                    message: "Maximum length allowed 50.",
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum 4 charecters.",
                  },
                })}
                error={errors.hasOwnProperty("location")}
                helperText={
                  errors.hasOwnProperty("location") && errors.location.message
                }
              />
            </div>
            <div className="input-field-wrapper">
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
            </div>
            <div className="input-field-wrapper">
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
                  minLength: {
                    value: 6,
                    message: "Minimum 6 charecters.",
                  },
                })}
                error={errors.hasOwnProperty("password")}
                helperText={
                  errors.hasOwnProperty("password") && errors.password.message
                }
              />
            </div>
            <div className="input-field-wrapper">
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Confirm Password"
                color="secondary"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password is required.",
                  maxLength: {
                    value: 24,
                    message: "Maximum length allowed 24.",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 charecters.",
                  },
                  validate: (value) =>
                    value === password.current || "The passwords do not match.",
                })}
                error={errors.hasOwnProperty("confirmPassword")}
                helperText={
                  errors.hasOwnProperty("confirmPassword") &&
                  errors.confirmPassword.message
                }
              />
            </div>
            <div className="input-field-wrapper">
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Sign up
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
export default SignUpContent;
