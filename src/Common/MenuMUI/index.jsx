import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../Store/Features/ProfileSlice";
import { useNavigate } from "react-router-dom";

function MenuMui({ reference, handleCloseMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);
  console.log(profile.type, "profile data");
  return (
    <div>
      <Menu
        anchorEl={reference}
        aria-haspopup="true"
        open={reference}
        sx={{ marginTop: 2.2 }}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() =>
            profile.type === "academia"
              ? navigate("/academia/profile")
              : navigate("/industry/profile")
          }
          sx={{ cursor: "default" }}
        >
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
