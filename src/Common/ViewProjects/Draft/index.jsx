import { Grid } from "@mui/material";
import TabsMui from "./SubComponents/TabsMui";
import Content from "./SubComponents/Content";
import InputFields from "../../InputFields/InputFields";
import Filters from "./SubComponents/Filters";
// import Box from "./Box";

function Draft() {
  return (
    <Grid container sx={{ minWidth: "100%" }}>
      {/* <Grid item xs={12}>
        <TabsMui />
      </Grid> */}
      <Grid item xs={12}>
        <Filters  />
      </Grid>
      <Grid item xs={12}>
        <Content />
      </Grid>
    </Grid>
  );
}

export default Draft;
