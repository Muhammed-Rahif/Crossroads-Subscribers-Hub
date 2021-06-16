import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  StepLabel,
  Step,
  Stepper,
  TextField,
  Grid,
  Chip,
} from "@material-ui/core";
import { Done } from "@material-ui/icons";
import { getBadgesList, getIcon } from "../IconConfig/Badges";
import "./SignupContent.css";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Add basic details",
    "Add GitHub, Instagram, Email links",
    "Select badges for your profile",
  ];
}

function SignupContent() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  var badgesArray = getBadgesList().map((itm, indx) => {
    return { badge: itm, index: indx, selected: false };
  });
  const [badges, setBadges] = useState(badgesArray);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Grid
            container
            className="container"
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Full name"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Email"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Phone"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Address"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Location"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid
            container
            className="container"
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Instagram"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="GitHub"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className="content" sm={12} xs={12}>
              <TextField
                error
                label="Email"
                className="input-field"
                helperText="Incorrect entry."
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid
            container
            className="container"
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid className="badges" sm={12} xs={12}>
              {badges.map((itm, key) => {
                return (
                  <Chip
                    icon={getIcon(itm.badge)}
                    style={{
                      margin: "0.5rem",
                      opacity: itm.selected ? 1 : 0.4,
                    }}
                    label={itm.badge}
                    clickable
                    color="secondary"
                    onClick={() => {
                      setBadges(
                        badges.map((obj) => {
                          if (obj.index === itm.index) {
                            obj.selected = !obj.selected;
                            return obj;
                          } else {
                            return obj;
                          }
                        })
                      );
                    }}
                    variant="outlined"
                    key={key}
                  />
                );
              })}
            </Grid>
          </Grid>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <div className="signup-content-wrapper">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep !== steps.length && (
          <div>
            {getStepContent(activeStep)}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
                width: "100%",
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Signup" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SignupContent;
