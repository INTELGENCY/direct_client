import { Grid } from "@mui/material";
import CardMui from "../CardMui";
import { dataProject } from "../../../../../utils/ProjectsData";
function Content() {
  return (
    <Grid
      container
      rowGap={4}
      justifyContent={"space-between"}
      alignContent={"center"}
      sx={{ width: "100%", pt: 4 }}
    >
      {dataProject?.map((e, i) => (
        <Grid item xs={12} md={12} lg={5.9} key={i}>
          <CardMui cardData={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Content;
