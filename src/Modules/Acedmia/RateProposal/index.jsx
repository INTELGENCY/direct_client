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
import {
  Analytics,
  BugReport,
  Build,
  Description,
  Equalizer,
  Language,
  Start,
} from "@mui/icons-material";
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
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Introduction"}
                icons={<Start sx={{ color: "#252B42" }} />}
              />
              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              The proposed solution consists of a software and hardware pipeline
              for a throwable ball shaped imaging device, that would be able to
              capture the high resolution imagery data using multiple RGB
              cameras and transmit that data to a base-station. At basestation,
              the artificial intelligence algorithm will be applied to the
              imagery data for detecting the person of interest. Using throwable
              imagery devices for surveillance application will allow law
              enforcement forces to effectively locate, observe and engage a
              range of targets in their intelligence, surveillance and
              reconnaissance (ISR) missions.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Objectives"}
                icons={<Language sx={{ color: "#252B42" }} />}
              />
              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              The primary objectives of the National Project Collaboration
              Platform are to foster innovation, collaboration, and impactful
              contributions to national-level projects. The platform aims to
              connect skilled individuals and teams with project creators,
              facilitating the seamless exchange of ideas and expertise. It
              strives to provide a centralized space for project posting,
              application, and collaboration, with a focus on enhancing
              efficiency, transparency, and the overall success of national
              projects.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
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
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Methodologies"}
                icons={<Equalizer sx={{ color: "#252B42" }} />}
              />

              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              The platform employs agile methodologies to ensure adaptability
              and responsiveness to evolving project needs. Projects are divided
              into manageable milestones, promoting incremental progress and
              effective collaboration. The use of modern project management
              tools and communication platforms enhances coordination among
              project stakeholders. Additionally, an iterative development
              approach allows for continuous improvement based on user feedback
              and evolving project requirements.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Testing Specifications"}
                icons={<BugReport sx={{ color: "#252B42" }} />}
              />
              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              Stringent testing protocols are implemented to ensure the
              reliability and security of the platform. Rigorous unit testing,
              integration testing, and user acceptance testing are conducted to
              identify and rectify potential issues. Security measures include
              encryption protocols, secure data storage, and vulnerability
              assessments. Performance testing is employed to guarantee optimal
              responsiveness and scalability as the platform grows to
              accommodate a diverse range of national projects.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Risk Analysis"}
                icons={<Analytics sx={{ color: "#252B42" }} />}
              />
              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              A comprehensive risk analysis is undertaken to identify, assess,
              and mitigate potential challenges that may arise during the
              project lifecycle. Risks related to data security, scalability,
              and user engagement are systematically evaluated. Mitigation
              strategies are implemented to address identified risks, and
              contingency plans are developed to minimize the impact of
              unforeseen events. Regular risk assessments are conducted to adapt
              to the evolving landscape and ensure the platform's resilience.
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <IconsHeadings
                text={"Instrumental Requirements"}
                icons={<Build sx={{ color: "#252B42" }} />}
              />
              <RatingMui />
            </Stack>
            <Typography textAlign={"justify"} variant="body1">
              The platform's instrumental requirements encompass a robust and
              scalable infrastructure to support concurrent users and diverse
              project types. Secure authentication mechanisms, data storage
              solutions, and real-time communication tools are integral
              components. Additionally, the platform incorporates user-friendly
              interfaces, ensuring accessibility for individuals with varying
              technical backgrounds. Compatibility with multiple devices and
              browsers enhances the user experience, promoting widespread
              participation.
            </Typography>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <MilesStonesAdmin ratingAdd />
      </Grid>
      <Grid item xs={12}>
        <DisplayUploadedFiles ratingAdd />
      </Grid>

      <Grid item xs={12}>
        <Button onClick={handleOpenModal} variant="contained">
          Save
        </Button>
      </Grid>
      {openModal && (
        <ModalMui
          top={"10%"}
          left={"15%"}
          height={"75vh"}
          width={"70vw"}
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
    <Grid
      sx={{ overflow: "auto", height: "100%", pt: 1, pl: 1, pr: 1 }}
      container
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      gap={2}
    >
      <Grid item sx={{ mb: 1 }} xs={12}>
        <Typography textAlign={'center'} variant="h2">Proposal Feedback</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider></Divider>
      </Grid>
      <Grid item sx={{ mb: 1 }} xs={12}>
        <Typography variant="body1" fontWeight={600}>
          Rating
        </Typography>
      </Grid>
      <Grid sx={{ mt: -2, mb: 2 }} item xs={12}>
        <Stack alignItems={"center"} direction={"row"} gap={1}>
          <Rating
            name="half-rating-read"
            defaultValue={4.2}
            precision={0.1}
            readOnly
          />
          <Typography fontWeight={600} color={"text.grey"} variant="body2">
            (4.2)
          </Typography>
        </Stack>
      </Grid>
      <Grid item sx={{ mb: 0 }} xs={12}>
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
