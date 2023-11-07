import { Cloud } from "@mui/icons-material";
import { Fab, Grid, Paper, Stack, Typography } from "@mui/material";
import IconsHeadings from "../AnimationMui/IconHeadings";
import FileDownloaded from "./FileDownloaded";

function DisplayUploadedFiles() {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Grid container gap={2} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <IconsHeadings
            text={"Uploaded Files"}
            icons={<Cloud sx={{ color: "#252B42" }} />}
          />
        </Grid>
        <Grid item xs={12}>
          <FileDownloaded arrayFiles={"File Name"} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DisplayUploadedFiles;
