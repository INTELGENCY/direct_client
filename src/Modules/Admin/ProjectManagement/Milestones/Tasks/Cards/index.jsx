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

function Cards() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ pt: 1 }}
          >
            <Typography variant="h5" fontWeight={600}>
              Task's name comes here
            </Typography>
            <Stack direction="column">
              <Chip
                color={"primary"}
                sx={{
                  backgroundColor: customTheme.palette.bg.parrotGreen,
                  color: "white",
                }}
                label={"Complete"}
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
              10
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Attachments:</Typography>
            <Typography variant="body2" fontWeight={600}>
              20
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Start Date:</Typography>
            <Typography variant="body2" fontWeight={500}>
              02/02/2002
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Due Date:</Typography>
            <Typography variant="body2" fontWeight={500}>
              02/02/2004
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography width={"100%"} noWrap variant="body2">
            Task's name comes here Task's name comes here Task's name comes here
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <ProgressMui value={24} />
        </Grid>
        <Grid item xs={12}>
          <Button
            component={motion.div}
            sx={{ textTransform: "capitalize", letterSpacing: 0.5 }}
            whileTap={{ scale: 0.9 }}
            variant="contained"
            size="small"
            onClick={handleOpenModal}
          >
            View
          </Button>
          <ModalMui
            width={"70vw"}
            height={"80vh"}
            top={"10%"}
            left={"15%"}
            openModalMui={openModal}
            handleCloseModalMui={handleCloseModal}
            content={<ModalContent handleCloseModal={handleCloseModal} />}
            noButtons
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;


