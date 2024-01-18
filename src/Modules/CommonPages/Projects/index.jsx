import React from "react";
import All from "../../../Common/ViewProjects/All";
import { Grid, Typography } from "@mui/material";
import { dataProject } from "../../../utils/ProjectsData";
import Cards from "../../../Common/ViewProjects/Cards";
import Skeletons from "../../../Common/Skeletons";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";

function Projects() {
  return (
    <div>
      <Grid sx={{ mt: 5 }} container gap={4}>
        <Grid item xs={12}>
          <MainHeadings text={"Projects"}/>
        </Grid>
        <Grid item xs={12}>
          {dataProject.length !== 0 ? (
            <Cards cardsData={dataProject} />
          ) : (
            <Grid container gap={1}>
              {Array(4)
                .fill(null)
                .map((e, i) => (
                  <Grid
                    key={i}
                    item
                    xs={12}
                    sm={12}
                    md={5.86}
                    lg={3.85}
                    xl={2.86}
                  >
                    <Skeletons />
                  </Grid>
                ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
