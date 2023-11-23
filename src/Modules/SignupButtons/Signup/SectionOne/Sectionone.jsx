import { Button, Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LogoWrapper from "../../../../Common/Logo";
import { useLocation } from "react-router-dom";

function SignupSectionTop() {
  const navigate = useNavigate();
  const ButtonBack = styled(Button)(({ theme }) => ({
    color: "#949494",
    marginTop: "-100px",
  }));
  const { pathname } = useLocation();
  const name = pathname.includes("academia") ? "Academia" : "Industry";
  return (
    <Grid container className={"signupSectionOne"}>
      <Grid item xs={12}>
        <ButtonBack
          onClick={() => navigate("/signup")}
          startIcon={<ArrowBackRoundedIcon />}
        >
          Back to home
        </ButtonBack>
      </Grid>
      <Grid item xs={12} className={"itemOne"}>
        <LogoWrapper width={"100px"} height={"100px"} />
        <h1>Create {name}</h1>
      </Grid>
      <Grid item xs={12} className={"itemTwo"}>
        <span>Became member ,you’ll get exclusive treatment</span>
      </Grid>
    </Grid>
  );
}

export default Sectionone;
