import AddForm from "./AddForm";
import { Add, ArrowBack } from "@mui/icons-material";
import { Button, Fab, Grid, Stack } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";

function AddProposal() {
  return (
    <Grid container sx={{ pt: 8, minHeight: "90vh", overflow: "hidden" }} justifyContent={"flex-start"} alignItems={"flex-start"} gap={4}>
      <Grid sx={{ height: "100%" }} item xs={12}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <MainHeadings text={"Add Proposal"} />
          <Button variant="contained" color="success" startIcon={<ArrowBack />}>
            Back
          </Button>
        </Stack> 
      </Grid>
      <Grid item xs={12}>
        <AddForm />
      </Grid>
    </Grid>
  );
}

export default AddProposal;
