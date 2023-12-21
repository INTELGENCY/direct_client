import {
  Add,
  AddBox,
  BusinessCenter,
  BusinessCenterOutlined,
  Chat,
  ChatOutlined,
  Create,
  CreateNewFolder,
  CreateNewFolderOutlined,
  Drafts,
  Draw,
  DrawOutlined,
  Group,
  GroupOutlined,
  Key,
  Public,
  Science,
  ScienceOutlined,
  ViewAgenda,
  ViewAgendaOutlined,
} from "@mui/icons-material";

export const adminNavigationList = [
  {
    title: "Projects",
    type: "noChildren",
    icon: <Science sx={{ color: "#F1F1F1" }} />,
    children: [
      {
        title: "Create Projects",
        icon: <CreateNewFolder sx={{ color: "#919191" }} />,
        type: "noChildren",
      },
      {
        title: "Draft",
        icon: <Draw sx={{ color: "#919191" }} />,
        type: "noChildren",
      },
      {
        title: "View Projects",
        icon: <ViewAgenda sx={{ color: "#919191" }} />,
        type: "Children",
        children: [
          {
            title: "Classified",
            icon: <Key sx={{ color: "#919191" }} />,
            type: "noChildren",
          },
          {
            title: "Non-Classified",
            icon: <Public sx={{ color: "#919191" }} />,
            type: "noChildren",
          },
        ],
      },
    ],
  },
  {
    title: "User Requirements",
    type: "noChildren",
    icon: <BusinessCenter sx={{ color: "#F1F1F1" }} />,
  },
  {
    title: "Team",
    type: "noChildren",
    icon: <Group sx={{ color: "#F1F1F1" }} />,
  },
  {
    title: "Communication",
    type: "noChildren",
    icon: <Chat sx={{ color: "#F1F1F1" }} />,
  },
];
