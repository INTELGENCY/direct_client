import { Grid, Typography } from "@mui/material";
import React from "react";
import InputFields from "../../../../Common/InputFields/InputFields";
import { industrialProjects, researchProjects } from "./data";
import MultiInputSection from "../../../../Common/MultiInputSection";

function StepTwo({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) {
  return (
    <Grid container gap={4} sx={{ paddingBottom: "20px" }}>
      <Grid item xs={12}>
        <Typography sx={{mb:4}} variant={"h1"}>Projects</Typography>
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"researchProjectsSection"}
          LableHeadings={researchProjects}
          values={values.researchProjectsSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headingSection={"Project/ Research Projects"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"industrialProjectsSection"}
          LableHeadings={industrialProjects}
          values={values.industrialProjectsSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headingSection={"Project/ Industrial Projects"}
        />
      </Grid>
    </Grid>
  );
}

export default StepTwo;
