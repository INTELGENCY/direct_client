import { Card, Grid } from "@mui/material";
import Cards from "./Cards";
import { customTheme } from "../../../../../Theme/theme";
import IconsHeadings from "../../../../../Common/AnimationMui/IconHeadings";
import { AttachFile } from "@mui/icons-material";

function Tasks() {
  return (
    <Card
      sx={{
        pt: 1,
        pb: 3,
        pl: 3,
        pr: 3,
        boxShadow: customTheme.palette.boxShadows.boxShadowTable,
      }}
    >
      <Grid container justifyContent={"space-between"} rowGap={3}>
        <Grid item xs={12}>
          <IconsHeadings
            text="Tasks"
            icons={<AttachFile sx={{ color: "bg.darkBlue" }} />}
            paddingBottom={0}
            paddingTop={3}
          />
        </Grid>
        {Array(10)
          .fill(null)
          .map((e, i) => (
            <Grid item xs={2.9}>
              <Cards />
            </Grid>
          ))}
      </Grid>
    </Card>
  );
}

export default Tasks;
