import { Card, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AttachFile,
  Close,
  CloseOutlined,
  CommentSharp,
  Description,
} from "@mui/icons-material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import { columnsFiles } from "../../ProjectManagement/UploadedFiles/data";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import { customTheme } from "../../../../Theme/theme";
function ProposalFeedBack({ handleCloseModal }) {
  const rowsFiles = [
    {
      id: 1,
      fileName: "Detailed breakdown",
      size: "45KBs",
      upload: "Abdullah Asif",
      type: "pdf",
      date: "Nov 18, 2023",
      download: {
        type: "pdf",
        fileName: "Design & Development of a Smart Ball Based Surveil",
        content: "/pdf/Design & Development of a Smart Ball Based Surveil.pdf",
      },
    },
  ];

  return (
    <Grid container gap={2} sx={{ height: "100%", overflow: "auto" }}>
      <Grid item sx={{ mb: 3 }} xs={12}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography variant="h2">Feedback</Typography>
          </Stack>
          <IconButton onClick={handleCloseModal}>
            <CloseOutlined />
          </IconButton>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            m: 1,
            m: 0.5,
            boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
          }}
        >
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Description"}
              icons={<Description sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              The proposed spherical imaging system represents a cutting-edge
              solution designed to revolutionize surveillance and reconnaissance
              capabilities, particularly in challenging and inaccessible
              environments. The primary objective is to capture a panoramic 360⁰
              Field of View (FOV) using a throwable ball equipped with multiple
              cameras. This technology, inspired by successful models of
              Throwable Ball Cameras developed in the 2010s, aims to provide
              unparalleled situational awareness, especially in covert
              operations within modern battlefield scenarios. To overcome
              technical challenges, the proposal incorporates an Inertial Sensor
              Module (IMU) with accelerometers and gyroscopes, ensuring precise
              timing for dropping the ball to achieve optimal stability and
              motion-blur-free images. Additionally, the consideration of gyro
              stabilization or a gimbal for internal structure stabilization
              showcases a commitment to maintaining image quality. The
              complexity of capturing simultaneous images from multiple cameras
              is addressed with innovative solutions, exploring the use of a
              microprocessor with a multi-threaded application or FPGA for
              efficient communication. The proposed conceptual schematic
              outlines the functioning and transfer protocol of the panoramic
              image capturing system, providing a clear vision of the
              architecture. Wireless image transfer via Wi-Fi to an end device,
              acting as a TCP server, adds a layer of convenience for data
              retrieval. The proposed image stitching algorithm for creating a
              seamless 360⁰ view further enhances the system's user-friendly
              features. Notably, the proposal places a strong emphasis on power
              efficiency, recognizing the potential challenges posed by a high
              number of cameras. The mechanical design considerations are
              equally robust, aiming to create a compact, lightweight, rugged,
              shockproof, thermal, and water-resistant enclosure. The
              incorporation of infrared LEDs in cameras adds night vision
              capabilities, expanding the system's utility in various scenarios.
              The proposal draws on past experience, citing the successful
              development of a system involving Arducam and Node MCU, providing
              a benchmark for the current endeavor. This wealth of experience
              underscores the technical proficiency and capability of the team
              proposing the project. In conclusion, the proposed spherical
              imaging system offers a comprehensive and innovative solution to
              the challenges of surveillance and reconnaissance. With a focus on
              cutting-edge technology, user-friendly features, and robust design
              considerations, the proposal stands as a compelling initiative
              with the potential to significantly advance capabilities in the
              field.
            </Typography>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            m: 1,
            m: 0.5,
            boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
          }}
        >
          <IconsHeadings
            text="Attachments"
            icons={<AttachFile sx={{ color: "bg.darkBlue" }} />}
            paddingBottom={2}
          />
          <DataGrids dataRow={rowsFiles} dataColumn={columnsFiles} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProposalFeedBack;
