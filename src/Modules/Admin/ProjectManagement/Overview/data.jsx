import { AccountBalance, CalendarMonth, TaskAlt } from "@mui/icons-material";
import { customTheme } from "../../../../Theme/theme";

export const CardsData = [
  {
    title: "Due Date",
    subTitleOne: "Dec 12, 2022",
    subTitleTwo: "(completed on Nov 07, 2022)",
    icon: (
      <CalendarMonth sx={{ fontSize: "35px", color: "bg.slightlyLightRed" }} />
    ),
    borderColor: customTheme.palette.bg.slightlyLightRed,
  },
  {
    title: "Budget",
    subTitleOne: "$5,600.00",
    subTitleTwo: "(spended $5,600.00)",
    icon: <AccountBalance sx={{ fontSize: "35px", color: "bg.orange" }} />,
    borderColor: customTheme.palette.bg.orange,
  },
  {
    title: "Tasks",
    subTitleOne: "8",
    subTitleTwo: "(8 tasks completed)",
    icon: <TaskAlt sx={{ fontSize: "35px", color: "bg.parrotGreen" }} />,
    borderColor: customTheme.palette.bg.parrotGreen,
  },
];
