import { Card, Grid, Stack, Typography } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import Section from "./Section";
import { BubbleChart, DoneAll, Flare, TaskAlt } from "@mui/icons-material";
import { customTheme } from "../../../Theme/theme";
import ProjectNameWithoutTabs from "../../../Common/Admin/ProjectNameWithoutTabs";
import BasicInfo from "./BasicInfo";
const FieldData = [
  {
    Name: "name",
  },
];
function WorkFlowDetails() {
  return (
    <Grid container sx={{ pt: 8, pb: 4 }} gap={6}>
      <Grid item xs={12}>
        <MainHeadings text={"Project Work Flow"} />
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            boxShadow: customTheme.palette.boxShadows.boxShadowCards,
            borderRadius: "10px",
          }}
        >
          <ProjectNameWithoutTabs />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <BasicInfo/>
      </Grid>
      <Grid item xs={12}>
        <Section
          title={"Completed"}
          icon={
            <TaskAlt
              sx={{ color: customTheme.palette.bg.darkBlue, fontSize: "30px" }}
            />
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Section
          title={"Ongoing"}
          icon={
            <BubbleChart
              sx={{ color: customTheme.palette.bg.darkBlue, fontSize: "30px" }}
            />
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Section
          title={"Upcoming"}
          icon={
            <Flare
              sx={{ color: customTheme.palette.bg.darkBlue, fontSize: "25px" }}
            />
          }
        />
      </Grid>
    </Grid>
  );
}

export default WorkFlowDetails;
