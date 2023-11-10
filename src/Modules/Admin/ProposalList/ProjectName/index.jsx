import { Share } from "@mui/icons-material";
import { Avatar, Card, Grid, Stack, Typography, styled } from "@mui/material";
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
function ProjectName() {
  return (
    // <Card sx={{ p: 2 }}>
    <Grid container>
      <Grid item xs={12}>
        <Stack width={"100%"} direction={"row"} gap={2}>
          <AvatarUpload variant="square" />
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
              Lorem ipsum dolor sit amet consectetur consectetur   ipsum dolor sit
              amet consectetur Lorem ipsum dolor sit amet consectetur Lorem
              ipsum dolor sit amet consectetur.
            </Typography>
            <Pstyled textAlign={"justify"} width={"85%"} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              dignissim sapien ut justo gravida maximus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aenean dignissim sapien ut
              justo gravida maximus. Quisque eget malesuada tellus. In hac
              habitasse platea dictumst. Aenean in finibus tortor. Aenean
              dignissim sapien ut justo gravida maximus. Quisque eget malesuada
              tellus. In hac habitasse platea dictumst. Aenean in finibus
              tortor.
            </Pstyled>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
    // </Card>
  );
}

export default ProjectName;
