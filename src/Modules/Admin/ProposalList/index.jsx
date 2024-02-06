import { Grid } from "@mui/material";
import Proposals from "./Proposals";
import ProjectNameWithoutTabs from "../../../Common/Admin/ProjectNameWithoutTabs";
import { useEffect, useState } from "react";
import { dataProject } from "../../../utils/ProjectsData";
import { useParams } from "react-router-dom";

function ProposalList() {
  const { id } = useParams();
  console.log(id, "id");
  const [ProjectDetails, setProjectDetails] = useState({});
  useEffect(() => {
    const StaticProjectsFilter = () => {
      dataProject?.map((e) => {
        if (e?.id == id) {
          setProjectDetails(e);
        }
      });
    };
    StaticProjectsFilter();
  }, []);

  return (
    <Grid container gap={6} sx={{ pt: 8, pb: 4 }}>
      <Grid item xs={12}>
        <ProjectNameWithoutTabs dataProject={ProjectDetails} />
      </Grid>
      <Grid item xs={12}>
        <Proposals dataProject={ProjectDetails} />
      </Grid>
    </Grid>
  );
}

export default ProposalList;
