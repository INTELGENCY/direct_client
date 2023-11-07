import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Slide, Tab, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import { TransitionGroup } from "react-transition-group";

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
function SectionTwo({ profileData }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext sx={{ paddingBlock: "none", width: "100%" }} value={value}>
        <Box>
          <TabsCustom onChange={handleChange}>
            <TabCustom label="Basic Information" value="1" />
            <TabCustom label="Organizational Details" value="2" />
          </TabsCustom>
        </Box>
        <TabPanelCustome sx={{ overflow: "hidden" }} value="1">
          <TransitionGroup>
            <Slide direction="right" timeout={400}>
              <div>
                <TabOne profileData={profileData} />
              </div>
            </Slide>
          </TransitionGroup>
        </TabPanelCustome>
        <TabPanelCustome value="2" sx={{ overflow: "hidden" }}>
          <TransitionGroup>
            <Slide direction="right" timeout={400}>
              <div>
                <TabTwo profileData={profileData} />
              </div>
            </Slide>
            {/* <Fade timeout={800}>
              <div>
                <TabTwo />
              </div>
            </Fade> */}
          </TransitionGroup>
        </TabPanelCustome>
      </TabContext>
    </div>
  );
}

export default SectionTwo;
