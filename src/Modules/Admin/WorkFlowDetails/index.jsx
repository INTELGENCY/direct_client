import { Card, Grid } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import Section from "./Section";
import { BubbleChart, Flare, History } from "@mui/icons-material";
import { customTheme } from "../../../Theme/theme";
import ProjectNameWithoutTabs from "../../../Common/Admin/ProjectNameWithoutTabs";

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
            boxShadow: customTheme.palette.boxShadows.boxShadowTable,
            borderRadius: "10px",
          }}
        >
          <ProjectNameWithoutTabs />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Section
          title={"Past"}
          icon={
            <History
              sx={{ color: customTheme.palette.bg.darkBlue, fontSize: "30px" }}
            />
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Section
          title={"Current"}
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
