import {
  Box,
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import FormOne from "./Forms/FormOne.jsx";
import FormThree from "./Forms/FormThree.jsx";
import FormTwo from "./Forms/FormTwo.jsx";
import { Formik } from "formik";
import { AdminCreatePrrojectValidation } from "../../Validation/FormValidation.js";
import axios from "axios";
import { keys } from "../../../config.js";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../Store/Features/AlertSlice.js";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { setLoading } from "../../../Store/Features/loadingSlice.js";
import FormFour from "./Forms/FormFour.jsx";

const steps = [
  "Initial Draft",
  "Primary Details",
  "Secondary Details",
  "Secondary Details",
];
const GridButtonsSteps = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
}));
function New({ setValue }) {
  const loading = useSelector((state) => state.loading.loading);
  const [imageProject, setImageProject] = useState(null);
  // console.log(imageProject, "imageProject");
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
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
  const handleCreate = async (values) => {
    console.log(values, "values are here");
    // if (loading) {
    //   return;
    // }
    // if (imageProject) {
    //   const formdata = new FormData();
    //   for (const key in values) {
    //     formdata.append(key, values[key]);
    //   }
    //   formdata.append("image", imageProject);

    //   try {
    //     dispatch(setLoading(true));
    //     const res = await axios.post(
    //       keys.api + "projects/addproject",
    //       formdata
    //     );
    //     console.log(res, "response");
    //     if (res.status === 200) {
    //       dispatch(
    //         setAlert({
    //           status: "success",
    //           text: "Project Created Successfully",
    //         })
    //       );
    //       dispatch(setLoading(false));
    //       setValue("1");
    //     } else {
    //       dispatch(
    //         setAlert({
    //           status: "error",
    //           text: "Couldn't Creat Post",
    //         })
    //       );
    //     }
    //   } catch (error) {
    //     dispatch(setLoading(false));
    //     dispatch(setAlert({ status: "error", text: "Couldn't Creat Post" }));
    //     console.log(e.message);
    //     console.log(error, "error");
    //   }
    // } else {
    //   dispatch(
    //     setAlert({
    //       status: "error",
    //       text: "Cover Image for project is required",
    //     })
    //   );
    // }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        abstract: "",
        description: "",
        category: "",
        startDate: "",
        endDate: "",
        number: "",
        terms: "",
        customise: "",
        specification: "",
        uploadFiles: [
          { name: "Letter Of Support", file: null },
          { name: "Declaration Certificate", file: null },
          { name: "Submited Budget", file: null },
          { name: "Anyother Document Signed by CA", file: null },
        ],
        proposalText: [
          { name: "Objectives" },
          { name: "Description" },
          { name: "Methodologies" },
          { name: "Expected Outcomes" },
          { name: "Additional Comments" },
        ],
        proposalfile: [
          { name: "Budget" },
          { name: "Work Plans" },
          { name: "Timelines" },
          { name: "Gantt Chart" },
        ],
      }}
      validationSchema={AdminCreatePrrojectValidation}
      onSubmit={handleCreate}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container rowGap={7}>
              <Grid item xs={12}>
                <Box sx={{ width: "100%", mt: 6 }}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption"></Typography>
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
                </Box>
              </Grid>
              <Grid item xs={12}>
                {activeStep === 0 && (
                  <FormOne
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    setFieldValue={setImageProject}
                    handleChange={handleChange}
                  />
                )}
                {activeStep === 1 && (
                  <FormTwo
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {activeStep === 2 && (
                  <FormThree
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {activeStep === 3 && (
                  <FormFour
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
              </Grid>
              <GridButtonsSteps item xs={12}>
                {loading === true ? (
                  <Button variant="contained" color="success" disabled={true}>
                    Back
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="success"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                )}

                {activeStep === steps.length - 1 ? (
                  loading === true ? (
                    <LoadingButton
                      loading
                      loadingPosition="start"
                      startIcon={<Save />}
                      variant="outlined"
                    >
                      Finsih
                    </LoadingButton>
                  ) : (
                    <Button color="success" type="submit" variant="contained">
                      Finish
                    </Button>
                  )
                ) : (
                  <Button
                    color="success"
                    variant="contained"
                    type={"button"}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </GridButtonsSteps>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}

export default New;
