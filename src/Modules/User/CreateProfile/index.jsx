import {
  Avatar,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionOne from "./SectionOne/SectionOne.jsx";
import SectionTwo from "./SectionTwo/SectionTwo.jsx";
import { useState } from "react";

const steps = [
  "Basic Information",
  "Organization Details",
  "Validation & Confirmation",
];

const AvatarUpload = styled(Avatar)(({ theme }) => ({
  width: "200px",
  height: "200px",
  marginLeft: "20px",
  marginBottom: "-100px",
}));
const HeadingText = styled("span")(({ theme }) => ({
  color: "#212121",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "166.5%",
  //   marginTop:"30px",
  /* 49.95px */
}));
const SubText = styled("span")(({ theme }) => ({
  color: "#949494",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "300",
  lineHeight: "166.5%",
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

function CreateProfile() {
  const [AvatarImg, setAvatarImg] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    // return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid
      container
      sx={{
        paddingInline: "20px",
        height: "100%",
        "@media (max-width: 600px)": {
          paddingInline: "5px",
        },
      }}
      justifyContent={"center"}
      alignItems={"center"}
      columnGap={2}
    >
      <Grid item xs={12}>
        <Grid
          sx={{
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: "#F5F7F9",
          }}
          container
          rowGap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={11.5}>
            <HeadingText>Account Details</HeadingText>
          </Grid>
          <GridItemTwo item xs={11.5} xl={4.5}>
            <SubText>Enter account details to complete profile</SubText>
          </GridItemTwo>
          <Grid item xs={11.5} xl={7}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <Grid item xs={12}>
            <AvatarUpload src={AvatarImg} />
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 8 }} item xs={10.8} md={11.3} lg={11.9}>
        <SectionTwo
          setAvatarImg={setAvatarImg}
          handleReset={handleReset}
          activeStep={activeStep}
          handleNext={handleNext}
        />
      </Grid>
    </Grid>
  );
}

export default CreateProfile;
