import { Card } from "@mui/material";
import IconsHeadings from "../../../../../Common/AnimationMui/IconHeadings";
import { AttachFile } from "@mui/icons-material";
import DataGrids from "../../../../../Common/TableMui/DataGrids";
import { columnsFiles, rowsFiles } from "../../UploadedFiles/data";
import { customTheme } from "../../../../../Theme/theme";

function AttachmentsMilestones() {
  return (
    <Card sx={{ boxShadow: customTheme.palette.boxShadows.boxShadowTable }}>
      <IconsHeadings
        text="Attachments"
        icons={<AttachFile sx={{ color: "bg.darkBlue" }} />}
        paddingBottom={2}
        paddingTop={3}
        paddingLeft={4}
      />
      <DataGrids dataRow={rowsFiles} dataColumn={columnsFiles} />
    </Card>
  );
}

export default AttachmentsMilestones;
