import { Grid, Grow, Typography } from "@mui/material";
import React, { useState } from "react";
import InputFields from "../../../InputFields/InputFields";
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
  const [value, setValue] = useState(dayjs("2022-04-17"));
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
          <Editor label={"Description"} />
        </Grid>
        <Grid item xs={12}>
          <Editor label={"Methodology"} />
        </Grid>
        <Grid item xs={12}>
          <Editor label={"Reference"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default PrimaryForm;
