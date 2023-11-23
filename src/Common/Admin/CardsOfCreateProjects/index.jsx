import { Card, Grid } from "@mui/material";
import IconsHeadings from "../../AnimationMui/IconHeadings";
import { customTheme } from "../../../Theme/theme";

function CardsOfCreateProjects({ title, icons, content }) {
  return (
    <Card
      sx={{ p: 2, boxShadow: customTheme.palette.boxShadows.boxShadowTable }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <IconsHeadings text={title} icons={icons} />
        </Grid>
        <Grid item xs={12}>
          {content}
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardsOfCreateProjects;
