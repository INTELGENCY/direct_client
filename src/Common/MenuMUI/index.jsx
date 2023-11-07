import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../Store/Features/ProfileSlice";

function MenuMui({ reference, handleCloseMenu }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div>
      <Menu
        anchorEl={reference}
        aria-haspopup="true"
        open={reference}
        sx={{ marginTop: 2.2 }}
        onClose={handleCloseMenu}
      >
        <MenuItem sx={{ cursor: "default" }}>
          {profile?.firstName + " " + profile?.lastName}
        </MenuItem>
        <MenuItem sx={{ cursor: "default" }}>{profile?.email}</MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(setProfile(null));
            handleCloseMenu();
          }}
        >
          Logout
        </MenuItem>
      </Menu>{" "}
    </div>
  );
}

export default MenuMui;
