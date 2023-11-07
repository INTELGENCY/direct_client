import { useState } from "react";
import {
  Avatar,
  Grid,
  IconButton,
  Menu,
  styled,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DrawerNav from "./Drawer";
const GridItemOne = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
}));
const NavbarContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: ".3rem",
  paddingBlock: "10px",
  paddingInline: "30px",
  backgroundColor: "#fff",
  width: "100%",
}));
const RightSide = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: ".3rem",
  width: "100%",
}));
const LeftSide = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: ".3rem",
  width: "100%",
}));
function Navbar({ windowWidth }) {
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <NavbarContainer positiom="static">
      {windowWidth < 1200 && (
        <LeftSide>
          <IconButton onClick={()=>setState(true)}>
            <MenuIcon />
          </IconButton>
          <DrawerNav state={state} setState={setState} />
        </LeftSide>
      )}
      <RightSide>
        <IconButton sx={{ color: "#8D8D8D" }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "#8D8D8D" }}
        >
          <Avatar />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </RightSide>
    </NavbarContainer>
  );
}

export default Navbar;
