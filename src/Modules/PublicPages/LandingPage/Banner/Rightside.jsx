import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RightsideProjects from "./RightsideProjects.jsx";
import { data, dataFiles } from "./data.jsx";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "3rem",
}));
const SpanLinks = styled(Button)((data) => {
  var border = `2px solid ${
    data?.["aria-current"] === true ? " white" : " transparent"
  }`;
  return {
    color: "white",
    fontSize: "17px",
    cursor: "pointer",
    margin: "0",
    borderRadius: "0",
    background: "transparent",
    borderBottom: border,
    fontWeight: "550",
    ["@media screen and (max-width: 1450px)"]: {
      fontSize: "16px",
      fontWeight: "500",
    },
  };
});

function Rightside(props) {
  const [active, setactive] = useState(1);
  const arr = active === 1 ? data : dataFiles;
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={5}>
      <Grid item xs={12}>
        <FlexBox>
          <SpanLinks
            aria-current={active === 1}
            type="primary"
            onClick={() => setactive(1)}
          >
            Notifications
          </SpanLinks>
          <SpanLinks aria-current={active === 2} onClick={() => setactive(2)}>
            Resources
          </SpanLinks>
        </FlexBox>
      </Grid>

      {arr?.map((d, ind) => {
        return (
          ind < 3 && (
            <Grid item xs={12} key={ind}>
              <RightsideProjects data={d} key={ind} last={ind === 2} />
            </Grid>
          )
        );
      })}
    </Grid>
  );
}

export default Rightside;
