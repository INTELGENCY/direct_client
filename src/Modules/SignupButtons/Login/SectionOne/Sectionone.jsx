import { Button, Grid, styled } from "@mui/material";
import LogoSmall from "/assets/logo.svg";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import LogoWrapper from "../../../../Common/Logo";
const ButtonBack = styled(Button)(({ theme }) => ({
  // color: theme.palette.bg.green,
  color: "#949494",
  marginTop: "-100px",
}));
function Sectionone() {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent={"center"} className={"signupSectionOne"}>
      <Grid item xs={11}>
        <ButtonBack
          onClick={() => navigate("/login")}
          startIcon={<ArrowBackRoundedIcon />}
        >
          Back to home
        </ButtonBack>
      </Grid>
      <Grid item xs={12} className={"itemOne"}>
        <LogoWrapper width={"100px"} height={"100px"} />
        <h1>Login to Academia</h1>
      </Grid>
      <Grid item xs={12} className={"itemTwo"}>
        <span>Became member ,you’ll get exclusive treatment</span>
      </Grid>
    </Grid>
  );
}

export default Sectionone;
