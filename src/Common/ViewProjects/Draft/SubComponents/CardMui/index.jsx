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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </TypographyMui>
          <IconButton sx={{ marginLeft: "auto" }}>
            <Edit />
          </IconButton>
        </GridFlexItem>
        <Grid item xs={12}>
          <Typography variant="body1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </Typography>
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
          means project will be share with anyone in the project and it will be
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
