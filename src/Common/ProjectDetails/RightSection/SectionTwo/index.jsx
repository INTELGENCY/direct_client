import { Button, Divider, Grid, Typography, styled } from "@mui/material";
import Accordions from "./Accordions";
const LastGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));
const Dividers = styled("div")(({ theme }) => ({
  width: "70px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
const LeftBorder = styled("div")(({ theme }) => ({
  width: "70%",
  border: "2px solid #3787FF",
  borderRadius: "7px",
}));
const RightBorder = styled("div")(({ theme }) => ({
  width: "20%",
  border: "2px solid #3787FF",
  borderRadius: "17px",
}));
function SectionTwo() {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <Typography variant="h2">FAQ's</Typography>
        <Dividers>
          <LeftBorder></LeftBorder>
          <RightBorder></RightBorder>
        </Dividers>
      </Grid>
      <Grid item xs={12}>
        <Accordions />
      </Grid>
      <LastGrid item xs={12}>
        <Button variant="outlined">View All</Button>
      </LastGrid>
    </Grid>
  );
}

export default SectionTwo;
