import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

function Sectiontwo({ isLogin }) {
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

  return (
    <Grid rowGap={4} container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={7}>
        <Industrybtn
          fullWidth
          component={Link}
          to={`${isLogin ? "/industry/login" : "/industry/signup"}`}
        >
          Industry
        </Industrybtn>
      </Grid>
      <Grid item xs={7}>
        <Academiabtn
          fullWidth
          component={Link}
          to={`${isLogin ? "/academia/login" : "/academia/signup"}`}
        >
          Academia
        </Academiabtn>
      </Grid>
    </Grid>
  );
}

export default Sectiontwo;
