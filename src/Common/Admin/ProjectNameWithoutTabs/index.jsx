import { Share } from "@mui/icons-material";
import { Avatar, Card, Grid, Stack, Typography, styled } from "@mui/material";
import { dataProject } from "../../../utils/ProjectsData";
const AvatarUpload = styled(Avatar)(({ theme }) => ({
  width: "170px",
  height: "170px",
  borderRadius: "15px",
}));
const Pstyled = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  // lineHeight: 1.6,
  fontWeight: "400",
}));
function ProjectNameWithoutTabs() {
  console.log(dataProject, "dataProject");
  return (
    // <Card sx={{ p: 2 }}>
    <Grid container>
      <Grid item xs={12}>
        <Stack width={"100%"} direction={"row"} gap={2}>
          <AvatarUpload src={dataProject[0].image} variant="square" />
          <Stack
            width={"100%"}
            direction={"column"}
            justifyContent={"space-evenly"}
          >
            <Typography
              variant="h3"
              fontSize={"24px"}
              lineHeight={1.5}
              display={"block"}
              width={"80%"}
            >
              {dataProject[0].title}
            </Typography>
            <Pstyled textAlign={"justify"} width={"85%"} variant="body1">
              {dataProject[0].description}
            </Pstyled>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
    // </Card>
  );
}

export default ProjectNameWithoutTabs;
