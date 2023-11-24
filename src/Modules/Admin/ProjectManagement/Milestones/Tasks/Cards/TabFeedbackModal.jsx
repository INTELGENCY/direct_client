import { Card, Grid, Stack, Typography } from "@mui/material";
import { customTheme } from "../../../../../../Theme/theme";
import IconsHeadings from "../../../../../../Common/AnimationMui/IconHeadings";
import {
  AttachFile,
  CommentSharp,
  Description,
  Task,
} from "@mui/icons-material";
import DataGrids from "../../../../../../Common/TableMui/DataGrids";
import { columnsFiles, rowsFiles } from "../../../UploadedFiles/data";
import TimelineMui from "../../../../../../Common/TimelineMui";

function TabFeedbackModal({ dataCard }) {
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            m: 1,
            m: 0.5,
            boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
          }}
        >
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Description"}
              icons={<Description sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              {dataCard.description}
            </Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            m: 1,
            m: 0.5,
            boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
          }}
        >
          <IconsHeadings
            text="Tasks"
            icons={<Task sx={{ color: "bg.darkBlue" }} />}
            paddingBottom={2}
          />
          {dataCard?.Subtasks?.map((e, i) => (
            <TimelineMui timelineData={e} key={i} />
          ))}
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            m: 1,
            m: 0.5,
            boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
          }}
        >
          <IconsHeadings
            text="Attachments"
            icons={<AttachFile sx={{ color: "bg.darkBlue" }} />}
            paddingBottom={2}
          />
          <DataGrids dataRow={rowsFiles} dataColumn={columnsFiles} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default TabFeedbackModal;
