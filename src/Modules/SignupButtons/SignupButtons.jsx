import { Grid, styled, Button } from "@mui/material";
import LoginComponentImage from "../../Common/LoginComponetImage";
import { BackArrowButtonComp, GridMDNone } from "../../Common/MUI/index.jsx";
import { Helmet } from "react-helmet";
import { loginMeta, signupMeta } from "../../utils/seocontent.jsx";
import { useLocation, Link } from "react-router-dom";
import { LOGIN_MAIN, SIGNUP_MAIN } from "../../utils/routes.jsx";
import FormComponent from "./FormComponent/index.jsx";

function SignupButtons() {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");
  const meta = isLogin ? loginMeta : signupMeta;
  const clicked = pathname !== LOGIN_MAIN && pathname !== SIGNUP_MAIN;

  const getPath = (path) => {
    return `/${isLogin ? "login" : "signup"}/${path}`;
  };
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
            {clicked ? (
              <FormComponent />
            ) : (
              <Grid sx={{ marginTop: "0px" }} item xs={12}>
                <Grid
                  rowGap={3}
                  container
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  // alignItems={"center"}
                >
                  <Grid item xs={11} style={{ marginBottom: "50px" }}>
                    <BackArrowButtonComp route={"/"} />
                  </Grid>
                  <Grid item md={8} sm={9} xs={12}>
                    <Industrybtn
                      fullWidth
                      component={Link}
                      to={getPath("industry")}
                    >
                      Industry
                    </Industrybtn>
                  </Grid>
                  <Grid item md={8} sm={9} xs={12}>
                    <Academiabtn
                      fullWidth
                      component={Link}
                      to={getPath("academia")}
                    >
                      Academia
                    </Academiabtn>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignupButtons;

const Academiabtn = styled(Button)(({ theme }) => ({
  paddingBlock: "12px",
  fontSize: "1.1rem",
  color: "white",
  backgroundColor: "#098E6E",
  textTransform: "capitalize",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#098E6E",
  },
}));
const Industrybtn = styled(Button)(({ theme }) => ({
  paddingBlock: "12px",
  fontSize: "1.1rem",
  color: "#098E6E",
  backgroundColor: "transparent",
  border: "1px solid #098E6E",
  borderRadius: "10px",
  textTransform: "capitalize",
  marginTop: "20px",
}));
