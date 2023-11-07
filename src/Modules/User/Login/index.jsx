import { Button, Grid } from "@mui/material";
import Sectionone from "./SectionOne/Sectionone";
import Sectiontwo from "./SectionTwo/Sectiontwo";
import LoginComponentImage from "../../../Common/LoginComponetImage";
import { GridMDNone } from "../../../Common/MUI";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
function Login() {
  return (
    <div className="signup">
      <Grid container alignItems={"stretch"} className="signupContainer">
        <GridMDNone item sm={0} md={6} lg={5.3} xl={5.3} className="left">
          <LoginComponentImage />
        </GridMDNone>
        <Grid
          sx={{ height: "100vh" }}
          item
          xs={12}
          lg={6}
          xl={6.7}
          className="right"
        >
          <Grid container alignItems={"center"} rowGap={12} className="">
            <Grid item xs={12}>
              <Sectionone />
            </Grid>
            <Grid item xs={12}>
              <Sectiontwo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
