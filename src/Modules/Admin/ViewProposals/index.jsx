import { Card, Grid, Paper, Stack, Typography } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import DisplayUploadedFiles from "../../../Common/DisplayUploadedFiles";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import { CloudUpload, Description, Equalizer, Language } from "@mui/icons-material";
import MilesStonesAdmin from "./MilesStonesAdmin";
function ViewProposals() {
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
    </Grid>
  );
}

export default ViewProposals;
