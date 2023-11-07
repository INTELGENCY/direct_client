import { Grid } from "@mui/material";
import Sectionone from "./SectionOne/Sectionone";
import Sectiontwo from "./SectionTwo/Sectiontwo";
import LoginComponentImage from "../../../Common/LoginComponetImage";
import { GridMDNone } from "../../../Common/MUI";

function Signup() {
  return (
    <div className="signup">
      <Grid container className="signupContainer">
        <GridMDNone item lg={6} xl={5.3} className="left">
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
          <Grid container rowGap={8} className="container">
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

export default Signup;
