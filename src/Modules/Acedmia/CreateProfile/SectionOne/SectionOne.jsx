import { Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

function SectionOne({ steps, activeStep, isStepOptional, isStepSkipped }) {
  return (
    <Grid
      sx={{ paddingBlock: "30px", backgroundColor: "#F5F7F9" }} 
      container
      rowGap={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={11}>
        <HeadingText>Account Details</HeadingText>
      </Grid>
      <GridItemTwo item xs={11} xl={4}>
        <SubText>Enter account details to complete profile</SubText>
      </GridItemTwo>
      <Grid item xs={11} xl={7}>
        <Stepper activeStep={activeStep}>
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
    </Grid>
  );
}

export default SectionOne;
