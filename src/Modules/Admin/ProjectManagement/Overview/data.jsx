import { AccountBalance, CalendarMonth, TaskAlt } from "@mui/icons-material";
import { customTheme } from "../../../../Theme/theme";

export const CardsData = [
  {
    title: "Due Date",
    subTitleOne: "Nov 3, 2024", 
    subTitleTwo: "(in progress)",
    icon: (
      <CalendarMonth sx={{ fontSize: "35px", color: "bg.slightlyLightRed" }} />
    ),
    borderColor: customTheme.palette.bg.slightlyLightRed,
  },
  {
    title: "Budget",
    subTitleOne: "PKR 2,005,600.00",
    subTitleTwo: "(spended PKR 35,600.00)",
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
