import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import { ExpandMore, Propane, Share, ShareOutlined } from "@mui/icons-material";
import MainHeadings from "../../../../Common/AnimationMui/MainHeadings";
import { useNavigate } from "react-router-dom";
const rows = [
  {
    id: 1,
    companyName: "Rapidev",
    submissionDate: "2/2/2022",
    researcherName: "Abdullah Asif",
  },
  {
    id: 2,
    companyName: "Intelgency",
    submissionDate: "3/2/2022",
    researcherName: "Aman Ullah",
  },
  {
    id: 3,
    companyName: "Systems Ltd",
    submissionDate: "4/2/2022",
    researcherName: "",
  },
  {
    id: 4,
    companyName: "Zones Ltd",
    submissionDate: "7/2/2022",
    researcherName: "Ali",
  },
];
function Proposals() {
  const navigate = useNavigate();
  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 300,
      editable: true,
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 250,
      editable: true,
    },
    {
      field: "researcherName",
      headerName: "Assigned to",
      width: 250,
      renderCell: (params) =>
        params.row.researcherName === "" ||
        params.row.researcherName === undefined ? (
          <Button variant="contained" startIcon={<ShareOutlined />}>
            Share
          </Button>
        ) : (
          params.row.researcherName
        ),
    },
    {
      field: "viewBtn",
      headerName: "Actions",
      width: 100,
      editable: true,
      renderCell: (params) => (
        <Button
          onClick={() => navigate("/directportal/dashboard/viewproposal")}
          variant="contained"
        >
          View
        </Button>
      ),
    },
  ];
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <MainHeadings variant={"h2"} text={"Proposals"} />

          <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <Button
              color="success"
              sx={{ textTransform: "capitalize" }}
              variant="outlined"
              endIcon={<Share />}
            >
              Share
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <DataGrids dataRow={rows} dataColumn={columns} />
      </Grid>
    </Grid>
  );
}

export default Proposals;
