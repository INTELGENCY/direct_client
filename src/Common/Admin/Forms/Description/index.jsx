import { Grid } from "@mui/material";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import Editor from "../../../Editor";

function Description() {
  return (
    <Grid container gap={4}>
      <Grid item xs={12}>
        <TypographyGrow variant={"h2"} text={"Background"} />
      </Grid>

      <Grid item xs={12}>
        <Editor label={"Description"} />
      </Grid>
      <Grid item xs={12}>
        <Editor label={"Methodology"} />
      </Grid>
      <Grid item xs={12}>
        <Editor label={"Reference"} />
      </Grid>
    </Grid>
  );
}

export default Description;
