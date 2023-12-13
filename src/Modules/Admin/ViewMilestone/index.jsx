import { Grid, Stack, Typography } from "@mui/material";
import TabFeedbackModal from "./TabFeedbackModal";
import TabRemarksModal from "./TabRemarksModal";
import TabsCommon from "../../../Common/TabsCommon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TasksProject } from "../../../utils/ProjectsData";
import TabChat from "./TabChat";
const arrayTabs = ["Milestone Details", "Remarks"];
function ViewMilestone() {
  const { id } = useParams();
  const [dataProject, setDataProject] = useState(null);
  const [Tabs, setTabs] = useState(0);
  const handleChange = (event, newValue) => {
    setTabs(newValue);
  };
  useEffect(() => {
    const ExtractData = () => {
      let FilteredData = TasksProject.filter((e) => e.id == id);
      if (FilteredData.length !== 0) {
        setDataProject(FilteredData[0]);
      }
    };
    ExtractData();
  }, []);
  if (!dataProject) {
    return;
  }
  return (
    <Grid
      container
      gap={2}
      sx={{ height: "100%", overflow: "auto", marginTop: 6, marginBottom: 6 }}
    >
      <Grid item sx={{ mb: 0 }} xs={12}>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <Typography sx={{m:2}} variant="h1">{dataProject.title}</Typography>
          <Typography variant="h3" fontWeight={500}>
            (Task Number {id} )
          </Typography>
        </Stack>
      </Grid>
      {/* <Grid sx={{ mt: 2 }}>
        <TabsCommon
          handleChange={handleChange}
          value={Tabs}
          arrayTabs={arrayTabs}
        />
      </Grid> */}
      <TabFeedbackModal dataCard={dataProject} />
      {/* {Tabs === 2 && <TabChat />} */}
    </Grid>
  );
}

export default ViewMilestone;
