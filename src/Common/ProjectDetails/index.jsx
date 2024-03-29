import { styled } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { keys } from "../../config";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: ".5rem",
  ["@media screen  and (min-width:1799px)"]: {
    flexDirection: "row",
  },
  ["@media screen  and (max-width:1798px)"]: {
    flexDirection: "column",
  },
}));
const ItemOne = styled("div")(({ theme }) => ({
  ["@media screen  and (min-width:1799px)"]: {
    width: "53%",
  },
  ["@media screen and (max-width:1798px)"]: {
    width: "100%",
  },
}));
const ItemTwo = styled("div")(({ theme }) => ({
  ["@media screen  and (min-width:1799px)"]: {
    width: "48%",
  },
  width: "100%",
}));
function ProjectDetails() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(keys.api + "projects/getproject/?id=" + id)
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        setProjectData(e.result);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <ItemOne>
        <LeftSection data={projectData} />
      </ItemOne>
      <ItemTwo>
        <RightSection data={projectData} />
      </ItemTwo>
    </Container>
  );
}

export default ProjectDetails;
