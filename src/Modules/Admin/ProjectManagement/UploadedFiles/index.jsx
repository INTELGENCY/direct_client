import {
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { customTheme } from "../../../../Theme/theme";
import {
  AttachFile,
  FilterDrama,
  FilterList,
  Search,
} from "@mui/icons-material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import { columnsFiles, rowsFiles } from "./data";

function UploadedFiles() {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          gap={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <TextField
            type="text"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{ cursor: "pointer" }} position="end">
                  <IconButton sx={{ color: "bg.darkBlue" }}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton sx={{ color: "bg.darkBlue" }}>
            <FilterList />
          </IconButton>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Card elevation={4}>
          <IconsHeadings
            text="Attachments"
            icons={<AttachFile sx={{ color: "bg.darkBlue" }} />}
            paddingBottom={2}
            paddingTop={3}
            paddingLeft={4}
          />
          <DataGrids dataRow={rowsFiles} dataColumn={columnsFiles} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default UploadedFiles;
