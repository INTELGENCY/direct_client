import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import ProjectCard from "./projectcard";
import { SwiperSlide } from "swiper/react";
import SectionContainer from "../../../../Common/Containers/SectionContainer";
import { data } from "./data";
import SwiperContainer from "../../../../Common/Containers/SwiperContainer";
import { InputOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { keys } from "../../../../config";
import Skeletons from "../../../../Common/Skeletons";
const ProjectsCarousel = () => {
  const toShow = data?.length > 5 ? 3 : data?.length > 3 ? 2 : 1;
  const [AllPosts, setAllPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(keys.api + "projects/getprojects");
        if (response.status === 200) {
          setAllPosts(response.data.result);
          console.log(response.data.result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // fetchPosts();
  }, []);
  let postScreen;

  const ProjectsGrid = styled(Grid)(({ theme }) => ({
    rowGap: "3rem",
  }));
  const newLocal = "translateX(120px)";
  const GridSwiperWrapper = styled(Grid)(({ theme }) => ({
    transform: "translateX(0px)",
    [theme.breakpoints.up("lg")]: {
      transform: toShow >= 3 ? newLocal : "translateX(30px)",
    },
  }));
  const BGColor = styled("div")(({ theme }) => ({
    background: theme.palette.bg.greenGradient,
    background: theme.palette.bg.greenDark,
  }));

  const SwiperSlideStyled = styled(SwiperSlide)(({ theme }) => ({
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      // minWidth: "320px",
    },
  }));

  const GridText = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      paddingBlock: "0rem",
    },
  }));
  const ProjectBtn = styled(Button)(({ theme }) => ({
    color: "white",
    borderRadius: "7px",
    border: "1px solid white",
    "&:hover": {
      color: "white",
      borderRadius: "7px",
      border: "1px solid white",
    },
  }));
  const SearchFieldProject = styled(TextField)(({ theme }) => ({
    backgroundColor: "#fff",
    border: "1px solid #EEE",
    borderRadius: "7px",
    outline: "none",
    outlineColor: "#EEE",
    "&:hover": {
      backgroundColor: "#fff",
      border: "1px solid #EEE",
      borderRadius: "7px",
      // outline: "none",
    },
    "fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
      {
        border: "none",
      },
  }));
  const Pstyled = styled("p")(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      textAlign: "left",
      overflow: "unset",
    },
    [theme.breakpoints.up("lg")]: {
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 11,
      textAlign: "justify",
      lineHeight: 1.6,
      fontWeight: "400",
      fontSize: "1.05rem",

      width: toShow >= 3 ? "calc(100% + 80px)" : "100%",
    },
  }));
  return (
    <BGColor>
      <SectionContainer>
        <ProjectsGrid
          container
          position={"relative"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingY={"1rem"}
          gap={3.5}
        >
          <GridText item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Stack
              sx={{ height: "100%" }}
              justifyContent={"center"}
              gap={"1rem"}
              color={"white"}
              textAlign={"justify"}
              fontSize={"1.1rem"}
            >
              <Typography variant="h2" color={"white"}>
                Projects
              </Typography>
              <Grid container rowGap={2} columnGap={1}>
                <Grid item xs={12}>
                  <SearchFieldProject
                    id="filled-start-adornment"
                    variant={"outlined"}
                    fullWidth
                    size="small"
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ProjectBtn fullWidth variant={"outlined"}>
                    Call For Proposal
                  </ProjectBtn>
                </Grid>
                <Grid item xs={12} sm={5.9} md={5.93} lg={5.8} xl={5.85}>
                  <ProjectBtn fullWidth variant="outlined">
                    ON GOING
                  </ProjectBtn>
                </Grid>
                <Grid item xs={12} sm={5.9} md={5.93} lg={5.8} xl={5.85}>
                  <ProjectBtn fullWidth variant="outlined">
                    COMPLETE
                  </ProjectBtn>
                </Grid>
              </Grid>
            </Stack>
          </GridText>
          {data.length < 3 ? (
            data.length !== 0 ? (
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8.5} key={1}>
                <Grid
                  container
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  gap={1}
                >
                  {data.map((e, i) => (
                    <Grid
                      item
                      xs={12}
                      sm={data.length < 2 ? 7 : 5.9}
                      md={data.length < 2 ? 12 : 5.9}
                      lg={data.length < 2 ? 8 : 5.9}
                      xl={data.length < 2 ? 9 : 5.9}
                    >
                      <ProjectCard data={e} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                <Skeletons />
              </Grid>
            )
          ) : (
            <GridSwiperWrapper item xs={12} sm={12} md={12} lg={8.6} xl={8.7}>
              <SwiperContainer
                Modules={["autoplay", "mousewheel"]}
                loop
                className="projectsSwiper"
                breakpoints={{
                  100: {
                    slidesPerView: 1,
                  },

                  700: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: toShow,
                    spaceBetween: 20,
                  },
                  1199: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1360: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1700: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
              >
                {data?.map((e, i) => {
                  return (
                    <SwiperSlideStyled key={i}>
                      <ProjectCard data={e} />
                    </SwiperSlideStyled>
                  );
                })}
              </SwiperContainer>
            </GridSwiperWrapper>
          )}
        </ProjectsGrid>
      </SectionContainer>
    </BGColor>
  );
};

export default ProjectsCarousel;
