import { Button, Grid, Grow, Typography, styled } from "@mui/material";
import React from "react";
import InputFields from "../../../InputFields/InputFields";
import { CloudUpload } from "@mui/icons-material";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import Editor from "../../../Editor";
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
function InitialForm({
  setFieldValue,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      rowGap={3}
    >
      {/* {console.log(values, "values")} */}
      <Grid item xs={12}>
        <TypographyGrow
          align={"center"}
          variant={"h1"}
          text={"Brief Introduction"}
        />
      </Grid>
      <Grid item xs={12}>
        <InputFields
          required
          type={"text"}
          label={"Project Title"}
          placeholder={"Your Project Title"}
          name={"title"}
          tooltipText={`Descriptive Title + Keywords (e.g., "Next-Gen Counter-Drone System powered by AI: Securing Airspaces with Signal Intelligence")`}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.title}
          error={!!touched.title && !!errors.title}
          helperText={touched.title && errors.title}
        />
      </Grid>
      <Grid item xs={5.9}>
        <InputFields
          type={"text"}
          tooltipText={`Who provided the financial support for this project (e.g., MoDP, SPD, NUST)?`}
          label={"Funding Agency"}
          placeholder={"Write Funding Agency Name"}
          name={"title"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={5.9}>
        <InputFields
          type={"text"}
          label={"Sponsoring Agency"}
          tooltipText={`The agency or department officially backing and allocating resources for the research`}
          placeholder={"Write Sponsoring Agency Name"}
          name={"title"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={5.9}>
        <InputFields
          type={"text"}
          label={"Funding Scheme"}
          placeholder={`Write about Funding Scheme`}
          name={"title"}
          tooltipText={`Choose the type of funding, such as Research Academia collaboration, competitive grant, or contract for deliverables.`}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={5.9}>
        <InputFields
          type={"text"}
          label={"Initiator Details"}
          placeholder={"Write About Initiator Details"}
          tooltipText={`Enter details of the individual or organization initiating this R&D project proposal. (information taken from the login of the individual project manager)`}
          name={"title"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={5.9}>
        <InputFields
          type={"text"}
          label={"Application Field"}
          placeholder={"Write About Application Field"}
          name={"title"}
          tooltipText={`Choose the primary realm where your project's application lies (e.g., AI, computer vision, mechatronics, materials, cyber, space etc.)`}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={5.9}>
        <InputFields
          type={"text"}
          label={"Research Sub-Domain"}
          placeholder={"Write About Research"}
          name={"title"}
          onBlur={handleBlur}
          tooltipText={`Briefly describe the specific technical field within the broader domain. (e.g., Hypersonic Propulsion, Counter-Drone Systems,Electronic Warfare)`}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Editor
          tooltipText={`State the desired outcomes of your research and development.`}
          label={"Objectives"}
        />
      </Grid>
      <Grid item xs={12}>
        <Editor
          tooltipText={`Outline the timeline for key achievements and specify the corresponding deliverables for each stage. Use clear and measurable descriptions`}
          label={"Deliverables"}
        />
      </Grid>
      <GridUpload item xs={12}>
        <ButtonUpload
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          href="#file-upload"
        >
          Upload a picture
          <VisuallyHiddenInput
            name={"image"}
            onChange={(e) => setFieldValue(e.target.files[0])}
            // value={values?.image}
            type="file"
          />
        </ButtonUpload>
        <TextUpload>Attach a Project Picture</TextUpload>
      </GridUpload>
    </Grid>
  );
}

export default InitialForm;
