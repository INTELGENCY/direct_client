import {
  styled,
  Avatar,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { dataProject } from "../../utils/ProjectsData";
import { customTheme } from "../../Theme/theme";
const AvatarUpload = styled(Avatar)(({ theme }) => ({
  width: "170px",
  height: "170px",
  borderRadius: "15px",
}));
const Pstyled = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  // lineHeight: 1.6,
  fontWeight: "400",
}));
function ProjectName({ value, handleChange, arrayTabs }) {
  return (
    <Card
      sx={{ p: 3, boxShadow: customTheme.palette.boxShadows.boxShadowTable }}
    >
      <Grid container gap={0.5}>
        <Grid item xs={12}>
          <Stack width={"100%"} direction={"row"} gap={2}>
            <AvatarUpload src={dataProject[0].image} variant="square" />
            <Stack
              width={"100%"}
              direction={"column"}
              justifyContent={"space-evenly"}
            >
              <Typography
                variant="h3"
                fontSize={"24px"}
                lineHeight={1.5}
                display={"block"}
                width={"80%"}
              >
                {dataProject[0].title}
              </Typography>
              <Pstyled textAlign={"justify"} width={"85%"} variant="body1">
                {dataProject[0].description}
              </Pstyled>
            </Stack>
          </Stack>
        </Grid>
        {arrayTabs && (
          <Grid sx={{ mt: 2 }} item xs={12}>
            <Divider></Divider>
          </Grid>
        )}
        {arrayTabs && (
          <Grid item xs={12}>
            <Tabs
              color={"success"}
              value={value}
              onChange={handleChange}
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {arrayTabs.map((e, i) => (
                <Tab color={"success"} key={i} label={e} />
              ))}
            </Tabs>
          </Grid>
        )}
      </Grid>
    </Card>
  );
}

export default ProjectName;
