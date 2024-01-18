import { Card, Grid, Stack } from "@mui/material";
import MainHeadings from "../../../Common/AnimationMui/MainHeadings";
import DataGrids from "../../../Common/TableMui/DataGrids";
import { customTheme } from "../../../Theme/theme";
import { columnsFiles, rowsFiles } from "./data";
import UploadFiles from "./UploadFiles";

function RequirementsFromUser() {
  return (
    <Grid container sx={{ pt: 8, pb: 4 }} gap={6}>
      <Grid item xs={12}>
        <MainHeadings text={"Requirements from User/URD/GSR"} />
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            boxShadow: customTheme.palette.boxShadows.boxShadowTable,
          }}
        >
          <Stack direction={"column"}>
            <UploadFiles />
            <DataGrids dataColumn={columnsFiles} dataRow={rowsFiles} />
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default RequirementsFromUser;
