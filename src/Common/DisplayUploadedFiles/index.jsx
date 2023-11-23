import { Cloud } from "@mui/icons-material";
import { Fab, Grid, Paper, Stack, Typography } from "@mui/material";
import IconsHeadings from "../AnimationMui/IconHeadings";
import FileDownloaded from "./FileDownloaded";
import RatingMui from "../RatingMui";
function DisplayUploadedFiles({ ratingAdd }) {
  const files = [
    // {
    //   type: "pdf",
    //   content: "PDF_CONTENT_HERE",
    //   fileName: "example.pdf",
    // },
    {
      type: "xml",
      content: "/ProjectDocument/Proposal submission.docx",
      fileName: "submission.docx",
    },
  ];
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Grid container gap={2} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <IconsHeadings
              text={"Uploaded Files"}
              icons={<Cloud sx={{ color: "#252B42" }} />}
            />
            {ratingAdd && <RatingMui />}
          </Stack>
        </Grid>
        {files.map((e, i) => (
          <Grid item xs={12}>
            <FileDownloaded key={i} realData={e} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default DisplayUploadedFiles;
