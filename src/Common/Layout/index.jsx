import { useLayoutEffect, useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CreateProfile from "../../Modules/User/CreateProfile";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import DvrIcon from "@mui/icons-material/Dvr";
import ForumIcon from "@mui/icons-material/Forum";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import {
  Avatar,
  Grid,
  ListItemButton,
  ListItemText,
  Stack,
  Box,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoWrapper from "../Logo";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Business } from "@mui/icons-material";
import MenuMui from "../MenuMUI";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const BoxContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: theme.spacing(10),
  flexGrow: "1",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0),
  },
}));

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.bg.black,
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - 65px)`,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  boxShadow: "none",
  borderBottom: "1px solid",
}));
const NavbarContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "#fff",
  width: "98.5%",
  height: "100%",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const Container = styled("div")(({ theme }) => ({
  height: "100%",
  overflowY: "auto",
  minWidth: "300px",
  paddingLeft: "5px",
  paddingRight: "10px",
  paddingBlock: "20px",
  backgroundColor: theme.palette.bg.black,
  color: "#fff",
}));

const SectionLogo = styled("div")(({ open }) => ({
  display: "flex",
  justifyContent: open ? "center" : "flex-start",
  alignItems: "center",
  width: "100%",
  flexDirection: "row",
  gap: "1rem",
  transition: "all .3s ease-in-out",
  "& img": {
    transition: "all .3s ease-in-out",
  },
}));
function Index() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [MenuState, setMenuState] = useState(false);
  const profile = useSelector((state) => state.profile.profile);
  const isIndustry = profile?.type === "industry";
  const isAcademia = profile?.type === "academia";
  const isAdmin = profile?.type === "admin" || profile?.type === "super";
  console.log(profile);
  const [open, setOpen] = useState(false);
  const [reference, setreference] = useState(null);
  const handleOpenMenu = (e) => {
    setreference(e.target);
    setMenuState(true);
  };
  const handleCloseMenu = () => {
    setreference(null);
    setMenuState(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handlenavigate = (url) => {
    console.log("handle click");
    if (isAcademia) {
      navigate(`/academia/projects`);
    }
    if (isAdmin) {
      navigate(`/directportal/dashboard`);
    }
    if (isIndustry) {
      navigate(`/industry/projects`);
    }
  };
  useLayoutEffect(() => {
    if (pathname.includes("profile")) {
      // handlenavigate();
    }
  }, []);

  return (
      <Stack direction={"row"} sx={{  width: "100%" , paddingTop:"50px",}} className={"sadfasf"}>
        <AppBar
          sx={{
            backgroundColor: "#fff",
            borderBottom: 1,
            borderColor: "divider",
          }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <NavbarContainer>
              <IconButton sx={{ color: "#8D8D8D" }}>
                <NotificationsIcon />
              </IconButton>
              <IconButton onClick={handleOpenMenu} sx={{ color: "#8D8D8D" }}>
                <Avatar />
              </IconButton>
              <MenuMui
                reference={reference}
                handleCloseMenu={handleCloseMenu}
              />
            </NavbarContainer>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {open ? (
              <IconButton sx={{ color: "white" }} onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  color: "white",
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            )}
          </DrawerHeader>
          <Container>
            <Stack
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              spacing={12}
            >
              <SectionLogo open={open}>
                <LogoWrapper
                  invert={false}
                  width={open ? "200px" : "50px"}
                  height={open ? "200px" : "50px"}
                />
              </SectionLogo>
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={() => handlenavigate("projects")}>
                  <ListItemIcon>
                    <BusinessCenterIcon sx={{ color: "#F1F1F1" }} />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Business sx={{ color: "#F1F1F1" }} />
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
            </Stack>
          </Container>
        </Drawer>
        <div
        className="layoutCommon"
          component="main"
          // style={{
          //   flexGrow: 1,
          //   p: 2,
          //   "@media (max-width: 600px)": {
          //     p: 0,
          //   },
          //   pt: 10,
          // }}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11.6}>
          <Outlet />
          </Grid>
          </Grid>
        </div>
      </Stack>
  );
}

export default Index;
