import { TabContext, TabList, TabPanel } from "@mui/lab";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Grid, Tab, Typography, styled } from "@mui/material";
import { useState } from "react";
import All from "./All";
import New from "./New";
import Draft from "./Draft";

const PageHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
}));
const TabPanelCustome = styled(TabPanel)(({ theme }) => ({
  paddingInline: "0px",
  maxWidth: "100%",
  // border: "1px solid green",
}));
const GridItem = styled(Grid)(({ theme }) => ({
  // border: "1px solid green",
  borderRadius: "7px",
  borderLeft: "6px solid green",
  paddingInline: "30px",
  paddingBlock: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "1rem",
}));
const TabsCustom = styled(TabList)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    background: "green !important",
    color: "green !important",
  },
  "& .Mui-selected": {
    background: "#F5F8FF",
    color: "green !important",
  },
}));
const TabCustom = styled(Tab)(({ theme }) => ({
  border: "1px solid #E9E9EB",
  "& .Mui-selected": {
    background: "#F5F8FF",
  },
}));
function ViewProjects() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container rowGap={3} sx={{ marginTop: 5 }}>
      <GridItem item xs={12}>
        <PageHeading variant="h2">Overview</PageHeading>
        <Typography color={"gray"} variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          lectus sem.{" "}
        </Typography>
      </GridItem>
      <Grid item xs={12}>
        <TabContext sx={{ paddingBlock: "none", width: "100%" }} value={value}>
          <Box>
            <TabsCustom onChange={handleChange}>
              <TabCustom label="General Purpose Projects" value="1" />
              <TabCustom label="Draft" value="2" />
              <TabCustom label="Create New Projects" value="3" />
            </TabsCustom>
          </Box>
          <TabPanelCustome value="1">
            <All />
          </TabPanelCustome>
          <TabPanelCustome value="2">
            <Draft />
          </TabPanelCustome>
          <TabPanelCustome value="3">
            <New setValue={setValue} />
          </TabPanelCustome>
        </TabContext>
      </Grid>
    </Grid>
  );
}

export default ViewProjects;
