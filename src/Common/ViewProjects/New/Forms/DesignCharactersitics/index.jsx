import { Grid } from "@mui/material";
import React from "react";
import TypographyGrow from "../../../../AnimationMui/TypographyGrow";
import CardsOfCreateProjects from "../../../../Admin/CardsOfCreateProjects";
import {
  Air,
  DesignServices,
  DeveloperBoard,
  DeviceHub,
  EmojiTransportation,
  FireHydrantAlt,
  MilitaryTech,
  Settings,
} from "@mui/icons-material";
import { customTheme } from "../../../../../Theme/theme";
import PhysicalAspect from "./PhysicalAspect";
import TechPerformance from "./TechPerformance";
import Compatibility from "./Compatibility";
import Enviromental from "./Environmental";
import Specs from "./Specs";
import Logistics from "./Logistics";
import Firehazard from "./Firehazard";

function DesignCharactersitics({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={3}>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <TypographyGrow variant={"h1"} text={"Technical Information"} />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          helpOutline={`This focuses on dimensional properties such as size, weight, and other measurable attributes`}
          title={"Physical Specification"}
          icons={
            <DesignServices
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<PhysicalAspect />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          helpOutline={`Describe the technical specifications, capabilities, and expected performance of your proposed solution.`}
          title={"Tech/Performance Aspect"}
          icons={
            <Settings
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<TechPerformance />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          helpOutline={`Emphasize the ability of the proposed technology to seamlessly integrate with the existing military equipment/ infrastructure`}
          title={"Compatibility Aspect"}
          icons={
            <DeveloperBoard
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<Compatibility />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          title={"Enviromental Aspect"}
          helpOutline={`Explain how your project will be developed and implemented with environmental sustainability in mind. (temperature, humidity, terrain, etc.)`}
          icons={
            <Air
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<Enviromental />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          title={"Spec Of Product Conditions"}
          helpOutline={`Specify the desired capabilities and metrics of the product under various conditions. (Durability, Reliability, Maintainability and Serviceability)`}
          icons={
            <DeviceHub
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<Specs />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          title={"Logistics Aspect"}
          helpOutline={`Describe the logistical requirements for your proposed technology, including manufacturing, transportation, maintenance, and spare parts availability`}
          icons={
            <EmojiTransportation
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<Logistics />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <CardsOfCreateProjects
          title={"Fire Hazard Oblige System Safety"}
          helpOutline={`Describe how your project considers and mitigates potential fire hazards to ensure system safety and personnel protection`}
          icons={
            <FireHydrantAlt
              sx={{
                color: customTheme.palette.bg.darkBlue,
              }}
            />
          }
          content={<Firehazard />}
        />
      </Grid>
    </Grid>
  );
}

export default DesignCharactersitics;
