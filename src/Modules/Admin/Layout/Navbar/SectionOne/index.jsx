import { Grid, Stack } from "@mui/material";
import React from "react";
import LogoWrapper from "../../../../../Common/Logo";

function SectionOne() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction={"row"}>
          <LogoWrapper width={100} height={100} />
          
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <LogoWrapper />
      </Grid>
    </Grid>
  );
}

export default SectionOne;
