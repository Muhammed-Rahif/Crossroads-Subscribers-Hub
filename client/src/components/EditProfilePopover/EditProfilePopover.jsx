import React, { forwardRef, useContext } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  TextField,
  Grid,
} from "@material-ui/core";
import { Close, Done } from "@material-ui/icons";
import "./EditProfilePopover.css";
import { useForm } from "react-hook-form";
import {
  AlertDialogContext,
  EditProfilePopoverContext,
  UserContext,
} from "../../contexts/Contexts";
import { emailRegexPattern, urlRegexPattern } from "../../constants/constants";
import { getUserData, updateProfile } from "../../constants/apiReqs";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditProfilePopover() {
  const { setAlertDialog } = useContext(AlertDialogContext);
  const { user, setUser } = useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    reValidateMode: "onChange",
  });

  const onSubmit = (userData) => {
    updateProfile(userData).then((response) => {
      if (response.statusCode === 200) {
        setAlertDialog({
          open: true,
          title: "Updated!",
          text: "Your profile successfully updated!",
        });
        handleClose();
      } else {
        setAlertDialog({
          open: true,
          title: "Ooops!",
          text: response.message,
        });
      }
      getUserData().then((userData) => {
        console.log(userData);
        setUser(userData);
      });
    });
  };

  const { editProfilePopover, setEditProfilePopover } = useContext(
    EditProfilePopoverContext
  );

  const handleClose = () => {
    setEditProfilePopover(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={editProfilePopover}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className="app-bar" color="secondary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography variant="h6" className="title">
              Update your profile
            </Typography>
            <Button
              color="primary"
              variant="contained"
              autoFocus
              onClick={() => {
                document.getElementById("submit-btn").click();
              }}
            >
              <Done />
            </Button>
          </Toolbar>
        </AppBar>
        <Grid className="edit-profile-body" sm={6} xs={11}>
          <Typography className="form-title" variant="h5">
            Update your profile
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Full name"
              variant="outlined"
              color="secondary"
              fullWidth
              type="text"
              className="input-field"
              required
              defaultValue={user.fullName}
              {...register("fullName", {
                // required: "Full name is required.",
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
            <TextField
              label="Email"
              variant="outlined"
              color="secondary"
              fullWidth
              type="email"
              className="input-field"
              required
              defaultValue={user.email}
              {...register("email", {
                // required: "Email is required.",
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
            <TextField
              label="Profile logo image url"
              variant="outlined"
              color="secondary"
              fullWidth
              type="url"
              className="input-field"
              defaultValue={user.profileImageUrl}
              {...register("profileImageUrl", {
                minLength: {
                  value: 4,
                  message: "Minimum 4 charecters.",
                },
                pattern: {
                  value: urlRegexPattern,
                  message: "This is not a valid image url.",
                },
              })}
              error={errors.hasOwnProperty("profileImageUrl")}
              helperText={
                errors.hasOwnProperty("profileImageUrl") &&
                errors.profileImageUrl.message
              }
            />
            <TextField
              label="Location"
              variant="outlined"
              color="secondary"
              fullWidth
              type="text"
              className="input-field"
              required
              defaultValue={user.location}
              {...register("location", {
                // required: "Location is required.",
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
            <TextField
              label="Website"
              variant="outlined"
              color="secondary"
              fullWidth
              type="url"
              className="input-field"
              defaultValue={user.website}
              {...register("website", {
                minLength: {
                  value: 4,
                  message: "Minimum 4 charecters.",
                },
                pattern: {
                  value: urlRegexPattern,
                  message: "This is not a valid website url.",
                },
              })}
              error={errors.hasOwnProperty("website")}
              helperText={
                errors.hasOwnProperty("website") && errors.website.message
              }
            />
            <TextField
              label="Github"
              variant="outlined"
              color="secondary"
              fullWidth
              type="url"
              className="input-field"
              defaultValue={user.github}
              {...register("github", {
                minLength: {
                  value: 4,
                  message: "Minimum 4 charecters.",
                },
                pattern: {
                  value: urlRegexPattern,
                  message: "This is not a valid github url.",
                },
              })}
              error={errors.hasOwnProperty("github")}
              helperText={
                errors.hasOwnProperty("github") && errors.github.message
              }
            />
            <TextField
              label="Instagram"
              variant="outlined"
              color="secondary"
              fullWidth
              type="url"
              className="input-field"
              defaultValue={user.instagram}
              {...register("instagram", {
                minLength: {
                  value: 4,
                  message: "Minimum 4 charecters.",
                },
                pattern: {
                  value: urlRegexPattern,
                  message: "This is not a valid instagram url.",
                },
              })}
              error={errors.hasOwnProperty("instagram")}
              helperText={
                errors.hasOwnProperty("instagram") && errors.instagram.message
              }
            />
            <Button
              style={{ marginTop: "1rem" }}
              variant="contained"
              color="secondary"
              fullWidth
              type="submit"
              id="submit-btn"
            >
              Update profile
            </Button>
          </form>
        </Grid>
      </Dialog>
    </div>
  );
}
export default EditProfilePopover;
