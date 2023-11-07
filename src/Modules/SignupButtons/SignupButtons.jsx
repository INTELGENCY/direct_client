import { Grid } from "@mui/material";
import React from "react";
import SectionOne from "./SectionOne/SectionOne.jsx";
import Sectiontwo from "./SectionTwo/SectionTwo.jsx";
import LoginComponentImage from "../../Common/LoginComponetImage";
import { GridMDNone } from "../../Common/MUI/index.jsx";
import { Helmet } from "react-helmet";
import { loginMeta, signupMeta } from "../../utils/seocontent.jsx";

function SignupButtons({ isLogin }) {
  const meta = isLogin ? loginMeta : signupMeta;
  return (
    <div className="signup">
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Helmet>
      <Grid container className="signupContainer">
        <GridMDNone item lg={6} xl={5.3} className="left">
          <LoginComponentImage />
        </GridMDNone>
        <Grid
          sx={{ height: "100vh" }}
          item
          md={12}
          lg={6}
          xl={6.7}
          className="right"
        >
          <Grid container rowGap={8} className="container">
            <Grid item xs={12}>
              <SectionOne />
            </Grid>
            <Grid sx={{ marginTop: "120px" }} item xs={12}>
              <Sectiontwo isLogin={isLogin} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignupButtons;
