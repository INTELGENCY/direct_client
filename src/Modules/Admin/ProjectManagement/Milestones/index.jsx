import { useState } from "react";
import { Button, ButtonGroup, Card, Divider, Grid, Stack } from "@mui/material";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import ViewSwitcher from "./ViewSwitcher";
import { initTasks, getStartEndDateForProject } from "./Data";
import AttachmentsMilestones from "./AttachmentsMilestones";
import GanttCharts from "./GanttCharts";
import TimelineAdmin from "./TimelineAdmin";
import Tasks from "./Tasks";
function Milestones() {
  const [view, setView] = useState("Day");
  const [tasks, setTasks] = useState(initTasks());
  const [isChecked, setIsChecked] = useState(true);
  let columnWidth = 60;

  if (view === "Month") {
    columnWidth = 300;
  } else if (view === "Week") {
    columnWidth = 250;
  }

  const handleTaskChange = (task) => {
    console.log("On date change Id:" + task.id);
    if (!task?.id) {
      return;
    }
    let newTasks = tasks?.map((t) => (t.id === task.id ? task : t));

    if (task?.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks?.find((t) => t.id === task.project);

      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks?.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks?.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task) => {
    if (!task?.id) {
      return;
    }
    setTasks(tasks?.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDoubleClick = (task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task, isSelected) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task) => {
    if (!task?.id) {
      return;
    }
    setTasks(tasks?.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

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
