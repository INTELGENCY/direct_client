import { Grid, Paper } from "@mui/material";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import { Route } from "@mui/icons-material";
import TimelineMui from "../../../Common/TimelineMui";
import { TasksProject } from "../../../utils/ProjectsData";
function MilesStonesAdmin() {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Grid container gap={2} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <IconsHeadings
            text={"Milestones"}
            icons={<Route sx={{ color: "#252B42" }} />}
          />
        </Grid>
        <Grid item xs={12}>
          {TasksProject.map((e, i) => (
            <TimelineMui timelineData={e} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MilesStonesAdmin;
