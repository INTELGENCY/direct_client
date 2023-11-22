import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Fade, Tab, styled } from "@mui/material";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";

const TabPanelCustome = styled(TabPanel)(({ theme }) => ({
  paddingInline: "0px",
  maxWidth: "100%",
  // border: "1px solid green",
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
function TabsCommon({ arrayTabs, value, handleChange }) {
  return (
    <TabContext sx={{ paddingBlock: "none", width: "100%" }} value={value}>
      <Box>
        <TabsCustom onChange={handleChange}>
          {arrayTabs.map((e, i) => (
            <TabCustom label={e} key={i} value={i} />
          ))}
        </TabsCustom>
      </Box>
      {/* <TabPanelCustome sx={{ overflow: "hidden" }} value="1">
        <TransitionGroup>
          <Fade timeout={400}>
            <div>
              safd
            </div>
          </Fade>
        </TransitionGroup>
      </TabPanelCustome> */}
    </TabContext>
  );
}

export default TabsCommon;
