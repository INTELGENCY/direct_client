import React from "react";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import { Grid } from "@mui/material";
import InputFields from "../../../InputFields/InputFields";
import FileUploadCompAdmin from "../../../FileUploadCompAdmin/index.jsx";
const arrayFiles = [
  "Letter Of Support",
  "Declaration Certificate",
  "Submited Budget",
  "Anyother Document Signed by CA",
];
function FormThree({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"} gap={3}>
        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <TypographyGrow variant={"h1"} text={"Secondary Details"} />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Project Status"}
            placeholder={"Your Project Status"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Research"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Application Field"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Submission Date"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Overhead Amount"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Duration"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Nust Share"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Funding Agency"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Funding Scheme"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Payment Mode"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Industry Share"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Funding From Agency"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Project Type"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Payment Mode"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Other ORG Share"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={5.6}>
          <InputFields
            type={"text"}
            label={"Initiator Details"}
            placeholder={"Your Project Title"}
          />
        </Grid>
        <Grid item xs={11.5}>
          <FileUploadCompAdmin
            values={values.uploadFiles}
            arrayFiles={arrayFiles}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FormThree;
