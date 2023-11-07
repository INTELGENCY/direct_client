import { Card, Grid, Typography, styled } from "@mui/material";
import TabsSection from "./TabsSection";
const Container = styled(Card)(({ theme }) => ({
  // marginTop: "2rem",
  padding: "2rem 1.5rem",
}));

const DividerOne = styled("div")(({ theme }) => ({
  width: "70px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
const LeftBorder = styled("div")(({ theme }) => ({
  width: "70%",
  border: "2px solid #3787FF",
  borderRadius: "17px",
}));
const RightBorder = styled("div")(({ theme }) => ({
  width: "20%",
  border: "2px solid #3787FF",
  borderRadius: "17px",
}));
function SectionOne({ data }) {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2">Overview</Typography>
          <DividerOne>
            <LeftBorder></LeftBorder>
            <RightBorder></RightBorder>
          </DividerOne>
          {/* <Dividers></Dividers> */}
        </Grid>
        <Grid item xs={12}>
          <TabsSection data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SectionOne;
