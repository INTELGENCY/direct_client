import { Button, Divider, Grid } from "@mui/material";
import PublishSearch from "../../../Common/Admin/PublishSearch";
import FileUploadCompAdmin from "../../../Common/FileUploadCompAdmin";
import { useNavigate } from "react-router-dom";
import ProjectName from "../../../Common/Admin/ProjectName";
import { useState } from "react";
import EditProject from "../EditProject";
const uploadFilesArray = [{ name: "Project Finalized", file: null }];
const arrayTabs = ["Summary", "Select Industry/Academia"];
function PublishReq() {
  const navigate = useNavigate();
  const [Tabs, setTabs] = useState(0);
  const handleChange = (event, newValue) => {
    setTabs(newValue);
  };
  return (
    <Grid container gap={6} sx={{ mt: 6, mb: 4 }}>
      <Grid item xs={12}>
        <ProjectName
          handleChange={handleChange}
          value={Tabs}
          arrayTabs={arrayTabs}
        />
      </Grid>
      {Tabs === 0 && (
        <Grid item xs={12}>
          <EditProject inTabs />
        </Grid>
      )}
      {Tabs === 1 && (
        <>
          <Grid item xs={12}>
            <PublishSearch
              title={"Choose Researcher"}
              filters
              dateTitle={"Review Submission Date"}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider></Divider>
          </Grid>
          <Grid item xs={12}>
            <PublishSearch
              title={"Choose Industry"}
              dateTitle={"Proposal Submission Date"}
            />
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
        </>
      )}
    </Grid>
  );
}

export default PublishReq;
