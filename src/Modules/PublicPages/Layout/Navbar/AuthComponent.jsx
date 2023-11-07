import {
  Button,
  IconButton,
  MenuItem,
  styled,
  Stack,
  Avatar,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setProfile } from "../../../../Store/Features/ProfileSlice";
const AuthComponent = ({ donotShowAvatar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    if (type === "profile") {
      navigate(
        `/${
          profile?.type === "industry"
            ? "industry/createprofile"
            : profile?.type === "academia"
            ? "academia/createprofile"
            :( profile?.type === "admin" ||
              profile?.type === "super" ||
              profile?.type === "subadmin")
            ? "directportal/dashboard"
            : null
        }`
      );
      setAnchorEl(null);
    } else if (type === "logout") {
      dispatch(setProfile(null));
    } else {
      setAnchorEl(null);
    }
  };
  return profile ? (
    donotShowAvatar ? null : (
      <>
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "#8D8D8D",
            display: "block",
            marginLeft: "auto",
          }}
        >
          <Avatar />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              handleClose("profile");
            }}
          >
            My Account
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("logout");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </>
    )
  ) : (
    <Stack
      justifyContent={donotShowAvatar ? "center" : "flex-end"}
      mt={donotShowAvatar ? "1rem" : undefined}
      direction={"row"}
      gap={"1rem"}
    >
      <LoginBtn component={Link} to="/login" donotShowAvatar={donotShowAvatar}>
        Login
      </LoginBtn>
      <SignupBtn component={Link} to="/signup" variant="contained">
        Signup
      </SignupBtn>
    </Stack>
  );
};
export default AuthComponent;
const SignupBtn = styled(Button)((data) => {
  const donotShowAvatar = data?.donotShowAvatar;
  return {
    backgroundColor: "#075B2B",
    textTransform: "capitalize",
    borderRadius: "17px",
    transition: "ease-in-out .5s",
    padding: !donotShowAvatar ? undefined : "3px 22px",
    "&:hover": {
      backgroundColor: "#098E6E",
    },
  };
});
const LoginBtn = styled(Button)((data) => {
  const theme = data?.theme;
  const donotShowAvatar = data?.donotShowAvatar;
  return {
    background: "transparent",
    textTransform: "capitalize",
    color: !donotShowAvatar ? "white" : theme.palette.bg.green,
    border: !donotShowAvatar ? null : "2px solid " + theme.palette.bg.green,
    borderRadius: !donotShowAvatar ? null : "17px",
    padding: !donotShowAvatar ? undefined : "3px 22px",
  };
});
