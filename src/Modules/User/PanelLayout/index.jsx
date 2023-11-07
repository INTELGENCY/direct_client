import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CreateProfile from "../CreateProfile";
function PanelLayout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowWidth, "windowWidth");
  return (
    <Grid container sx={{ height: "100vh", width: "100vw" }}>
      {windowWidth >= 1200 && (
        <Grid item sx={{ height: "100vh", position: "fixed" }} lg={3} xl={2.5}>
          <Sidebar />
        </Grid>
      )}
      <Grid
        item
        sx={{
          marginLeft: "25%",
          "@media (max-width: 1199px)": {
            marginLeft: "0px",
          },
        }}
        md={12}
        lg={9}
        xl={9.5}
      >
        <Grid container>
          <Grid item xs={12}>
            <Navbar windowWidth={windowWidth} />
          </Grid>
          <Grid item xs={12}>
            <CreateProfile />
          </Grid>
          {/*  */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PanelLayout;
