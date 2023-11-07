"use client";
import { CloudUpload, Dock } from "@mui/icons-material";
import { Button, Grid, Typography, styled } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
function SecTwo() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Dock />
        <Typography variant="body1">Tax Registration File</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
      </Grid>
    </Grid>
  );
}

export default SecTwo;
