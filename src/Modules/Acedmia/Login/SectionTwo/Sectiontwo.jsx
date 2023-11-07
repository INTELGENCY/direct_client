import { Button, Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SigninForm } from "../../../../Common/Forms/SigninForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { formLoginSchema } from "../../../../Common/Validation/FormValidation";
import { useState } from "react";
import Spinner from "../../../../Common/Spinner";

import axios from "axios";
import { keys } from "../../../../config";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import { setProfile } from "../../../../Store/Features/ProfileSlice";

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

function Sectiontwo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAcademia = pathname.includes("academia");
  const route = isAcademia ? "/academia/signup" : "/user/signup";
  const [isLoading, setIsLoadng] = useState(false);
  const handleLogin = async (values) => {
    console.log("values");
    console.log(values);
    try {
      setIsLoadng(true);
      dispatch(setAlert({ status: null, text: null }));

      const res = await axios.post(keys.api + "academia/signin", values);
      const data = res.data;
      console.log(data);
      if (res.status === 200) {
        dispatch(setAlert({ status: "success", text: "Login Successfully" }));
        dispatch(setProfile({ ...data?.userDetails, token: data?.token }));
        // navigate("/academia/profile");
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
  return (
    <>
      <Spinner isLoading={isLoading} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={formLoginSchema}
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
                  <SigninForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={6}>
                      <FlexBox>
                        {/* <LoginText> */}
                        <LoginLink onClick={() => navigate("/otp")}>
                          Forgot Password?
                        </LoginLink>
                        {/* </LoginText> */}
                      </FlexBox>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={11}>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={8}>
                      <FlexBox>
                        <SignupBtn
                          // onClick={() => navigate("/createprofile")}
                          fullWidth
                          type="submit"
                          variant="contained"
                        >
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
    </>
  );
}

export default Sectiontwo;
