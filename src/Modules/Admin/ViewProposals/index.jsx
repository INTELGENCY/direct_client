import { Grid, Paper, Stack, Typography } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import DisplayUploadedFiles from "../../../Common/DisplayUploadedFiles";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import {
  AccountBalance,
  Analytics,
  BugReport,
  Build,
  Description,
  Equalizer,
  Language,
  Start,
} from "@mui/icons-material";
import MilesStonesAdmin from "./MilesStonesAdmin";
import { useState } from "react";
import { useParams } from "react-router-dom";
function ViewProposals() {
  const { id: ParamsId } = useParams();
  const [DialogState, setDialogState] = useState(false);
  const handleClickOpen = () => {
    setDialogState(true);
  };

  const handleClose = () => {
    setDialogState(false);
  };
  const FinancialProposalsArray = [
    {
      label: "HR Costs",
      value: "234,000",
    },

    {
      label: "Materials",
      value: "234,500",
    },
    {
      label: "Infrastructure",
      value: "523,000",
    },
    {
      label: "Estimated Tax",
      value: "400,500",
    },
    {
      label: "Total Budget",
      value: "1,000,000",
    },
    // {
    //   title: "Personal Costs",
    //   children: [
    //     {
    //       label: "HR Costs",
    //       value: "234,000",
    //     },
    //   ],
    // },
    // {
    //   title: "Material and Equipment Cost",
    //   children: [
    //     {
    //       label: "Materials",
    //       value: "234,500",
    //     },
    //     {
    //       label: "Infrastructure",
    //       value: "523,000",
    //     },
    //     {
    //       label: "Estimated Tax",
    //       value: "400,500",
    //     },
    //   ],
    // },
    // {
    //   title: "Total Budget",
    //   value: "1,000,000",
    // },
  ];
  return (
    <Grid container sx={{ pt: 6, pb: 2, pl: 2, pr: 2 }} gap={4}>
      <Grid item xs={12}>
        <MainHeadings text={"Proposal-Cloud Migration"} />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Introduction"}
              icons={<Start sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              {ParamsId == 90785644
                ? `The proposed project aims to add flail mechanism to a turretless Tk Al-Zarrar giving it the mine clearance capability. The project involves the removal of the turret, the installation of an auxiliary power source (Perkins 1103A-33G engine) in the turret area, and the integration of a hydraulic system to power the flail assembly. The project's feasibility study indicates that this approach overcomes space constraints in the engine bay, ensuring the successful addition of the hydraulic pump and the subsequent completion of the flail system.`
                : `The proposed solution consists of a software and hardware pipeline
              for a throwable ball shaped imaging device, that would be able to
              capture the high resolution imagery data using multiple RGB
              cameras and transmit that data to a base-station. At basestation,
              the artificial intelligence algorithm will be applied to the
              imagery data for detecting the person of interest. Using throwable
              imagery devices for surveillance application will allow law
              enforcement forces to effectively locate, observe and engage a
              range of targets in their intelligence, surveillance and
              reconnaissance (ISR) missions.`}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Objectives"}
              icons={<Language sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              {ParamsId == 90785644
                ? `The project seeks to augment the mine clearance capabilities of the turretless Tk Al-Zarrar by introducing a flail mechanism. To achieve this, the initial step involves the removal of the vehicle's turret, creating space for the integration of the flail system. The project further entails the installation of an auxiliary power source, specifically the Perkins 1103A-33G engine, in the vacated turret area. This engine serves as the primary power provider for the flail mechanism. Additionally, a hydraulic system is integrated into the vehicle to drive the flail assembly, with careful consideration given to overcoming space constraints in the engine bay. The project's feasibility study has highlighted the effectiveness of this approach, indicating that it successfully addresses spatial limitations and allows for the seamless addition of the hydraulic pump. The ultimate objectives include optimizing space in the engine bay, confirming the feasibility study's findings through practical implementation, and ensuring the successful completion of the flail system. The project aims to enhance the Tk Al-Zarrar's operational versatility by providing it with an efficient and reliable mine clearance capability.`
                : `The primary objectives of the National Project Collaboration
              Platform are to foster innovation, collaboration, and impactful
              contributions to national-level projects. The platform aims to
              connect skilled individuals and teams with project creators,
              facilitating the seamless exchange of ideas and expertise. It
              strives to provide a centralized space for project posting,
              application, and collaboration, with a focus on enhancing
              efficiency, transparency, and the overall success of national
              projects.`}
            </Typography>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Methodologies"}
              icons={<Equalizer sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              {ParamsId == 90785644
                ? `The NUST College of Electrical and Mechanical Engineering (NCRA) team will design the flail assembly, ensuring weight distribution and compatibility with the tank's structure.
The feasibility study conducted earlier has confirmed the suitability of the proposed design, and the turret removal will provide the ability to add 13 tons of additional load. Based on current analysis, the selected auxiliary engine, the Perkins 1103A-33G, with its power output and compact size, will be installed in the turret area, providing the required power to drive the hydraulic pump. •	A custom coupling will connect the Perkins engine to the hydraulic pump, ensuring efficient power transfer.
The hydraulic pump will drive the hydraulic motor, which will rotate the flail assembly at a controlled speed of 300-400 rpm.
The removal of the turret reduces the tank's load by approximately 13 tons, exceeding the estimated 5-ton weight of the add-on system, resulting in a net reduction of around 8 tons in the tank's load.
The weight distribution, stability, and center of gravity will be carefully analyzed and detailed in the design report to ensure the modified tank remains stable during operation.	Industrial partner, M/S Tech Valley, will be selected to fabricate the flail assembly and related components on a turnkey basis, adhering to military-grade standards.

`
                : `The platform employs agile methodologies to ensure adaptability
              and responsiveness to evolving project needs. Projects are divided
              into manageable milestones, promoting incremental progress and
              effective collaboration. The use of modern project management
              tools and communication platforms enhances coordination among
              project stakeholders. Additionally, an iterative development
              approach allows for continuous improvement based on user feedback
              and evolving project requirements.`}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      {ParamsId == 90785643 && (
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction={"column"} gap={2}>
              <IconsHeadings
                text={"Testing"}
                icons={<BugReport sx={{ color: "#252B42" }} />}
              />
              <Typography textAlign={"justify"} variant="body1">
                Stringent testing protocols are implemented to ensure the
                reliability and security of the platform. Rigorous unit testing,
                integration testing, and user acceptance testing are conducted
                to identify and rectify potential issues. Security measures
                include encryption protocols, secure data storage, and
                vulnerability assessments. Performance testing is employed to
                guarantee optimal responsiveness and scalability as the platform
                grows to accommodate a diverse range of national projects.
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      )}
      {ParamsId == 90785643 && (
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction={"column"} gap={2}>
              <IconsHeadings
                text={"Specifications"}
                icons={<Description sx={{ color: "#252B42" }} />}
              />
              <Typography textAlign={"justify"} variant="body1">
                The proposed project involves the development of a throwable
                ball-shaped imaging system for capturing motion-blur-free,
                panoramic images in areas that are difficult to access. The
                system incorporates an Inertial Sensor Module (IMU) with
                accelerometers and gyroscopes to identify the optimal time for
                the ball to be dropped, ensuring stable equilibrium during image
                capture. The technology aims to enhance situational awareness in
                scenarios such as covert operations on the modern battlefield.
                The core components include a spherical imaging system with a
                360⁰ Field of View (FOV), achieved by employing multiple
                open-source cameras like Arducam, OV7670, OV2640, or high-end
                industrial cameras such as uEye+ iDS, GmbH, Germany. The
                challenge lies in camera selection based on specifications like
                resolution, aperture, frame rate, shutter speed, and transfer
                speed. Mechanical stabilization, using gyro stabilization or
                gimbal, is proposed to minimize movement inside the rotating
                ball. To address the simultaneous image capture challenge, the
                proposal suggests using a microprocessor with a multi-threaded
                application or an FPGA for a customized hardware solution. The
                conceptual schematic outlines the functioning and transfer
                protocol of the 360-degree panoramic image capturing system.
                Images captured by the cameras will be transferred to an end
                device (PC or smartphone) via Wi-Fi over a TCP connection. The
                ball will act as a TCP server, creating an access point for the
                host device. Power efficiency is a critical consideration due to
                the significant number of cameras, and the project will develop
                an image stitching algorithm to create a seamless 360⁰ view. The
                software challenge includes creating an immersive 360⁰ view on
                smartphones. The project also highlights the need for a compact,
                lightweight, rugged, shockproof, thermal, and water-resistant
                mechanical enclosure. Night vision capabilities, using infrared
                LEDs, are considered, building on past experience with a similar
                system containing Arducam connected to a Node MCU.
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      )}
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Risk Analysis"}
              icons={<Analytics sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              {ParamsId == 90785644
                ? `The flail will be effective against pressure operated mines but not effective against other types (Smart mines, magnetic, etc). The ability of system to go across cross-country/ ditches, etc will be dependent on the capability of the Tank. The same applies for armoring of tank itself. `
                : `A comprehensive risk analysis is undertaken to identify, assess,
              and mitigate potential challenges that may arise during the
              project lifecycle. Risks related to data security, scalability,
              and user engagement are systematically evaluated. Mitigation
              strategies are implemented to address identified risks, and
              contingency plans are developed to minimize the impact of
              unforeseen events. Regular risk assessments are conducted to adapt
              to the evolving landscape and ensure the platform's resilience.`}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      {ParamsId == 90785643 && (
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction={"column"} gap={2}>
              <IconsHeadings
                text={"HR Requirements"}
                icons={<Description sx={{ color: "#252B42" }} />}
              />
              <Typography textAlign={"justify"} variant="body1">
                The proposed project involves the development of a throwable
                ball-shaped imaging system for capturing motion-blur-free,
                panoramic images in areas that are difficult to access. The
                system incorporates an Inertial Sensor Module (IMU) with
                accelerometers and gyroscopes to identify the optimal time for
                the ball to be dropped, ensuring stable equilibrium during image
                capture. The technology aims to enhance situational awareness in
                scenarios such as covert operations on the modern battlefield.
                The core components include a spherical imaging system with a
                360⁰ Field of View (FOV), achieved by employing multiple
                open-source cameras like Arducam, OV7670, OV2640, or high-end
                industrial cameras such as uEye+ iDS, GmbH, Germany. The
                challenge lies in camera selection based on specifications like
                resolution, aperture, frame rate, shutter speed, and transfer
                speed. Mechanical stabilization, using gyro stabilization or
                gimbal, is proposed to minimize movement inside the rotating
                ball. To address the simultaneous image capture challenge, the
                proposal suggests using a microprocessor with a multi-threaded
                application or an FPGA for a customized hardware solution. The
                conceptual schematic outlines the functioning and transfer
                protocol of the 360-degree panoramic image capturing system.
                Images captured by the cameras will be transferred to an end
                device (PC or smartphone) via Wi-Fi over a TCP connection. The
                ball will act as a TCP server, creating an access point for the
                host device. Power efficiency is a critical consideration due to
                the significant number of cameras, and the project will develop
                an image stitching algorithm to create a seamless 360⁰ view. The
                software challenge includes creating an immersive 360⁰ view on
                smartphones. The project also highlights the need for a compact,
                lightweight, rugged, shockproof, thermal, and water-resistant
                mechanical enclosure. Night vision capabilities, using infrared
                LEDs, are considered, building on past experience with a similar
                system containing Arducam connected to a Node MCU.
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      )}
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Instrumental Requirements"}
              icons={<Build sx={{ color: "#252B42" }} />}
            />
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
        <MilesStonesAdmin />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Financial Proposal"}
              icons={<AccountBalance sx={{ color: "#252B42" }} />}
            />
            <Grid container sx={{ mt: 2 }} rowGap={2}>
              {FinancialProposalsArray.map((e) => (
                <Grid item xs={3}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Typography variant="h6" fontWeight={500}>
                      {e.label}:
                    </Typography>
                    <Typography variant="body2">{e.value}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <DisplayUploadedFiles />
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
    </Grid>
  );
}

export default ViewProposals;
