import { Grid } from "@mui/material";
import SecOne from "./SecOne";
import SecTwo from "./SecTwo";

function SectionThree() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <SecOne/>
      </Grid>
      <Grid item xs={12}>
        <SecTwo/>
      </Grid>
    </Grid>
  );
}

export default SectionThree;
