import React from "react";
import All from "../../../Common/ViewProjects/All";
import { Grid, Typography } from "@mui/material";

function Projects() {
  return (
    <div>
      <Grid sx={{ mt: 5 }} container gap={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Overview</Typography>
        </Grid>
        <Grid item xs={12}>
          <All />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
