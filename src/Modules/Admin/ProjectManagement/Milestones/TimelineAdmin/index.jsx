import { Card, Grid } from "@mui/material";
import { customTheme } from "../../../../../Theme/theme";
import TimeLines from "./TimeLines";

function TimelineAdmin() {
  customTheme;
  return (
    <Card sx={{ boxShadow: customTheme.palette.boxShadows.boxShadowTable }}>
      <Grid container>
        <Grid item xs={12}>
          <TimeLines />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TimelineAdmin;
