import { Button, Grid, Grow, Typography, styled } from "@mui/material";
import React from "react";
import InputFields from "../../../InputFields/InputFields";
import { CloudUpload } from "@mui/icons-material";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
const GridUpload = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
}));
const TextUpload = styled("span")(({ theme }) => ({
  color: "#484848",
  fontSize: ".8rem",
  fontWeight: "400",
  lineHeight: "166.5%",
}));
const ButtonUpload = styled(Button)(({ theme }) => ({
  color: "black",
  fontSize: ".8rem",
  border: "1px solid #D7D7D7",
  background: "linear-gradient(180deg, #FFF 0%, #929292 100%)",
  "&:hover": {
    color: "black",
    border: "1px solid #D7D7D7",
    background: "linear-gradient(180deg, #FFF 0%, #929292 100%)",
  },
}));
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
function FormOne({
  setFieldValue,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={3}>
      {/* {console.log(values, "values")} */}
      <TypographyGrow variant={"h1"} text={"Initial Details"} />
      <Grid item xs={12}>
        <InputFields
          required
          type={"text"}
          label={"Project Title"}
          placeholder={"Your Project Title"}
          name={"title"}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.title}
          error={!!touched.title && !!errors.title}
          helperText={touched.title && errors.title}
        />
      </Grid>
      <Grid item xs={12}>
        <InputFields
          type={"textbox"}
          rows={3}
          label={"Project Abstract"}
          placeholder={"Your Project Abstract"}
          name={"abstract"}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.abstract}
          error={!!touched.abstract && !!errors.abstract}
          helperText={touched.abstract && errors.abstract}
        />
      </Grid>
      <Grid item xs={12}>
        <InputFields
          required
          type={"textbox"}
          rows={3}
          label={"Project Description"}
          placeholder={"Your Project Description"}
          name={"description"}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.description}
          error={!!touched.description && !!errors.description}
          helperText={touched.description && errors.description}
        />
      </Grid>
      <GridUpload item xs={12}>
        <ButtonUpload
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          href="#file-upload"
        >
          Upload a file
          <VisuallyHiddenInput
            name={"image"}
            onChange={(e) => setFieldValue(e.target.files[0])}
            // value={values?.image}
            type="file"
          />
        </ButtonUpload>
        <TextUpload>Attached Project Picture</TextUpload>
      </GridUpload>
    </Grid>
  );
}

export default FormOne;
