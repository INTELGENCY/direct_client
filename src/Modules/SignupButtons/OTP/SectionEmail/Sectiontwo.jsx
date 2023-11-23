import { Button, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputsNumber from "./InputsNumber";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { keys } from "../../../../config";

const Container = styled("div")(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("sm")]: {},
}));
const OtpHeadings = styled(Typography)(({ theme }) => ({
  color: "#474646",
  fontSize: "37px",
  margin: "auto",
}));
const OtpText = styled("span")(({ theme }) => ({
  color: "#474646",
  fontSize: "20px",
  margin: "auto",
  textAlign: "center",
}));
const OtpNumber = styled("strong")(({ theme }) => ({
  fontSize: "20px",
  margin: "auto",
  textAlign: "center",
}));
const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const FlexBoxColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
}));

const SubmitBtn = styled(Button)(({ theme }) => ({
  paddingBlock: "12px",
  fontSize: "1.1rem",
  backgroundColor: "#0E5036",
  textTransform: "capitalize",
  marginBottom: "50px",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#098E6E",
  },
}));

function SectionEmail({ setIsLoadng }) {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [number, setnumber] = useState(null);
  const email = sessionStorage.getItem("email") || state;
  const handleLogin = async (values) => {
    try {
      setIsLoadng(true);
      const valuess = { number, email };

      const res = await axios.post(keys.api + "academia/verifyotp", valuess);
      console.log(res, "here");

      const data = res.data;
      console.log(data, res, "here");
      if (res.status === 200) {
        dispatch(
          setAlert({ status: "success", text: data?.result || "OTP Verified" })
        );
        dispatch(
          setAlert({ status: "success", text: "Next Step in progress" })
        );
        // navigate("/academia/login");
      } else {
        dispatch(
          setAlert({
            status: "error",
            text: data?.result || "Couldn't Send OTP!",
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
          text: data?.result || e?.message || "Couldn't Login!",
        })
      );
      console.log(e);
    }
  };
  return (
    <Container>
      <Grid
        rowGap={4}
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={11}>
          <FlexBoxColumn>
            <OtpHeadings variant="h4">OTP Verification</OtpHeadings>
            <OtpText>We have sent you a one time otp on this email.</OtpText>
            <OtpNumber>{email}</OtpNumber>
          </FlexBoxColumn>
        </Grid>
        <Grid item xs={11}>
          <InputsNumber setnumber={setnumber} number={number} />
        </Grid>
        <Grid item xs={11}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={9} sm={6}>
              <FlexBox>
                <SubmitBtn fullWidth variant="contained" onClick={handleLogin}>
                  Submit
                </SubmitBtn>
              </FlexBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SectionEmail;
