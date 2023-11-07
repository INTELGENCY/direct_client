import { Button, Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LogoWrapper from "../../../../Common/Logo";

function Sectionone() {
  const navigate = useNavigate();
  const ButtonBack = styled(Button)(({ theme }) => ({
    // color: theme.palette.bg.green,
    color: "#949494",
    marginTop: "-100px",
  }));
  return (
    <Grid container className={"signupSectionOne"}>
      <Grid item xs={12}>
        <ButtonBack
          onClick={() => navigate("/")}
          startIcon={<ArrowBackRoundedIcon />}
        >
          Back to home
        </ButtonBack>
      </Grid>
      <Grid item xs={12} className={"itemOne"}>
        <LogoWrapper width={"100px"} height={"100px"} />
        <h1>Create Academia</h1>
      </Grid>
      <Grid item xs={12} className={"itemTwo"}>
        <span>Became member ,you’ll get exclusive treatment</span>
      </Grid>
    </Grid>
  );
}

export default Sectionone;
