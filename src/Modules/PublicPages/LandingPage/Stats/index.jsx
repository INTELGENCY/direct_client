import {
  FolderCopyOutlined,
  HowToReg,
  ModelTraining,
  AddTask,
} from "@mui/icons-material";
import { Grid, styled } from "@mui/material";
import IconText from "../../../../Common/IconText";
import SectionContainer from "../../../../Common/Containers/SectionContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { keys } from "../../../../config";
import numeral from "numeral";
import { useSelector } from "react-redux";
const SVG = styled("svg")(({ theme }) => ({
  color: theme.palette.bg.green,
}));
const Stats = () => {
  const [researchersData, setresearchersData] = useState(0);
  const qalamData = useSelector((state) => state.qalam);
  console.log(qalamData.profiles?.length, "qalamData");
  const arr = [
    {
      icon: (
        <SVG>
          <ModelTraining />
        </SVG>
      ),
      number: "1k",
      text: "Academia Researchers",
    },
    {
      icon: (
        <SVG>
          <AddTask />
        </SVG>
      ),
      number: "1.5k",
      text: "Fund Disperse",
    },
    {
      icon: (
        <SVG>
          <HowToReg />
        </SVG>
      ),
      number: "1.5k",
      text: "Domain Experts",
    },
    {
      icon: (
        <SVG>
          <FolderCopyOutlined />
        </SVG>
      ),
      number: "1.5k",
      text: "Industries",
    },
  ];
  return (
    <SectionContainer>
      <Grid
        container
        width={"100%"}
        justifyContent={"center"}
        // columnGap={"3rem"}
        rowGap={"3rem"}
        sx={{
          "@media screen and (max-width:750px)": {
            display: "flex",
            "& > *": {
              flexBasis: "50% !imporant",
            },
          },
        }}
      >
        {arr?.map((icondata, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4.7} lg={3}>
              <IconText
                icon={icondata?.icon}
                text={icondata?.text}
                number={icondata?.number}
                Green
              />{" "}
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

export default Stats;
