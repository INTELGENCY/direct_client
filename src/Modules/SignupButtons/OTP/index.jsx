import { Grid } from "@mui/material";
import Sectionone from "./SectionOne/Sectionone";
import LoginComponentImage from "../../../Common/LoginComponetImage";
import { BackArrowButtonComp, GridMDNone } from "../../../Common/MUI";
import EmailForm from "./EmailForm";
import { useLocation } from "react-router-dom";
import {
  ACADEMIA,
  ACADEMIA_LOGIN,
  INDUSTRY_LOGIN,
} from "../../../utils/routes";
function RESETPASSWORD() {
  const { pathname } = useLocation();
  const route = pathname.includes(ACADEMIA) ? ACADEMIA_LOGIN : INDUSTRY_LOGIN;
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
          md={12}
          lg={6}
          xl={6.7}
          className="right"
        >
          <Grid
            container
            className="container"
            height={"100%"}
            alignItems={"start"}
          >
            <Grid item xs={11}>
              <Grid rowGap={0} container justifyContent={"center"}>
                <Grid item xs={11}>
                  <BackArrowButtonComp route={route} />
                </Grid>
                <Grid item xs={12}>
                  <Sectionone />
                </Grid>
                <Grid item xs={12}>
                  <EmailForm />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default RESETPASSWORD;
