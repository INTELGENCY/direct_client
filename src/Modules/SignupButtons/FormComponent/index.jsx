import { Grid, Button, styled } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { Formik } from "formik";
import {
  ACADEMIA,
  ACADEMIA_LOGIN,
  ACADEMIA_SIGNUP,
  INDUSTRY,
  INDUSTRY_LOGIN,
  INDUSTRY_SIGNUP,
  LOGIN_MAIN,
  SIGNUP_MAIN,
} from "../../../utils/routes";
import { useDispatch } from "react-redux";
import { useState } from "react";
import LogoWrapper from "../../../Common/Logo";
import {
  formLoginSchema,
  formSignupSchema,
} from "../../../Common/Validation/FormValidation";
import { SigninForm } from "../../../Common/Forms/SigninForm";
import { SignupForm } from "../../../Common/Forms/SignupForm";
import { BackArrowButtonComp } from "../../../Common/MUI";
const FormComponent = () => {
  return (
    <div>
      <InfoComponent />
      <FormComp />
    </div>
  );
};

export default FormComponent;

const InfoComponent = () => {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");
  const isAcademia = pathname.includes("academia");
  const name = isAcademia ? "Academia" : "Industry";
  const sentence = !isLogin ? "Signup at " + name : "Login to " + name;
  return (
    <Grid container justifyContent={"center"} className={"signupSectionOne"}>
      <Grid item xs={11}>
        <BackArrowButtonComp route={isLogin ? LOGIN_MAIN : SIGNUP_MAIN} />
      </Grid>
      <Grid item xs={12} className={"itemOne"}>
        <LogoWrapper width={"100px"} height={"100px"} />
        <h1> {sentence}</h1>
      </Grid>
      <Grid
        item
        xs={11}
        textAlign={"center"}
        sm={9.5}
        mb={2}
        mt={2}
        className={"itemTwo"}
      ></Grid>
    </Grid>
  );
};

const FormComp = () => {
  const { pathname } = useLocation();
  const isAcademia = pathname.includes("academia");
  const dispatch = useDispatch();
  const isLogin = pathname.includes("login");
  const routeIsLogin = isAcademia ? ACADEMIA_LOGIN : INDUSTRY_LOGIN;
  const routeIsSIGNUP = isAcademia ? ACADEMIA_SIGNUP : INDUSTRY_SIGNUP;
  const route = isLogin ? routeIsLogin : routeIsSIGNUP;

  const [isLoading, setIsLoadng] = useState(false);
  const handlePost = async (values) => {
    console.log(values);
    try {
      setIsLoadng(true);
      dispatch(setAlert({ status: null, text: null }));
      const path = isAcademia
        ? ACADEMIA
        : INDUSTRY + "/" + isLogin
        ? "signin"
        : "signup";

      const res = await axios.post(keys.api + path, values);
      const data = res.data;
      if (res.status === 200) {
        dispatch(
          setAlert({
            status: "success",
            text: `${isLogin ? "Login" : "Signup"} Successfull!`,
          })
        );
        dispatch(setProfile({ ...data?.userDetails, token: data?.token }));
      } else {
        dispatch(
          setAlert({ status: "error", text: data?.result || "Can't Login" })
        );
      }
      setIsLoadng(false);
    } catch (e) {
      const data = e?.response?.data;
      setIsLoadng(false);
      dispatch(
        setAlert({
          status: "error",
          text: data?.result || e?.message || "Couldn't Login!",
        })
      );
      console.log(e.message);
    }
  };
  const object = {
    email: "",
    password: "",
  };
  if (!isLogin) {
    object.password = "";
    object.firstName = "";
    object.lastName = "";
    object.phone = "";
  }
  return (
    <Formik
      initialValues={object}
      onSubmit={handlePost}
      validationSchema={isLogin ? formLoginSchema : formSignupSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid
              rowGap={4}
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item xs={9}>
                {isLogin ? (
                  <SigninForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                ) : (
                  <SignupForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid item xs={6}>
                    <FlexBox>
                      <LoginLink onClick={() => navigate("/otp")}>
                        Forgot Password?
                      </LoginLink>
                    </FlexBox>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={11}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid item xs={8}>
                    <FlexBox>
                      <SignupBtn fullWidth type="submit" variant="contained">
                        Login to Account
                      </SignupBtn>
                    </FlexBox>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7}>
                <FlexBox>
                  <LoginText>
                    Don't have an account?{" "}
                    <LoginLink onClick={() => navigate(route)}>
                      Signup
                    </LoginLink>
                  </LoginText>
                </FlexBox>
              </Grid>

              <Grid item xs={11}></Grid>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};

const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const LoginText = styled("span")(({ theme }) => ({
  color: "#666565",
}));
const SignupBtn = styled(Button)(({ theme }) => ({
  paddingBlock: "12px",
  fontSize: "1.1rem",
  backgroundColor: "#098E6E",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#098E6E",
  },
}));
const LoginLink = styled(Link)(({ theme }) => ({
  color: "#075B2B",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "pointer",
}));
