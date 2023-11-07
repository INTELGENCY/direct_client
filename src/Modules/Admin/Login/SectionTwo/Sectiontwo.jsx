import { Button, Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SigninForm } from "../../../../Common/Forms/SigninForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { formLoginSchema } from "../../../../Common/Validation/FormValidation";
import Spinner from "../../../../Common/Spinner";

import axios from "axios";
import { keys } from "../../../../config";
import { useState } from "react";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import { useDispatch } from "react-redux";
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

function Sectiontwo({ emailsent, setEmailsent }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoadng] = useState(false);
  const handleLogin = async (values) => {
    try {
      setIsLoadng(true);
      const valuess = { ...values, type: "industry" };

      const res = await axios.post(keys.api + "admin/signin", valuess);
      console.log(res, "here");

      const data = res.data;
      console.log(data, "here");
      if (res.status === 200) {
        dispatch(setAlert({ status: "success", text: data?.result }));
        setEmailsent(values.email);
      } else {
        dispatch(
          setAlert({
            status: "error",
            text: data?.result || "Couldn't SendEmail!",
          })
        );
      }
      setIsLoadng(false);
    } catch (e) {
      const data = e?.response?.data;
      setIsLoadng(false);
      dispatch(
        setAlert({
          status: "error",
          text: data?.result || e?.message || "Couldn't SendEmail!",
        })
      );
      console.log(e);
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
                        <LoginLink
                          onClick={() =>
                            navigate("/directportal/admin/resetpassword")
                          }
                        >
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
