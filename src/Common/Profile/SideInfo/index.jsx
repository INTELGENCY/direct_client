import {
  Api,
  AppRegistration,
  Email,
  Info,
  Phone,
  Room,
} from "@mui/icons-material";
import { Avatar, Grid, Stack, Typography, Zoom, styled } from "@mui/material";
import { useEffect, useState } from "react";
const Heading = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: ".5rem",
}));
const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1rem",
  paddingRight: "50px",
  //   borderBottom: "2px solid" + theme.palette.bg.greenMui,
}));
const GridItem = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: ".5rem",
  paddingBlock: "15px",
  paddingInline: "20px",
  borderRadius: "10px",
  backgroundColor: "#E6E6E6",
}));
const DividerOne = styled("div")(({ theme }) => ({
  width: "70px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
const LeftBorder = styled("div")(({ theme }) => ({
  width: "70%",
  //   border: "2px solid #3787FF",
  border: "2px solid" + theme.palette.bg.greenMui,
  borderRadius: "17px",
}));
const RightBorder = styled("div")(({ theme }) => ({
  width: "20%",
  border: "2px solid" + theme.palette.bg.greenMui,
  borderRadius: "17px",
}));
const infoArray = [
  {
    name: "abdullahasifabdullahasif@gmail.com",
    icon: <Email />,
  },
  { name: "+92 3030000000", icon: <Phone /> },
  { name: "Location", icon: <Room /> },
  { name: "Registration Number", icon: <AppRegistration /> },
  { name: "Tax ID", icon: <Api /> },
];
function SideInfo({ profileData }) {
  return (
    <Grid container rowGap={4}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          gap: ".6rem",
        }}
        item
        xs={12}
      >
        <Typography variant="h3">Industry Overview</Typography>
        <DividerOne>
          <LeftBorder></LeftBorder>
          <RightBorder></RightBorder>
        </DividerOne>
      </Grid>
      <Grid item xs={12}>
        <Grid container gap={2}>
          {/* <Zoom in timeout={400}> */}
          <GridItem item>
            <Email />
            <Typography>{profileData.email}</Typography>
          </GridItem>
          {/* </Zoom> */}
          {/* <Zoom in timeout={800}> */}
          <GridItem item>
            <Phone />
            <Typography>{profileData.phone}</Typography>
          </GridItem>
          {/* </Zoom> */}
          {/* <Zoom in timeout={1200}> */}
          <GridItem item>
            <Room />
            <Typography>{profileData.address}</Typography>
          </GridItem>
          {/* </Zoom> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SideInfo;
{
  /* <>
      {windowWidth >= 1200 ? (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          spacing={2}
        >
          <Content>
            <Heading>
              <Typography variant="h3">Industry Overview</Typography>
              <DividerOne>
                <LeftBorder></LeftBorder>
                <RightBorder></RightBorder>
              </DividerOne>
            </Heading>
            {infoArray.map((e, i) => (
              <GridItem key={i}>
                {e.icon}
                <Typography
                  maxWidth={350}
                  sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {e.name}
                </Typography>
              </GridItem>
            ))}
          </Content>
        </Stack>
      ) : (
        <Grid container rowGap={2}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              // alignItems:"flex-end",
              flexDirection: "column",
              gap: ".6rem",
            }}
            item
            xs={12}
          >
            <Typography variant="h3">Industry Overview</Typography>
            <DividerOne>
              <LeftBorder></LeftBorder>
              <RightBorder></RightBorder>
            </DividerOne>
          </Grid>
          <Grid item xs={12}>
            <Grid container gap={2}>
              {infoArray.map((e, i) => (
                <GridItem item key={i}>
                  {e.icon}
                  <Typography>{e.name}</Typography>
                </GridItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </> */
}
