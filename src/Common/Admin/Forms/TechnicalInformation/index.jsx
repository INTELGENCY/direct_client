import { Grid } from "@mui/material";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import CardsOfCreateProjects from "../../CardsOfCreateProjects";
import { Air, DesignServices, DeveloperBoard, DeviceHub, EmojiTransportation, FireHydrantAlt, Settings } from "@mui/icons-material";
import Editor from "../../../Editor";
import { customTheme } from "../../../../Theme/theme";

function TechnicalInformation() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={3}>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <TypographyGrow variant={"h2"} text={"Technical Information"} />
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
          content={<Editor />}
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
          content={<Editor />}
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
          content={<Editor />}
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
          content={<Editor />}
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
          content={<Editor />}
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
          content={<Editor />}
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
          content={<Editor />}
        />
      </Grid>
    </Grid>
  );
}

export default TechnicalInformation