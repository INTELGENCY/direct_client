import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ModalMui from "../../../../../Common/ModalMui";
import { Delete, Edit, Publish } from "@mui/icons-material";
import { useState } from "react";
import SelectFields from "../../../../SelectFields";
import { motion } from "framer-motion";
import InputFields from "../../../../InputFields/InputFields";
import { useNavigate } from "react-router";
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1rem",
}));
const Contents = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1rem",
}));
const GridFlexItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: ".5rem",
}));
const GridBtn = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));
const TypographyMui = styled(Typography)(({ theme }) => ({
  display: "block",
}));
const Pstyled = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  // lineHeight: 1.6,
  fontWeight: "400",
}));
function CardMui() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false); 
  return (
    <Card sx={{ p: 2, maxWidth: "100%" }} elevation={4}>
      <Grid container gap={2}>
        <GridFlexItem item xs={12}>
          <Avatar variant="square" sx={{ borderRadius: "10px" }} />
          <TypographyMui
            noWrap
            maxWidth={"70%"}
            textOverflow={"ellipsis"}
            fontWeight={600}
            variant="h3"
          >
            Smart Ball Based Surveillance System using AI (BKV-1)
          </TypographyMui>
          <IconButton sx={{ marginLeft: "auto" }}>
            <Edit />
          </IconButton>
        </GridFlexItem>
        <Grid item xs={12}>
          <Pstyled variant="body1">
            Intelligence operations play a vital role in the national security
            of a country. Law enforcement forces rely on the intelligence
            reports to conduct operations for preventing terrorist activities.
            It is important that intelligence reports be accurate and timely.
            One of the main challenges faced by the law enforcement forces
            during Surveillance and Reconnaissance missions are the lack of
            infrastructure for communication and monitoring. Mostly these
            operations were conducted in remote areas, with no such facilities.
            Recognizing this need for law enforcement forces and also to address
            this challenge we proposed a wireless based multi camera imagery
            device for real-time capturing and transmission of imagery data to a
            nearly deployed Ad-hoc mobile base station. The proposed solution
            consists of a software and hardware pipeline for a throwable ball
            shaped imaging device, that would be able to capture the high
            resolution imagery data using multiple RGB cameras and transmit that
            data to a base-station. At base  station, the artificial
            intelligence algorithm will be applied to the imagery data for
            detecting the person of interest. Using throwable imagery devices
            for surveillance application will allow law enforcement forces to
            effectively locate, observe and engage a range of targets in their
            intelligence, surveillance and reconnaissance (ISR) mission
          </Pstyled>
        </Grid>
        <GridBtn item xs={12}>
          <Button
            onClick={handleOpenModal}
            startIcon={<Publish />}
            color="success"
            variant="contained"
          >
            Publish
          </Button>
          <Button startIcon={<Delete />} color="error" variant="outlined">
            Delete
          </Button>
        </GridBtn>
      </Grid>
      {openModal && (
        <ModalMui
          top={"25%"}
          left={"20%"}
          width={"60vw"}
          openModalMui={openModal}
          handleCloseModalMui={handleCloseModal}
          content={<ModalContent handleCloseModal={handleCloseModal} />}
        />
      )}
    </Card>
  );
}

export default CardMui;

const ModalContent = ({ handleCloseModal }) => {
  const navigate = useNavigate();
  const arraySelect = [
    "IT",
    "Robotics",
    "Manfacturer",
    "Mechanics",
    "Data Management",
  ];
  return (
    <Grid sx={{ overflow: "auto", height: "100%" }} container gap={2}>
      <Grid item sx={{ mb: 1 }} xs={12}>
        <Typography variant="h2">Category</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          You want to make this project classified or non classified?
        </Typography>
      </Grid>
      <Grid sx={{ mt: -2, mb: 2 }} item xs={12}>
        <Typography variant="body2">
          Classified means project will be only shared with management team and
          selected researchers and industry collaborator and it will not be
          visible to all the users of the web app. Where as, non-classified
          means project will be share with anyone in the website and it will be
          visible to all the users of the web app.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() =>
            navigate("/directportal/dashboard/publishrequirements")
          }
          fullWidth
          variant="contained"
        >
          Classified
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider textAlign="center">
          <Chip label={"OR"} />
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() =>
            navigate("/directportal/dashboard/publishrequirements")
          }
          fullWidth
          variant="outlined"
        >
          Non-Classified
        </Button>
      </Grid>
      <Grid item sx={{ mt: 2 }} xs={12}>
        <Stack
          gap={1}
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            onClick={handleCloseModal}
            sx={{
              backgroundColor: "bg.slightlyLightRed",
              "&:hover": {
                backgroundColor: "bg.normalRed",
              },
            }}
            variant="contained"
          >
            Cancel
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
