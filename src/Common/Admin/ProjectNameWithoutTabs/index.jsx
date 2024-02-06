import { Share } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { dataProject } from "../../../utils/ProjectsData";
import { motion } from "framer-motion";
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
const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.bg.darkBlue,
  "&:hover": {
    backgroundColor: theme.palette.bg.secondDarkBlue,
  },
}));
function ProjectNameWithoutTabs(prop) {
  const ButtonVariants = {
    initial: {
      opacity: 0,
      y: 30,
      // scale: 0.9,
    },
    final: {
      opacity: 1,
      y: 0,
      // scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 200 },
      // transition: { delay: 1, duration: .5 },
    },
  };
  console.log(prop.dataProject, "dataProject");
  return (
    // <Card sx={{ p: 2 }}>
    <Grid container>
      <Grid item xs={12}>
        <Stack width={"100%"} direction={"row"} gap={2}>
          <AvatarUpload
            src={
              prop.dataProject ? prop.dataProject.image : dataProject[0]?.image
            }
            variant="square"
          />
          <Stack
            width={"100%"}
            direction={"column"}
            justifyContent={"space-evenly"}
            alignItems={"flex-start"}
          >
            <Typography
              variant="h3"
              fontSize={"24px"}
              lineHeight={1.5}
              display={"block"}
              width={"80%"}
            >
              {prop.dataProject ? prop.dataProject.title : dataProject[0].title}
            </Typography>
            <Pstyled textAlign={"justify"} width={"85%"} variant="body1">
              {prop.dataProject?.description ? prop.dataProject?.description : dataProject[0].description}
            </Pstyled>
            <ButtonStyled
              component={motion.button}
              variants={ButtonVariants}
              initial={"initial"}
              animate={"final"}
              variant="contained"
            >
              View More
            </ButtonStyled>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
    // </Card>
  );
}

export default ProjectNameWithoutTabs;
