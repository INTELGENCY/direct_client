import { Button, Card, Grid, Paper, Stack, Typography } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import DisplayUploadedFiles from "../../../Common/DisplayUploadedFiles";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import {
  Approval,
  ApprovalRounded,
  CloudUpload,
  Description,
  Equalizer,
  Language,
} from "@mui/icons-material";
import MilesStonesAdmin from "./MilesStonesAdmin";
import FileDownloaded from "../../../Common/DisplayUploadedFiles/FileDownloaded";
import FileUploadComp from "../../../Common/FileUploadComp";
import FilesComp from "../../../Common/FileUploadComp/FilesComp";
import DialogMui from "../../../Common/DialogMui/DialogMui";
import { useState } from "react";
const arrayFiles = ["Pre-Award Formalities", "Award of Contract"];
function ViewProposals() {
  const [DialogState, setDialogState] = useState(false);
  const handleClickOpen = () => {
    setDialogState(true);
  };

  const handleClose = () => {
    setDialogState(false);
  };
  return (
    <Grid container sx={{ pt: 6, pb: 2, pl: 2, pr: 2 }} gap={4}>
      <Grid item xs={12}>
        <MainHeadings text={"Proposal-Cloud Migration"} />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Objectives"}
              icons={<Language sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Description"}
              icons={<Description sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Expected Outcomes"}
              icons={<Equalizer sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Methodologies"}
              icons={<CloudUpload sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <MilesStonesAdmin />
      </Grid>
      <Grid item xs={12}>
        <DisplayUploadedFiles />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Grid container gap={2} sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <IconsHeadings
                text={"Accept Proposal"}
                icons={<Approval sx={{ color: "#252B42" }} />}
              />
            </Grid>
            {arrayFiles.map((e, i) => (
              <Grid item xs={12}>
                <FilesComp arrayFiles={e} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button onClick={handleClickOpen} variant="contained">
                Accept
              </Button>
            </Grid>
            <DialogMui
              title={"Proposal Accepted!!!"}
              BodyText={
                "I’m thrilled to share that our proposal has been accepted! This is a significant step forward for us. Thank you all for your hard work and contributions to making this happen. Let’s move ahead together and create something incredible."
              }
              handleClose={handleClose}
              open={DialogState}
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ViewProposals;
