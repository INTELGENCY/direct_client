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
          title={"Physical Aspect"}
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
          title={"Fire Hazard"}
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
