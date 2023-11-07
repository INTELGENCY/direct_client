import React from "react";
import List from "@mui/material/List";
import {  Grid, Stack, styled } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ListItemButton from "@mui/material/ListItemButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import DvrIcon from "@mui/icons-material/Dvr";
import LogoutIcon from "@mui/icons-material/Logout";
import ForumIcon from "@mui/icons-material/Forum";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import LogoWrapper from "../../../../Common/Logo";
const Container = styled("div")(({ theme }) => ({
  height: "100%",
  overflowY:"scroll",
  minWidth: "300px",
  paddingLeft:"5px",
  paddingRight:"10px",
  paddingBlock: "20px",
  backgroundColor: "Black",
  color: "#fff",
}));
const Bold = styled("span")(({ theme }) => ({
  fontWeight: "500",
  textAlign: "center",
  padding:"7px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const SectionLogo = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap:"1rem"
}));
function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Stack
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        spacing={8}
      >
        <SectionLogo>
          <LogoWrapper invert={false} width={"100px"} height={"100px"} />
          <Bold>
            Development, Innovation, and Research for Evolving Cutting-edge
            Technologies
          </Bold>
        </SectionLogo>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader
          //     sx={{
          //       background: "black",
          //       color: "rgba(255, 255, 255, 0.7)",
          //     }}
          //     component="div"
          //     id="nested-list-subheader"
          //   >
          //     Menu
          //   </ListSubheader>
          // }
        >
          <ListItemButton>
            <ListItemIcon>
              <BubbleChartIcon sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BusinessCenterIcon sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText primary="Listed Companies" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DvrIcon sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText primary="Resourse Management" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText primary="Team " />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ForumIcon sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText primary="Forums" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SatelliteAltIcon sx={{ color: "#F1F1F1" }} />
            </ListItemIcon>
            <ListItemText primary="Communication" />
          </ListItemButton>
        </List>
        <Grid container>
          <Grid
            sx={{
              paddingBottom: "10px",
              marginTop: "15%",
              borderTop: "1px solid white",
            }}
            item
            xs={12}
          >
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#F1F1F1" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default Sidebar;
