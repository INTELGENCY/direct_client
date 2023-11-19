export const initTasks = () => {
  const currentDate = new Date();
  const tasks = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Project Planning and Research",
      id: "ProjectPlanningandResearch",
      progress: 90,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Hardware and Prototype Development",
      id: "HardwareandPrototypeDevelopment",
      progress: 50,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Software Development",
      id: "SoftwareDevelopment",
      progress: 60,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Prototype Testing and Refinement",
      id: "PrototypeTestingandRefinement",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Power Efficiency and Night Vision",
      id: "PowerEfficiencyandNightVision",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Image Analytics and Finalization",
      id: "ImageAnalyticsandFinalization",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Future Development and Documentation",
      id: "FutureDevelopmentandDocumentation",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Deployment and Training",
      id: "DeploymentandTraining",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Future Application Development",
      id: "FutureApplicationDevelopment",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Final Documentation and Presentation",
      id: "Final DocumentationandPresentation",
      progress: 0,
      type: "project",
      hideChildren: false,
    },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    //   end: new Date(
    //     currentDate.getFullYear(),
    //     currentDate.getMonth(),
    //     2,
    //     12,
    //     28
    //   ),
    //   name: "Idea",
    //   id: "Task 0",
    //   progress: 45,
    //   type: "task",
    //   project: "ProjectSample",
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    //   name: "Research",
    //   id: "Task 1",
    //   progress: 25,
    //   dependencies: ["Task 0"],
    //   type: "task",
    //   project: "ProjectSample",
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    //   name: "Discussion with team",
    //   id: "Task 2",
    //   progress: 10,
    //   dependencies: ["Task 1"],
    //   type: "task",
    //   project: "ProjectSample",
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    //   name: "Developing",
    //   id: "Task 3",
    //   progress: 2,
    //   dependencies: ["Task 2"],
    //   type: "task",
    //   project: "ProjectSample",
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    //   name: "Review",
    //   id: "Task 4",
    //   progress: 70,
    //   dependencies: ["Task 2"],
    //   type: "task",
    //   project: "ProjectSample",
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Release",
    //   id: "Task 6",
    //   progress: currentDate.getMonth(),
    //   type: "milestone",
    //   dependencies: ["Task 4"],
    //   project: "ProjectSample",
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    //   name: "Party Time",
    //   id: "Task 9",
    //   progress: 0,
    //   isDisabled: true,
    //   type: "task",
    // },
  ];
  return tasks;
};

export const getStartEndDateForProject = (tasks, projectId) => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};
