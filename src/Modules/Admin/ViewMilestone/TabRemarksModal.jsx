import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { customTheme } from "../../../Theme/theme";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import {
  AttachFile,
  Comment,
  CommentSharp,
  Description,
  Timeline,
} from "@mui/icons-material";
import Editor from "../../../Common/Editor";
import TaskSlide from "../../../Common/SlideMui/TaskSlide";
function TabRemarksModal() {
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Card
          sx={{
            boxShadow: customTheme.palette.boxShadows.boxShadowTable,
            border: "none",
            p: 2,
            m: 0.5,
          }}
        >
          <IconsHeadings
            text={"Comments"}
            icons={<Comment sx={{ color: "#252B42" }} />}
          />
          <Editor />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            m: 1,
            p: 2,
            m: 0.5,
            boxShadow: customTheme.palette.boxShadows.boxShadowTable,
          }}
        >
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Progress"}
              icons={<Timeline sx={{ color: "#252B42" }} />}
            />
            <TaskSlide />
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Save</Button>
      </Grid>
    </Grid>
  );
}

export default TabRemarksModal;
