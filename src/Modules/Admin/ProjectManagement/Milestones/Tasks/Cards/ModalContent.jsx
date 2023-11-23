import { Card, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { customTheme } from "../../../../../../Theme/theme";
import IconsHeadings from "../../../../../../Common/AnimationMui/IconHeadings";
import {
  AttachFile,
  Close,
  CloseOutlined,
  CommentSharp,
  Description,
} from "@mui/icons-material";
import DataGrids from "../../../../../../Common/TableMui/DataGrids";
import { columnsFiles, rowsFiles } from "../../../UploadedFiles/data";
import TabsCommon from "../../../../../../Common/TabsCommon";
import TabFeedbackModal from "./TabFeedbackModal";
import TabRemarksModal from "./TabRemarksModal";
const arrayTabs = ["Feedback", "Remarks"];
function ModalContent({ handleCloseModal }) {
  const [Tabs, setTabs] = useState(0);
  const handleChange = (event, newValue) => {
    setTabs(newValue);
  };
  return (
    <Grid container gap={2} sx={{ height: "100%", overflow: "auto" }}>
      <Grid item sx={{ mb: 0 }} xs={12}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography variant="h2">Task Heading</Typography>
            <Typography variant="body2" fontWeight={500}>
              (Task Number 2)
            </Typography>
          </Stack>
          <IconButton onClick={handleCloseModal}>
            <CloseOutlined />
          </IconButton>
        </Stack>
      </Grid>
      <Grid sx={{ mt: 2 }}>
        <TabsCommon
          handleChange={handleChange}
          value={Tabs}
          arrayTabs={arrayTabs}
        />
      </Grid>
      {Tabs === 0 && <TabFeedbackModal />}
      {Tabs === 1 && <TabRemarksModal />}
    </Grid>
  );
}

export default ModalContent;

const TabFeedback = () => {};
