import { Cloud } from "@mui/icons-material";
import { Fab, Grid, Paper, Stack, Typography } from "@mui/material";
import IconsHeadings from "../AnimationMui/IconHeadings";
import FileDownloaded from "./FileDownloaded";
function DisplayUploadedFiles() {
  const files = [
    // {
    //   type: "pdf",
    //   content: "PDF_CONTENT_HERE",
    //   fileName: "example.pdf",
    // },
    {
      type: "xml",
      content: "/ProjectDocument/Proposal submission.docx",
      fileName: "submission.xml",
    },
  ];
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Grid container gap={2} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <IconsHeadings
            text={"Uploaded Files"}
            icons={<Cloud sx={{ color: "#252B42" }} />}
          />
        </Grid>
        {files.map((e, i) => (
          <Grid item xs={12}>
            <FileDownloaded key={i} realData={e}  />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default DisplayUploadedFiles;
