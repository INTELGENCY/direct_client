import { Grid, Paper, Stack } from "@mui/material";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import { Route } from "@mui/icons-material";
import TimelineMui from "../../../Common/TimelineMui";
import { TasksProject } from "../../../utils/ProjectsData";
import RatingMui from "../../../Common/RatingMui";
function MilesStonesAdmin({ ratingAdd }) {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Grid container gap={2} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={"space-between"}>
            <IconsHeadings
              text={"Milestones"}
              icons={<Route sx={{ color: "#252B42" }} />}
            />
            {ratingAdd && <RatingMui />}
          </Stack>
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
