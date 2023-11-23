import { Fade, Grid } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import ProjectName from "./ProjectName";
import Overview from "./Overview";
import Milestones from "./Milestones";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import Members from "./Members";
import UploadedFiles from "./UploadedFiles";
function ProjectManagement() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container gap={4} sx={{ pt: 6, pb: 2 }}>
      <Grid item xs={12}>
        <MainHeadings text={"Project Management"} />
      </Grid>
      <Grid item xs={12}>
        <ProjectName value={value} handleChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        {value === 0 && (
          <TransitionGroup>
            <Fade in timeout={500}>
              <div>
                <Overview />
              </div>
            </Fade>
          </TransitionGroup>
        )}
        {value === 1 && (
          <TransitionGroup>
            <Fade in timeout={500}>
              <div>
                <Milestones />
              </div>
            </Fade>
          </TransitionGroup>
        )}
        {value === 2 && (
          <TransitionGroup>
            <Fade in timeout={500}>
              <div>
                <Members />
              </div>
            </Fade>
          </TransitionGroup>
        )}
        {value === 3 && (
          <TransitionGroup>
            <Fade in timeout={500}>
              <div>
                <UploadedFiles />
              </div>
            </Fade>
          </TransitionGroup>
        )}
      </Grid>
    </Grid>
  );
}

export default ProjectManagement;
