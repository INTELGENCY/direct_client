import { styled, Grid } from "@mui/material";
import React from "react";
import LogoWrapper from "../../../Common/Logo";

function SectionOne() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      className={"signupSectionOne"}
    >
      <Grid item xs={11} className={"itemOne"}>
        <LogoWrapper width={"150px"} height={"130px"} />
        <h1>
          Development, Innovation, and Research for Evolving Cutting-edge
          Technologies
        </h1>
      </Grid>
    </Grid>
  );
}

export default SectionOne;
