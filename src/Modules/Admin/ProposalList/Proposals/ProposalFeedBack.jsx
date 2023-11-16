import { Card, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AttachFile,
  Close,
  CloseOutlined,
  CommentSharp,
  Description,
} from "@mui/icons-material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import {
  columnsFiles,
  rowsFiles,
} from "../../ProjectManagement/UploadedFiles/data";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import { customTheme } from "../../../../Theme/theme";
function ProposalFeedBack({ handleCloseModal }) {
  return (
    <Grid container gap={2} sx={{ height: "100%", overflow: "auto" }}>
      <Grid item sx={{ mb: 3 }} xs={12}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Typography variant="h2" >Feedback</Typography>
          </Stack>
          <IconButton onClick={handleCloseModal}>
            <CloseOutlined />
          </IconButton>
        </Stack>
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
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Description"}
              icons={<Description sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
          <Stack direction={"column"} gap={2}>
            <IconsHeadings
              text={"Comments"}
              icons={<CommentSharp sx={{ color: "#252B42" }} />}
            />
            <Typography textAlign={"justify"} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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

export default ProposalFeedBack;
