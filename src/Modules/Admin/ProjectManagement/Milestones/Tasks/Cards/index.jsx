import {
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { customTheme } from "../../../../../../Theme/theme";
import ProgressMui from "../../../../../../Common/ProgressMui";
import { motion } from "framer-motion";
import ModalMui from "../../../../../../Common/ModalMui";
import { useState } from "react";
import ModalContent from "./ModalContent";
import { useNavigate } from "react-router-dom";

function Cards({ dataCard, index }) {
  console.log(dataCard);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <Card
      sx={{
        p: 2,
        ml: 1,
        mr: 1,
        boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
            sx={{ pt: 1 }}
          >
            <Typography
              sx={{ width: "80%" }}
              noWrap
              variant="h5"
              fontWeight={600}
            >
              {dataCard.title}
            </Typography>
            <Stack direction="column">
              <Chip
                color={"primary"}
                sx={{
                  backgroundColor:
                    dataCard.statusColor === "blue"
                      ? customTheme.palette.bg.lightPurple
                      : "customTheme.palette.bg.blue",
                  color: "white",
                }}
                label={dataCard.status}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Task No.</Typography>
            <Typography variant="body2" fontWeight={600}>
              {index + 1}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Attachments:</Typography>
            <Typography variant="body2" fontWeight={600}>
              0
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Start Date:</Typography>
            <Typography variant="body2" fontWeight={500}>
              {dataCard.startDate}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Due Date:</Typography>
            <Typography variant="body2" fontWeight={500}>
              {dataCard.endDate}
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography width={"100%"} noWrap variant="body2">
            Task's name comes here Task's name comes here Task's name comes here
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <ProgressMui value={dataCard.progress} />
        </Grid>
        <Grid item xs={12}>
          <Button
            component={motion.div}
            sx={{ textTransform: "capitalize", letterSpacing: 0.5 }}
            whileTap={{ scale: 0.9 }}
            variant="contained"
            size="small"
            // onClick={handleOpenModal}
            onClick={() =>
              navigate(`/directportal/dashboard/milestone/` + dataCard.id)
            }
          >
            View
          </Button>
          {openModal && (
            <ModalMui
              width={"70vw"}
              height={"80vh"}
              top={"10%"}
              left={"15%"}
              openModalMui={openModal}
              handleCloseModalMui={handleCloseModal}
              content={
                <ModalContent
                  dataCard={dataCard}
                  handleCloseModal={handleCloseModal}
                />
              }
              noButtons
            />
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;
