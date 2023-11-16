import { Grid } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import ProjectName from "./ProjectName";
import Overview from "./Overview";
import Milestones from "./Milestones";
function ProjectManagement() {
  return (
    <Grid container gap={4} sx={{ pt: 6, pb: 2 }}>
      <Grid item xs={12}>
        <MainHeadings text={"Projects"} />
      </Grid>
      <Grid item xs={12}>
        <ProjectName />
      </Grid>
      <Grid item xs={12}>
        {/* <Overview /> */}
        <Milestones />
      </Grid>
    </Grid>
  );
}

export default ProjectManagement;
