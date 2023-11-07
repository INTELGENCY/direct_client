import React, { Fragment, useState } from "react";

import {
  Button,
  Collapse,
  Link,
  styled,
  List,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

import { items } from "./Items";
import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import LogoWrapperFull from "../../../../Common/LogoFull";
import AuthComponent from "./AuthComponent";
import { useSelector } from "react-redux";
const color = "#645e5e";

const Info = styled("div")(() => ({
  height: "75px",
  display: "flex",
  color: "gray",
  marginTop: "0px",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1.2rem",
  padding: "1rem",
}));

const SignupBtn = styled(Button)(() => ({
  backgroundColor: "#075B2B",
  textTransform: "capitalize",
  borderRadius: "17px",
  "&:hover": {
    backgroundColor: "#098E6E",
  },
}));
const LoginBtn = styled(Button)(() => ({
  textTransform: "capitalize",
  borderRadius: "20px",

  "&:hover": {
    background: "black",
    border: "1.5px solid transparent",
    color: "white",
  },
  backgroundColor: "white",
  color: "black",
  border: "1.5px solid black",
}));
const Div = styled("div")(({ theme }) => ({
  width: 350,
  paddingBlock: "2rem",
  paddingInline: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    paddingInline: ".5rem",
  },
}));

function DrawerNav({ setState, state }) {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);
  const [open, setopen] = useState(false);
  const handleClick = (label) => {
    setopen((e) => (!e ? label : label === open ? false : label));
  };
  const toggleDrawerClose = () => {
    return setState(false);
  };
  const list = () => (
    <Div>
      <LogoWrapperFull invert onClick={toggleDrawerClose} width={80} />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          marginTop: "1rem",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {items?.map((item, ind) => {
          return item?.type === "normal" ? (
            <Fragment key={ind}>
              <ListItemButton
                onClick={() => {
                  navigate(item?.url);
                  toggleDrawerClose();
                }}
              >
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText primary={item?.label} />
              </ListItemButton>
              {ind === items?.length - 1 ? (
                <ListItemButton
                  key={ind}
                  onClick={() => {
                    navigate(
                      profile?.type === "industry"
                        ? "/industry/profile"
                        : "/academia/profile"
                    );
                    toggleDrawerClose();
                  }}
                >
                  <ListItemIcon>{<AccountCircle />}</ListItemIcon>
                  <ListItemText primary={"Profile"} />
                </ListItemButton>
              ) : null}
            </Fragment>
          ) : (
            <Fragment key={ind}>
              <ListItemButton onClick={() => handleClick(item?.label)}>
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText primary={item?.label} />
                {open === item?.label ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open === item?.label} timeout="auto" unmountOnExit>
                <List component="div" sx={{ paddingLeft: "2rem" }}>
                  {item?.children?.map((subItem, ind) => {
                    return subItem?.type === "normal" ? (
                      <ListItemButton
                        key={subItem?.label + ind}
                        onClick={() => {
                          navigate(subItem?.url);
                          toggleDrawerClose();
                        }}
                      >
                        <ListItemIcon>{subItem?.icon}</ListItemIcon>
                        <ListItemText primary={subItem?.label} />
                      </ListItemButton>
                    ) : null;
                  })}
                </List>
              </Collapse>
            </Fragment>
          );
        })}
      </List>
      {<AuthComponent donotShowAvatar />}
    </Div>
  );

  return (
    <React.Fragment>
      <Drawer
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
        anchor={"right"}
        open={state}
        onClose={toggleDrawerClose}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerNav;
