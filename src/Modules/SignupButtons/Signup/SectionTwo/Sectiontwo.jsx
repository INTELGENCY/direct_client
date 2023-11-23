import { Button, Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SignupForm } from "../../../../Common/Forms/SignupForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { formSignupSchema } from "../../../../Common/Validation/FormValidation";
import Spinner from "../../../../Common/Spinner";

import axios from "axios";
import { keys } from "../../../../config";
import { useState } from "react";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import { useDispatch } from "react-redux";

const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const LoginText = styled("span")(({ theme }) => ({
  color: "#666565",
  marginBottom: "20px",
}));
const SignupBtn = styled(Button)(({ theme }) => ({
  paddingBlock: "12px",
  fontSize: "1.1rem",
  backgroundColor: "#098E6E",
  textTransform: "capitalize",
  marginTop: "20px",
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAcademia = pathname.includes("academia");
  const route = isAcademia ? "/academia/login" : "/user/login";
  const [isLoading, setIsLoadng] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    console.log("values");
    console.log(values);
    try {
      setIsLoadng(true);
      dispatch(setAlert({ status: null, text: null }));

      const valuess = { ...values, type: "academia" };
      const res = await axios.post(keys.api + "academia/signup", valuess);
      const data = res.data;
      if (res.status === 200) {
        dispatch(setAlert({ status: "success", text: "Signup Successfully" }));
        navigate("/academia/login");
      } else {
        dispatch(setAlert({ status: "error", text: "Can't Signup" }));
      }
      setIsLoadng(false);
    } catch (e) {
      setIsLoadng(false);
      dispatch(setAlert({ status: "error", text: "Couldn't Signup!" }));
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
          firstName: "",
          lastName: "",
          phone: "",
        }}
        onSubmit={handleLogin}
        validationSchema={formSignupSchema}
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
                <Grid item xs={11}>
                  <SignupForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={11}>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={9} sm={6}>
                      <FlexBox>
                        <SignupBtn
                          type="onSubmit"
                          fullWidth
                          variant="contained"
                        >
                          Create An Account
                        </SignupBtn>
                      </FlexBox>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={9} sm={6}>
                  <FlexBox>
                    <LoginText>
                      Already have an account?{" "}
                      <LoginLink onClick={() => navigate(route)}>
                        Login
                      </LoginLink>
                    </LoginText>
                  </FlexBox>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default Sectiontwo;
