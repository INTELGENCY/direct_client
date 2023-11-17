import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import Cards from "../Cards";
import { BackHand, FilterList, Forward, Search } from "@mui/icons-material";
import axios from "axios";
import { keys } from "../../../config";
import Skeletons from "../../Skeletons";
import DataGrids from "../../TableMui/DataGrids";
import ProposalsList from "./ProposalsList";
import PreAwardFormalities from "./PreAwardFormalities";
import AwardOfContract from "./AwardOfContract";
import MilestoneTable from "./MillestoneTable";
const TabCustome = styled(Tab)(({ theme }) => ({
  border: "1px solid #E9E9EB",
  "& .Mui-selected": {
    background: "#F5F8FF",
  },
  // border: "1px solid  rgba(0, 0, 0, 0.51)",
  //   color: "rgba(0, 0, 0, 0.51)",
  "& .Mui-selected": {
    color: theme.palette.bg.parrotGreen,
    borderBottomColor: theme.palette.background.parrotGreen,
  },
  "&:hover": {
    background: "#F5F8FF",
  },
}));
const GridCustom = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "2rem",
}));
const GridItem = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".5rem",
}));
const TabListCustome = styled(TabList)(({ theme }) => ({
  // border: "1px solid  rgba(0, 0, 0, 0.51)",
  overflow: "hidden",
  paddingInline: "10px",
  width: "93vw",
  "& .MuiTabList-scrollButtons": {
    background: "green !important",
    color: "green !important",
  },
  "& .MuiTabList-scroller": {
    background: "green !important",
    color: "green !important",
  },
  "& .MuiTabs-indicator": {
    background: "green !important",
    color: "green !important",
  },
  "& .Mui-selected": {
    background: "#F5F8FF",
    color: "green !important",
  },
  [theme.breakpoints.down("xl")]: {
    width: "90vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "80vw",
  },
}));
const TabData = [
  "Projects",
  "Call for Proposals",
  "Pre-Award Formalities",
  "Award For Contract",
  "Milestones",
];
function All() {
  const [value, setValue] = useState(1);
  const [postsAll, setPostsAll] = useState([]);
  console.log(postsAll, "PostsAll");
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(keys.api + "projects/getprojects");
        if (response.status === 200) {
          setPostsAll(response.data.result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPosts();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container rowGap={3} sx={{ maxWidth: "100%" }}>
        <GridCustom item xs={12}>
          <TextField
            color="success"
            type="text"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{ cursor: "pointer" }} position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <GridItem>
            <FilterList />
            <span>Filter</span>
          </GridItem>
        </GridCustom>
        <Grid item xs={12}>
          {/* <Box sx={{ width: "500px", border: "1" }}> */}
          <TabContext value={value}>
            <TabListCustome
              variant="scrollable"
              allowScrollButtonsMobile
              aria-label="visible arrows tabs example"
              onChange={handleChange}
            >
              {TabData.map((e, i) => (
                <TabCustome wrapped label={e} value={i + 1} />
              ))}
            </TabListCustome>

            <TabPanel sx={{ paddingInline: "0px" }} value={1}>
              {postsAll.length !== 0 ? (
                <Cards cardsData={postsAll} />
              ) : (
                <Grid container gap={1}>
                  {Array(4)
                    .fill(null)
                    .map((e, i) => (
                      <Grid
                        key={i}
                        item
                        xs={12}
                        sm={12}
                        md={5.86}
                        lg={3.85}
                        xl={2.86}
                      >
                        <Skeletons />
                      </Grid>
                    ))}
                </Grid>
              )}
            </TabPanel>
            <TabPanel sx={{ paddingInline: "0px" }} value={2}>
              <ProposalsList />
            </TabPanel>
            <TabPanel sx={{ paddingInline: "0px" }} value={3}>
              <PreAwardFormalities />
            </TabPanel>
            <TabPanel sx={{ paddingInline: "0px" }} value={4}>
              <AwardOfContract />
            </TabPanel>
            <TabPanel sx={{ paddingInline: "0px" }} value={5}>
              <MilestoneTable />
            </TabPanel>
            <TabPanel sx={{ paddingInline: "0px" }} value={6}>
              <Typography variant="h1" textAlign={"center"} sx={{ mt: 6 }}>
                Comming Soon!
              </Typography>
            </TabPanel>
            <TabPanel sx={{ paddingInline: "0px" }} value={7}>
              <Typography variant="h1" textAlign={"center"} sx={{ mt: 6 }}>
                Comming Soon!
              </Typography>
            </TabPanel>
          </TabContext>
          {/* </Box> */}
        </Grid>
      </Grid>
    </>
  );
}

export default All;
