import { Grid, Typography, styled, Stack } from "@mui/material";
import MAP from "./map";
import Dots from "/assets/dots.svg";
import MapIcons from "../../../../Common/IconText/mapIcons.jsx";
import axios from "axios";
import { Factory, HowToReg, School } from "@mui/icons-material";
import { useEffect, useState } from "react";
import SectionContainer from "../../../../Common/Containers/SectionContainer";
import { useSelector } from "react-redux";

const SVG = styled("svg")(({ theme }) => ({
  color: "white",
}));

const MapComponent = () => {
  const qalamData = useSelector((state) => state.qalam);
  const [data, setdata] = useState({
    Punjab: {
      industry: 70,
      experts: 240,
      academia: 400,
    },
    Islamabad: {
      industry: 120,
      experts: 600,
      academia: 200,
    },
    Balochistan: {
      industry: 100,
      experts: 500,
      academia: 200,
    },
    "Gilgit-Baltistan": {
      industry: 80,
      experts: 300,
      academia: 70,
    },
    "Azad Kashmir": {
      industry: 30,
      experts: 100,
      academia: 50,
    },
    "Khyber Pakhtunkhwa": {
      industry: 1000,
      experts: 2000,
      academia: 500,
    },
    Sindh: {
      industry: 2000,
      experts: 4000,
      academia: 600,
    },
    FATA: {
      industry: 100,
      experts: 100,
      academia: 100,
    },
  });
  const [active, setactive] = useState("Punjab");
  const [arr, setarr] = useState([
    {
      icon: (
        <SVG>
          <Factory />
        </SVG>
      ),
      number: "1.5k",
      text: "Industries",
      key: "industry",
    },
    {
      icon: (
        <SVG>
          <HowToReg />
        </SVG>
      ),
      number: "1.5k",
      text: "Domain Experts",
      isUser: true,
    },
    {
      icon: (
        <SVG>
          <School />
        </SVG>
      ),
      number:
        qalamData?.profiles?.length > 0 ? qalamData?.profiles?.length : "1k",
      text: "Academia Researchers",
    },
  ]);
  const [subarr, setsubarr] = useState([
    {
      icon: (
        <SVG>
          <Factory />
        </SVG>
      ),
      number: "1.5k",
      text: "Industries",
    },
    {
      icon: (
        <SVG>
          <HowToReg />
        </SVG>
      ),
      number: "1.5k",
      text: "Domain Experts",
      isUser: true,
    },
    {
      icon: (
        <SVG>
          <School />
        </SVG>
      ),
      number: "1.5k",
      text: "Academia Researchers",
    },
  ]);
  useEffect(() => {
    if (active) {
      const map = subarr.map((e, i) => {
        if (i == 0) {
          return {
            icon: (
              <SVG>
                <Factory />
              </SVG>
            ),
            number: data[active].industry,
            text: "Industries",
          };
        }
        if (i == 1) {
          return {
            icon: (
              <SVG>
                <HowToReg />
              </SVG>
            ),
            number: data[active].experts,
            text: "Domain Experts",
          };
        }
        if (i == 2) {
          return {
            icon: (
              <SVG>
                <School />
              </SVG>
            ),
            number: data[active].academia,
            text: "Academia Researchers",
            id: "Academia",
          };
        }
      });
      setsubarr(map);
    }
  }, [active]);

  return (
    <MAPWRAPPERStyled>
      <SectionContainer>
        <Grid container color={"white"} justifyContent={"center"}>
          <ImageWrapper alt="pakistanMAP" src={Dots} />
          <Grid item xs={12} marginBottom={"5rem"}>
            <Typography
              variant="h1"
              textAlign={"center"}
              fontWeight={600}
              color={"white"}
            >
              Technology Map
            </Typography>
          </Grid>

          <Grid
            item
            md={12}
            lg={12}
            xl={10}
            sm={12}
            xs={12}
            style={{ padding: "0" }}
          >
            <Icons item md={12} sm={12} xs={12}>
              <RStack className="dummyparent">
                {arr?.map((icon, i) => {
                  return (
                    <MapIcons
                      key={i}
                      icon={icon.icon}
                      number={icon.number}
                      text={icon.text}
                      isUser={icon?.isUser}
                    />
                  );
                })}
              </RStack>
              <Typography variant="h2" marginY={"2.5rem"} color={"white"}>
                {active}
              </Typography>
              <RStack>
                {subarr?.map((icon, i) => {
                  return (
                    i < 3 && (
                      <MapIcons
                        key={i}
                        icon={icon.icon}
                        number={icon.number}
                        text={icon.text}
                        isUser={icon?.isUser}
                      />
                    )
                  );
                })}
              </RStack>
            </Icons>
            <MAP active={active} setactive={setactive} />
          </Grid>
        </Grid>
      </SectionContainer>
    </MAPWRAPPERStyled>
  );
};

export default MapComponent;

const MAPWRAPPERStyled = styled("div")(({ theme }) => ({
  background: theme.palette.bg.greenDark,
  // background: "#098E6E",

  position: "relative",
  width: "100%",
  "&::before": {
    position: "absolute",
    content: "''",
    background: "#BAE1B3",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    left: "-250px",
    top: "-240px",
    zIndex: "-1",
    opacity: ".6",
    display: "none",
  },
  "&::after": {
    position: "absolute",
    content: "''",
    background: "#BAE1B3",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    right: "-250px",

    bottom: "-240px",
    zIndex: "-1",
    opacity: ".6",
    display: "none",
  },

  [theme.breakpoints.up("sm")]: {
    "&::before": {
      display: "block",
    },
    "&::after": {
      display: "block",
    },
  },
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "4rem",
  },
}));
const ImageWrapper = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "60px",
  top: "3rem",
  left: "1rem",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
const Icons = styled("div")(({ theme }) => ({
  paddingLeft: "0px",
  [theme.breakpoints.up("md")]: {
    paddingLeft: "5rem",
  },
}));
const RStack = styled(Stack)(({ theme }) => ({
  rowGap: "1rem",
  flexDirection: "column",
  rowGap: "2rem",

  marginTop: "50px",
  flexWrap: "wrap",
  alignItems: "flex-start",

  [theme.breakpoints.up("sm")]: {
    columnGap: "2.5rem",
    flexDirection: "row",
  },

  [theme.breakpoints.up("lg")]: {
    columnGap: "2rem",
    maxWidth: "650px",
  },
  [theme.breakpoints.down("lg")]: {
    columnGap: "2rem",
    maxWidth: "320px",
  },
  [" @media screen and (max-width: 1000px)"]: {
    maxWidth: "100%",
  },
}));
