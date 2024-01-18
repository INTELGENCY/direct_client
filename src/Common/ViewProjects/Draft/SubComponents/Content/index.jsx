import { Grid } from "@mui/material";
import CardMui from "../CardMui";

function Content() {
  return (
    <Grid container rowGap={4} justifyContent={"space-between"} alignContent={"center"} sx={{ width: "100%", pt: 4 }}>
      <Grid item xs={12} md={12} lg={5.9}>
        <CardMui />
      </Grid>
    </Grid>
  );
}

export default Content;
