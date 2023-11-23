import { Card, Grid, Stack, Typography } from "@mui/material";
import ProjectName from "../../../Common/ProjectName";
import { useState } from "react";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import { Description } from "@mui/icons-material";
import { dataProject } from "../../../utils/ProjectsData";
import { customTheme } from "../../../Theme/theme";
import ProposalTable from "./ProposalTable";

function ProposalLists() {
  const arrayTabs = ["Project Details", "Proposals"];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container gap={4} sx={{ mt: 6, mb: 4 }}>
      <Grid item xs={12}>
        <ProjectName
          value={value}
          handleChange={handleChange}
          arrayTabs={arrayTabs}
        />
      </Grid>
      {value === 0 && (
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Stack gap={3} direction={"column"}>
              <IconsHeadings
                text={"Description"}
                icons={
                  <Description
                    sx={{ color: customTheme.palette.bg.darkBlue }}
                  />
                }
              />
              <Typography variant={"body1"}>
                {dataProject[0].description}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      )}
      {value === 1 && (
        <Grid item xs={12}>
          <ProposalTable />
        </Grid>
      )}
    </Grid>
  );
}

export default ProposalLists;
