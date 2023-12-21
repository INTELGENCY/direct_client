import { Grid } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import Editor from "../../../Editor";

function PrimaryForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={4}
        columnGap={2}
      >
        <Grid item xs={12}>
          <TypographyGrow variant={"h1"} text={"Background"} />
        </Grid>

        <Grid item xs={12}>
          <Editor
            tooltipText={`Briefly explain what the project seeks to achieve and its overall boundaries`}
            label={"Detail Description"}
          />
        </Grid>
        <Grid item xs={12}>
          <Editor
            tooltipText={`Briefly describe the research methods used (e.g., simulations, surveys, field tests, end product etc.)`}
            label={"Methodology"}
          />
        </Grid>
        <Grid item xs={12}>
          <Editor
            tooltipText={`Enter the letter or reference number, meeting, or visit that resulted in the project proposal.`}
            label={"References"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PrimaryForm;
