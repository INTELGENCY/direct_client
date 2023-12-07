import { Grid, Typography } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import Sections from "./Sections";
import BreifIntro from "../../../Common/Admin/Forms/BreifIntro";
import Description from "../../../Common/Admin/Forms/Description";
import TechnicalInformation from "../../../Common/Admin/Forms/TechnicalInformation";
import CustomizableFields from "../../../Common/Admin/Forms/CustomizableFields";

function EditProject({ inTabs }) {
  return (
    <Grid container sx={{ pt: inTabs ? 2 : 8 }} gap={8}>
      <Grid item xs={12}>
        <MainHeadings text={"Summary"} />
      </Grid>
      <Grid item xs={12}>
        <BreifIntro />
      </Grid>
      <Grid item xs={12}>
        <Description />
      </Grid>
      <Grid item xs={12}>
        <TechnicalInformation />
      </Grid>
      <Grid item xs={12}>
        <CustomizableFields />
      </Grid>
      {/* Propsal values will come here too */}
    </Grid>
  );
}

export default EditProject;
