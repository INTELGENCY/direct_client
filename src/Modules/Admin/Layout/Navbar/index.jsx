import React from "react";
import { Grid, styled } from "@mui/material";
import SectionOne from "./SectionOne";
const Container = styled("div")(({ theme }) => ({
  height: "80px",
  width: "100%",
  background: "linear-gradient(92deg, #5367DC 0%, #3044C0 100%)",
}));
function Navbar() {
  return (
    <Container>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={11.5}>
          <SectionOne />
        </Grid>
        <Grid item xs={11.5}></Grid>
        <Grid item xs={11.5}></Grid>
      </Grid>
    </Container>
  );
}

export default Navbar;
