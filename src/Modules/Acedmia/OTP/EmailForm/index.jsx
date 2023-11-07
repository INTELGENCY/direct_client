import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SigninForm } from "../../../../Common/Forms/SigninForm";
import { Formik } from "formik";
import { formEmailSchema } from "../../../../Common/Validation/FormValidation";
import Spinner from "../../../../Common/Spinner";

import axios from "axios";
import { keys } from "../../../../config";
import { useState } from "react";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import { useDispatch } from "react-redux";
import SectionEmail from "../SectionEmail/Sectiontwo";

const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

function EmailForm() {
  const [otpsent, setotpsent] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoadng] = useState(false);
  const handleLogin = async (values) => {
    try {
      setIsLoadng(true);
      const valuess = { ...values, type: "academia" };

      const res = await axios.post(keys.api + "academia/otpsend", valuess);
      console.log(res, "here");

      const data = res.data;
      console.log(data, res, "here");
      if (res.status === 200) {
        dispatch(
          setAlert({ status: "success", text: "OTP Sent Successfully" })
        );
        sessionStorage.setItem("email", values.email);
        setotpsent(true);
      } else {
        dispatch(
          setAlert({
            status: "error",
            text: data?.result || "Couldn't Send OTP!",
          })
        );
        setotpsent(false);
      }
      setIsLoadng(false);
    } catch (e) {
      const data = e?.response?.data;
      setIsLoadng(false);
      setotpsent(false);
      dispatch(
        setAlert({
          status: "error",
          text: data?.result || e?.message || "Couldn't Login!",
        })
      );
      console.log(e);
    }
  };
  return (
    <>
      <Spinner isLoading={isLoading} />
      {otpsent ? (
        <SectionEmail setIsLoadng={setIsLoadng} />
      ) : (
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={handleLogin}
          validationSchema={formEmailSchema}
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
                      onlyEmail
                    />
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
                            fullWidth
                            type="submit"
                            variant="contained"
                          >
                            Send OTP
                          </SignupBtn>
                        </FlexBox>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={11}></Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default EmailForm;
