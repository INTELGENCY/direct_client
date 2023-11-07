import { Grid, Stack, Typography, styled } from "@mui/material";
import imag1 from "/assets/missionvision/before.svg";
import imag2 from "/assets/missionvision/after.svg";
import mission from "/assets/missionvision/mission.svg";
import vision from "/assets/missionvision/vision.svg";
import SectionContainer from "../../../../Common/Containers/SectionContainer";
const StackStyled = styled(Stack)(({ theme }) => {
  return {
    position: "relative",
  };
});
const ImageoneStyled = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
  };
});
const ImagetwoStyled = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  };
});
const ImageStyled = styled("img")(({ theme }) => {
  return {
    width: 280,
    height: 280,
  };
});
const MissionAndVision = () => {
  return (
    <SectionContainer>
      <ImageoneStyled alt="design" src={imag1} />
      <ImagetwoStyled alt="design" src={imag2} />
      <StackStyled justifyContent={"center"} alignItems={"center"}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h1" textAlign={"center"} my={3}>
              CORE VALUES
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={8}>
            <Grid
              container
              xs={12}
              lg={10}
              xl={8}
              margin={"auto"}
              rowGap={5}
              justifyContent={"space-between"}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Stack alignItems={"center"} gap={3}>
                  <ImageStyled alt="design" src={mission} />
                  <Typography variant="h2">OUR MISSION</Typography>
                  <Typography
                    variant="body2"
                    maxWidth={400}
                    textAlign={"center"}
                    textTransform={"capitalize"}
                  >
                    Advancing National Defense Capabilities promoting innovation
                    and fostering collaboration between academia and the defense
                    sector
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Stack alignItems={"center"} gap={3}>
                  <ImageStyled alt="design" src={vision} />
                  <Typography variant="h2">OUR Vision</Typography>
                  <Typography
                    variant="body2"
                    maxWidth={400}
                    textAlign={"center"}
                    textTransform={"capitalize"}
                  >
                    Pioneering Excellence in Defense Innovation and National
                    Security
                  </Typography>
                </Stack>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StackStyled>
    </SectionContainer>
  );
};

export default MissionAndVision;
