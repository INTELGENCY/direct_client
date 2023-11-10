import { Grid } from "@mui/material";
import ProjectName from "./ProjectName";
import Proposals from "./Proposals";

function ProposalList() {
  return (
    <Grid container gap={6} sx={{ pt: 8 }}>
      <Grid item xs={12}>
        <ProjectName />
      </Grid>
      <Grid item xs={12}>
        <Proposals />
      </Grid>
    </Grid>
  );
}

export default ProposalList;
