import { Button, Divider, Grid } from "@mui/material";
import ProjectName from "../../../Common/Admin/ProjectName";
import PublishSearch from "../../../Common/Admin/PublishSearch";
import FileUploadCompAdmin from "../../../Common/FileUploadCompAdmin";
import { useNavigate } from "react-router-dom";
const uploadFilesArray = [{ name: "Project Finalized", file: null }];
function PublishReq() {
  const navigate = useNavigate();
  return (
    <Grid container gap={6} sx={{ mt: 6, mb: 4 }}>
      <Grid item xs={12}>
        <ProjectName />
      </Grid>
      <Grid item xs={12}>
        <PublishSearch title={"Choose Researcher"} />
      </Grid>
      <Grid item xs={12}>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12}>
        <PublishSearch title={"Choose Industry"} />
      </Grid>
      <Grid item xs={12}>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12}>
        <FileUploadCompAdmin hideAddMore values={uploadFilesArray} />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => navigate("/directportal/dashboard")}
          variant="contained"
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default PublishReq;
