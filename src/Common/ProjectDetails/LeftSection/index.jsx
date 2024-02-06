import { Button, Grid, Stack, Typography, styled } from "@mui/material";
import {
  CalendarMonth,
  ArrowRightAlt,
  LocationOn,
  Leaderboard,
  AttachMoney,
  Bookmark,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import SectionContainer from "../../Containers/SectionContainer";
import Status, { SolidButton, TransparentButton } from "../../Buttons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GRID = styled(Grid)(({ theme }) => ({
  ["@media screen  and (min-width:1799px)"]: {},
}));
const arr = [
  {
    title: "Job Expiry",
    status: "December 12th, 2024 ",
    Icon: <CalendarMonth />,
  },
  {
    title: "Location",
    status: "Islamabad",
    Icon: <LocationOn />,
  },
  {
    title: "Proposals",
    status: "30",
    Icon: <Leaderboard />,
  },
];

function LeftSection({ data }) {
  const [ShowMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);
  const isIndustry = profile?.type === "industry";
  const isAcademia = profile?.type === "academia";
  return (
    <SectionContainer>
      <DetailsPageHeading variant="h1">PROJECT DETAILS</DetailsPageHeading>
      <Grid container mt={"80px"}>
        <Grid
          item
          xs={12}
          lg={12}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2.5rem"}
        >
          <ProjectHeadingStyled variant="h1">
            {data?.title ? data?.title : "Senior System Engineer Is Required"}
          </ProjectHeadingStyled>
          <MetaInfoStyled>
            <CalendarMonth />
            {new Date(data?.startDate).toDateString()}
            <Status>Full Time</Status>
          </MetaInfoStyled>
          <ButtonsRow>
            <TransparentButton>
              Save Project
              <Bookmark color="red" />
            </TransparentButton>
            {isIndustry && (
              <SolidButton onClick={() => navigate("/industry/addproposal")}>
                Send Proposal
                <ArrowRightAlt sx={{ width: "25px", height: "25px" }} />
              </SolidButton>
            )}
          </ButtonsRow>
          <StatusRow>
            {arr?.map((Com, i) => {
              return <StatusComp {...Com} key={i} />;
            })}
          </StatusRow>

          <TextSection>
            <Typography variant="h2" fontWeight={500} marginBottom={"1.5rem"}>
              Description
            </Typography>

            <TypographyStyled
              textAlign={"justify"}
              variant="body1"
              fontWeight={400}
              aria-current={ShowMore}
            >
              {data?.description}
            </TypographyStyled>
          </TextSection>
        </Grid>
        <ViewDescriptionGrid aria-current={ShowMore} item xs={12}>
          <Button
            sx={{ mt: 6 }}
            variant="ghost"
            color="success"
            onClick={() => setShowMore(!ShowMore)}
          >
            {ShowMore === true ? "View Less" : "View More"}
          </Button>
        </ViewDescriptionGrid>
      </Grid>
    </SectionContainer>
  );
}

export default LeftSection;

const StatusComp = (props) => {
  return (
    <Box
      sx={{
        border: `1px solid #E8E8E8`,
        borderRadius: "5px",
        background: "#FFF",
        padding: "20px 21px",
        color: "#A6A6A6",

        "& svg": {
          background: "#F7F7F7",
          padding: ".4rem",
          color: "#C4C4C4",
          boxSizing: "content-box",
        },
        // minWidth: "200px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"1rem"}
        columnGap={"5rem"}
      >
        <Stack gap={"1rem"} flex={1}>
          <Typography
            variant="body2"
            color={"rgba(110, 114, 125, 1)"}
            fontSize={15}
            fontWeight={500}
          >
            {props?.title ? props?.title : "Job Expiry"}
          </Typography>
          <Typography variant="h4">
            {props?.status ? props?.status : "Expired"}
          </Typography>
        </Stack>
        {props?.Icon ? props?.Icon : <CalendarMonth />}
      </Stack>
    </Box>
  );
};
const DetailsPageHeading = styled(Typography)((data) => ({
  color: "#A6A6A6",
  fontSize: "3rem",
  fontWeight: 600,
  textTransform: "capitalize",
}));

const ProjectHeadingStyled = styled(Typography)((data) => ({
  color: data?.theme.palette.background.black,
  fontSize: "2rem",
  fontWeight: "550",
}));
const TextSection = styled("div")((data) => ({
  padding: ".8rem 0rem .2rem 0rem",
}));
const ViewDescriptionGrid = styled(Grid)((data) => {
  const isTrue = data?.["aria-current"];
  return {
    background: isTrue === false ? "rgb(238,238,238)" : "none",
    background:
      isTrue === false
        ? "linear-gradient(to top,white 0%, rgba(255,255,255,0.4) 100%)"
        : "none",
    paddingBlock: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-100px",
    ["@media screen  and (min-width:1799px)"]: {
      // display: "none",
    },
  };
});
const TypographyStyled = styled(Typography)((data) => {
  const isTrue = data?.["aria-current"];
  return {
    color: "grey",
    lineHeight: "30px",
    fontSize: "1rem",
    marginBottom: "1rem",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: isTrue === true ? 12222 : 10,
    textAlign: "left",
    ["@media screen  and (max-width:1798px)"]: {},
    // lineHeight: 1.6,
    // height: "95px",
  };
});
const MetaInfoStyled = styled(Stack)((data) => ({
  color: "#A6A6A6",
  gap: ".5rem",
  marginTop: "-1rem",
  flexDirection: "row",
  alignItems: "center",
  svg: {
    fontSize: "1.25rem",
  },
}));
const ButtonsRow = styled(Stack)((data) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "450px",
}));
const StatusRow = styled(Stack)((data) => ({
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
}));

const ImageCom = styled("img")(() => ({
  height: "25px",
  width: "25px",
  margin: "auto",
  display: "block",
  color: "red",
}));
