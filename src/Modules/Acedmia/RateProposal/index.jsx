import {
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import { Description } from "@mui/icons-material";
import DisplayUploadedFiles from "../../../Common/DisplayUploadedFiles";
import MilesStonesAdmin from "../../Admin/ViewProposals/MilesStonesAdmin";
import { useState } from "react";
import RatingMui from "../../../Common/RatingMui";
import ModalMui from "../../../Common/ModalMui";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Editor from "../../../Common/Editor";
import ProjectName from "../../../Common/ProjectName";

function RateProposal() {
  const [value, setValue] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <Grid container sx={{ pt: 6, pb: 2, pl: 2, pr: 2 }} gap={4}>
      <Grid item xs={12}>
        <MainHeadings text={"View/Rate Proposal"} />
      </Grid>
      {/* <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Objectives"}
              icons={<Language sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid> */}
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Description"}
                icons={<Description sx={{ color: "#252B42" }} />}
              />
              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              The proposed project involves the development of a throwable
              ball-shaped imaging system for capturing motion-blur-free,
              panoramic images in areas that are difficult to access. The system
              incorporates an Inertial Sensor Module (IMU) with accelerometers
              and gyroscopes to identify the optimal time for the ball to be
              dropped, ensuring stable equilibrium during image capture. The
              technology aims to enhance situational awareness in scenarios such
              as covert operations on the modern battlefield. The core
              components include a spherical imaging system with a 360⁰ Field of
              View (FOV), achieved by employing multiple open-source cameras
              like Arducam, OV7670, OV2640, or high-end industrial cameras such
              as uEye+ iDS, GmbH, Germany. The challenge lies in camera
              selection based on specifications like resolution, aperture, frame
              rate, shutter speed, and transfer speed. Mechanical stabilization,
              using gyro stabilization or gimbal, is proposed to minimize
              movement inside the rotating ball. To address the simultaneous
              image capture challenge, the proposal suggests using a
              microprocessor with a multi-threaded application or an FPGA for a
              customized hardware solution. The conceptual schematic outlines
              the functioning and transfer protocol of the 360-degree panoramic
              image capturing system. Images captured by the cameras will be
              transferred to an end device (PC or smartphone) via Wi-Fi over a
              TCP connection. The ball will act as a TCP server, creating an
              access point for the host device. Power efficiency is a critical
              consideration due to the significant number of cameras, and the
              project will develop an image stitching algorithm to create a
              seamless 360⁰ view. The software challenge includes creating an
              immersive 360⁰ view on smartphones. The project also highlights
              the need for a compact, lightweight, rugged, shockproof, thermal,
              and water-resistant mechanical enclosure. Night vision
              capabilities, using infrared LEDs, are considered, building on
              past experience with a similar system containing Arducam connected
              to a Node MCU.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      {/* <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Expected Outcomes"}
              icons={<Equalizer sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid> */}
      {/* <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Methodologies"}
              icons={<CloudUpload sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
        </Paper>
      </Grid> */}
      <Grid item xs={12}>
        <MilesStonesAdmin ratingAdd />
      </Grid>
      <Grid item xs={12}>
        <DisplayUploadedFiles ratingAdd />
      </Grid>
      {/* <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Grid container gap={2} sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <IconsHeadings
                text={"Accept Proposal"}
                icons={<Approval sx={{ color: "#252B42" }} />}
              />
            </Grid>
            {arrayFiles.map((e, i) => (
              <Grid item xs={12}>
                <FilesComp arrayFiles={e} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button onClick={handleClickOpen} variant="contained">
                Accept
              </Button>
            </Grid>
            <DialogMui
              title={"Proposal Accepted!!!"}
              BodyText={
                "I’m thrilled to share that our proposal has been accepted! This is a significant step forward for us. Thank you all for your hard work and contributions to making this happen. Let’s move ahead together and create something incredible."
              }
              handleClose={handleClose}
              open={DialogState}
            />
          </Grid>
        </Paper> */}
      {/* </Grid> */}
      <Grid item xs={12}>
        <Button onClick={handleOpenModal} variant="contained">
          Save
        </Button>
      </Grid>
      {openModal && (
        <ModalMui
          top={"5%"}
          left={"20%"}
          height={"70vh"}
          width={"60vw"}
          openModalMui={openModal}
          handleCloseModalMui={handleCloseModal}
          content={<ModalContent handleCloseModal={handleCloseModal} />}
        />
      )}
    </Grid>
  );
}

export default RateProposal;

const ModalContent = ({ handleCloseModal }) => {
  const navigate = useNavigate();

  return (
    <Grid sx={{ overflow: "auto", height: "100%", pt:1, pl:1, pr:1 }} container gap={2}>
      {/* <Grid item xs={12}>
        <ProjectName />
      </Grid> */}
      <Grid item sx={{ mb: 1 }} xs={12}>
        <Typography variant="h2">Review</Typography>
      </Grid>
      <Grid item sx={{ mb: 1 }} xs={12}>
        <Typography variant="body1" fontWeight={600}>
          Review
        </Typography>
      </Grid>
      <Grid sx={{ mt: -2, mb: 2 }} item xs={12}>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
      </Grid>
      <Grid item sx={{ mb: 1 }} xs={12}>
        <Typography variant="body1" fontWeight={600}>
          Description
        </Typography>
      </Grid>
      <Grid sx={{ mt: -2, mb: 2 }} item xs={12}>
        <Editor />
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
          <Button
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              handleCloseModal();
              navigate("/academia/proposallists");
            }}
            variant="contained"
          >
            Save
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
