import { Grid, Typography, styled } from "@mui/material";
import SwiperGrid from "./SwiperGrid.jsx";
import SectionContainer from "../../../../Common/Containers/SectionContainer.jsx";

const GridItemPadd = styled(Grid)(({ theme }) => ({
  width: "100%",
  // paddingInline: "2rem",

  [theme.breakpoints.up("sm")]: {
    // paddingInline: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    // paddingInline: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    // paddingInline: "10rem",
  },
}));
const TechnologyGrid = () => {
  return (
    <SectionContainer>
      <Grid justifyContent={"center"} container>
        <Grid item>
          <Typography variant="h1" textAlign={"center"} marginBottom={"2rem"}>
            Technology Grid
          </Typography>
          <Typography
            variant="body1"
            textAlign={"center"}
            maxWidth={"600px"}
            marginBottom={"6rem"}
            paddingX={"1rem"}
          >
            {/* Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "} */}
          </Typography>
        </Grid>
        <GridItemPadd item>
          <SwiperGrid />
        </GridItemPadd>
      </Grid>
    </SectionContainer>
  );
};

export default TechnologyGrid;
