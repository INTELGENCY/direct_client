import { Button, Card, Fab, Grid, Typography, styled } from "@mui/material";
import InputFields from "../../../../Common/InputFields/InputFields";
import { HiveRounded } from "@mui/icons-material";
import FileUploadComp from "../../../../Common/FileUploadComp";
import { Formik } from "formik";
import Milesstones from "./Milesstones";
import { IndustrySubmitProposal } from "../../../../Common/Validation/FormValidation";
import Editor from "../../../../Common/Editor";
const SummaryDiv = styled("div")(({}) => ({
  width: "95%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid lightgray",
  gap: "1rem",
  margin: "auto",
  paddingBlock: "40px",
  borderRadius: "7px",
  backgroundColor: "rgba(239, 239, 240)",
}));
const arrayFiles = ["Budget Sheet", "Work Plans", "Timelines", "Gantt Charts"];
function AddForm() {
  const handleProposal = (values) => {
    console.log(values, "values proposal");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        milesStones: [
          { startDate: "", endDate: "", title: "", description: "" },
        ],
      }}
      onSubmit={handleProposal}
      validationSchema={IndustrySubmitProposal}
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
          <Grid container gap={4} sx={{ p: 2, backgroundColor: "#F6F7FA" }}>
            {console.log(values, "values")}
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Introduction"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Objectives"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Methodology"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Testing"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Specifications"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Risk Analysis"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"HR Requirements"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Instrumentation Requirements"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Deliverables"} required={true} />
              </Card>
            </Grid>
            {/* <Grid item xs={12}>
        <Card sx={{ p: 2 }}>
          <Typography sx={{ mb: 2 }} variant="h5">
            Summary
          </Typography>
          <SummaryDiv>
            <CloudUpload sx={{ color: "#252B42", fontSize: "35px" }} />
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "GrayText",
                gap: ".6rem",
              }}
              variant="h4"
              fontWeight={400}
            >
              Drag or Click here to add summary
            </Typography>
          </SummaryDiv>
        </Card>
      </Grid> */}

            <Grid item xs={12}>
              <FileUploadComp arrayFiles={arrayFiles} />
            </Grid>
            <Grid item xs={12}>
              <Milesstones
                values={values.milesStones}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="success"
                variant="contained"
                //   size="large"
                startIcon={<HiveRounded />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}

export default AddForm;
