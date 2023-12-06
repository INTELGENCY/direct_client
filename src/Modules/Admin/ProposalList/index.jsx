import { Grid } from "@mui/material";
import Proposals from "./Proposals";
import ProjectNameWithoutTabs from "../../../Common/Admin/ProjectNameWithoutTabs";

function ProposalList() {
  return (
    <Grid container gap={6} sx={{ pt: 8, pb: 4 }}>
      <Grid item xs={12}>
        <ProjectNameWithoutTabs />
      </Grid>
      <Grid item xs={12}>
        <Proposals />
      </Grid>
    </Grid>
  );
}

export default ProposalList;
