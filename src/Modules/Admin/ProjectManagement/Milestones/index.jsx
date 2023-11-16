import { Button, ButtonGroup, Card, Divider, Grid, Stack } from "@mui/material";
import TimelineTask from "./TimelineTask";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

let tasks = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: "Idea",
    id: "Task 0",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 7),
    name: "Idea",
    id: "Task 0",
    type: "task",
    progress: 45,
    isDisabled: true,
    subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
        ],
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
];
function Milestones() {
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Activities />
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 3 }} elevation={4}>
          <Gantt tasks={tasks} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Milestones;

const Activities = () => (
  <Card sx={{ p: 3 }} elevation={4}>
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <ButtonGroup
            color="success"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Today</Button>
            <Button>Week</Button>
            <Button>Month</Button>
            <Button>2022</Button>
          </ButtonGroup>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12}>
        <TimelineTask />
      </Grid>
    </Grid>
  </Card>
);
