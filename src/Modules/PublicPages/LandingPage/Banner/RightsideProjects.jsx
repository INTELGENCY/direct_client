import { Divider, Grid, Button, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { styled } from "@mui/material/styles";

const ProjectName = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "700",

  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,

  ["@media screen and (max-width: 1450px)"]: {
    fontSize: "16px",
  },
}));

const FlexEnd = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));
const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: ".8rem",

  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  marginTop: ".5rem",
  ["@media screen and (max-width: 1450px)"]: {
    fontSize: "13.5px",
    fontWeight: "400",
  },
}));
const MoreBtn = styled(Button)(({ theme }) => ({
  color: "white",
  paddingBlock: "10px",
  paddingLeft: "18px",
  border: "1px solid white",
  backgroundColor: "transparent",
  borderRadius: "25px",
  marginLeft: "auto",
  marginTop: "15px",
}));
const SStack = styled(Stack)(({ theme }) => ({
  img: {
    width: "35px",
  },
  h5: {
    color: "white",
  },
  a: {
    textDecoration: "none",
  },
}));

function RightsideProjects({ data, last }) {
  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        {data?.type === "pdf" ? (
          <div>
            <SStack direction="row" gap={"2rem"} alignItems={"flex-start"}>
              <img
                style={{ filter: "invert()" }}
                src={data?.image}
                alt="pdfimg"
              />
              <a href={data?.url}>
                <Typography variant="h5">{data?.title}</Typography>
              </a>
            </SStack>
            <Divider sx={{ backgroundColor: "white", marginTop: "25px" }} />
          </div>
        ) : (
          <ProjectName variant="h4">{data?.title}</ProjectName>
        )}
      </Grid>
      {data?.type !== "pdf" ? (
        <Grid item xs={12} lg={12}>
          <ProjectDescription variant="body2">
            {data?.description}{" "}
          </ProjectDescription>
        </Grid>
      ) : null}
      {data?.type !== "pdf" ? (
        <Grid item xs={12}>
          {last ? (
            <FlexEnd>
              <MoreBtn endIcon={<ArrowForwardIcon />}>READ MORE...</MoreBtn>
            </FlexEnd>
          ) : (
            <Divider sx={{ backgroundColor: "white", marginTop: "25px" }} />
          )}
        </Grid>
      ) : null}
    </Grid>
  );
}

export default RightsideProjects;
