import {
  AppBar,
  Button,
  Grid,
  IconButton,
  MenuItem,
  styled,
  Menu,
} from "@mui/material";
import React, { Fragment, useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNav from "./Drawer.jsx";
import LogoWrapper from "../../../../Common/Logo/index.jsx";
import LogoWrapperFull from "../../../../Common/LogoFull/index.jsx";
import { items } from "./Items.jsx";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import AuthComponent from "./AuthComponent.jsx";

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  paddingBlock: 20,
  position: "static",
  background: theme.palette.bg.black,
  // background: "#004879",

  paddingInline: "3.5rem",
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    paddingInline: "2.5rem",
  },
  [theme.breakpoints.down("md")]: {
    paddingInline: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    paddingInline: "1.5rem",
  },
  ["@media screen and (max-width: 400px)"]: {
    "&": {
      paddingInline: `1.5rem`,
    },
  },
}));
const LoginBtn = styled(Button)(() => ({
  background: "transparent",
  color: "white",
  textTransform: "capitalize",
}));
const Navlinks = styled(Button)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  textTransform: "capitalize",
  [theme.breakpoints.down("lg")]: {
    padding: "0px",
  },
}));
const SignupBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#075B2B",
  textTransform: "capitalize",
  borderRadius: "17px",
  transition: "ease-in-out .5s",
  "&:hover": {
    backgroundColor: "#098E6E",
  },
}));
const HamburgerIconDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
}));

function Navbar() {
  const [drawerValue, setDrawerValue] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleDrawer = () => {
    return setDrawerValue(true);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {windowWidth >= 1024 ? (
        <NavbarContainer position="relative">
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item md={1} lg={2.8} xl={2.8}>
              <LogoWrapperFull
                width={50}
                height={50}
                justifyContent="flex-start"
              />
            </Grid>
            <Grid item md={8} lg={6.2} xl={6.2}>
              <Stack
                direction={"row"}
                gap={"1.2rem"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {items?.map((navItem, index) => {
                  if (navItem?.type === "normal")
                    return (
                      navItem?.label?.toLowerCase() !== "contact us" && (
                        <Navlinks
                          sx={{ fontSize: ".95rem" }}
                          key={index}
                          onClick={() => navigate(navItem?.url)}
                        >
                          {navItem?.label}
                        </Navlinks>
                      )
                    );
                  else
                    return (
                      <SelectMenu
                        label={navItem?.label}
                        list={navItem?.children}
                        key={index}
                      />
                    );
                })}
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <AuthComponent />
            </Grid>
          </Grid>
        </NavbarContainer>
      ) : (
        <NavbarContainer position="relative">
          <Grid container alignItems={"center"}>
            <Grid item xs={6}>
              <LogoWrapper width={50} height={50} />
            </Grid>
            <Grid item xs={6}>
              <HamburgerIconDiv>
                <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
                  <MenuIcon />
                </IconButton>
              </HamburgerIconDiv>
              <DrawerNav
                toggleDrawer={toggleDrawer}
                setState={setDrawerValue}
                state={drawerValue}
              ></DrawerNav>
            </Grid>
          </Grid>
        </NavbarContainer>
      )}
    </React.Fragment>
  );
}

const SelectMenu = ({ label, list }) => {
  const ref = useRef();
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(true);
  };
  const handleClose = (url) => {
    setopen(false);
    navigate(url);
  };
  const navigate = useNavigate();
  return (
    <div ref={ref}>
      <Navlinks sx={{ fontSize: ".95rem" }} onClick={handleClick}>
        {label}
      </Navlinks>
      <Menu anchorEl={ref.current} open={open} onClose={handleClose}>
        {list?.map((li, i) => {
          return (
            <MenuItem onClick={() => handleClose(li?.url)} key={i}>
              {li?.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default Navbar;
