import { useState } from "react";
import { Grid } from "@mui/material";
import "gantt-task-react/dist/index.css";
import { initTasks, getStartEndDateForProject } from "./Data";
import AttachmentsMilestones from "./AttachmentsMilestones";
import GanttCharts from "./GanttCharts";
import Tasks from "./Tasks";
function Milestones() {
  return (
    <Grid container gap={4}>
      <Grid item xs={12}>
        <Tasks />
      </Grid>
      <Grid item xs={12}>
        <GanttCharts />
      </Grid>
      <Grid item xs={12}>
        <AttachmentsMilestones />
      </Grid>
    </Grid>
  );
}

export default Milestones;
