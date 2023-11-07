import {
  AccessTime,
  Analytics,
  AutoStories,
  Gavel,
  ScatterPlot,
} from "@mui/icons-material";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { ContentData } from "./Data";

const TabsStyle = styled(Grid)(({ theme }) => ({}));
const ListCustome = styled(List)(({ theme }) => ({
  width: "100%",
  // border: "1px solid",
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
  ["@media screen  and (max-width:899px)"]: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: ".5rem",
    minWidth: "700px",
    overflowX: "auto",
  },
}));
const ListItemCustom = styled(ListItem)(({ theme }) => ({
  borderBottom: "1px solid lightgray",
  paddingTop: "20px",
  ["@media screen  and (max-width:899px)"]: {
    // borderBottom: "none",
  },
}));
const TabContent = styled("div")(({ theme }) => ({
  paddingInline: "20px",
  paddingBlock: "10px",
  marginTop: "1rem",
  // border:"1px solid green",
  minHeight: "300px",
  maxHeight: "400px",
  overflowY: "auto",
}));
const d = [
  {
    name: "Project Duration",
    icon: <AccessTime />,
  },
  {
    name: "Project Process",
    icon: <ScatterPlot />,
  },
  {
    name: "Cost Guidelines",
    icon: <AutoStories />,
  },
  {
    name: "Funding Process",
    icon: <Analytics />,
  },
  {
    name: "Terms & Qualifications",
    icon: <Gavel />,
  },
];
function TabsSection({ data }) {
  const [TabShow, setTabShow] = useState(1);
  return (
    <Grid container justifyContent={"space-between"}>
      <TabsStyle item xs={12} sm={12} md={3.6} lg={3.6}>
        <ListCustome>
          {d.map((e, i) => (
            <ListItemCustom
              key={i}
              disablePadding
              onClick={() => setTabShow(i + 1)}
            >
              <ListItemButton sx={{ paddingInline: "3px" }}>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.name} />
              </ListItemButton>
            </ListItemCustom>
          ))}
        </ListCustome>
      </TabsStyle>
      <Grid item xs={12} sm={12} md={8.4} lg={8.4}>
        {ContentData.map(
          (e, i) =>
            e.key === TabShow && (
              <TabContent key={i}>
                <Typography color={"gray"} variant="body1">
                  {data?.terms}
                </Typography>
              </TabContent>
            )
        )}
      </Grid>
    </Grid>
  );
}

export default TabsSection;
