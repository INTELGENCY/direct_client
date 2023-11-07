import {
  FolderCopy,
  ContactPage,
  Info as InfoIcon,
  Feed,
  Business,
  ContentPasteSearch,
  SatelliteAlt,
} from "@mui/icons-material";
export const items = [
  {
    label: "Projects",
    url: "/projects",
    type: "normal",
    icon: <FolderCopy />,
  },
  {
    label: "Listed Companies",
    type: "normal",
    icon: <Business />,
  },

  {
    label: "Researchers",
    type: "normal",
    icon: <ContentPasteSearch />,
  },

  {
    label: "Teams",
    url: "/teams",
    type: "normal",
    icon: <ContactPage />,
  },
  {
    label: "Forum",
    url: "/forum",
    type: "normal",
    icon: <Feed />,
  },
  {
    label: "Communication",
    url: "/communication",
    type: "normal",
    icon: <SatelliteAlt />,
  },
];
