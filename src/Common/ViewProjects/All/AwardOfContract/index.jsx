import {
  Button,
  Card,
  Chip,
  Fade,
  Grid,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DataGrids from "../../../TableMui/DataGrids";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../../../../Theme/theme";
import IconsHeadings from "../../../AnimationMui/IconHeadings";
import { EmojiEvents, Star } from "@mui/icons-material";
import { motion } from "framer-motion";
import url from "/pdf/approval of project by funding agency.pdf";
function AwardOfContract() {
  const navigate = useNavigate();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ProjectNames",
      headerName: "Project Names",
      width: 450,

      renderCell: (params) => (
        <Tooltip
          sx={{ cursor: "pointer" }}
          title={params.row.ProjectNames}
          placement="bottom-start"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <Typography paddingRight={3} noWrap variant="body1">
            {params.row.ProjectNames}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: "fundingAgency",
      headerName: "Project Names",
      width: 300,

      renderCell: (params) => (
        <Tooltip
          sx={{ cursor: "pointer" }}
          title={params.row.fundingAgency}
          placement="bottom-start"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <Typography paddingRight={3} noWrap variant="body1">
            {params.row.fundingAgency}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: "industry",
      headerName: "Industry Collaborator",
      width: 300,

      renderCell: (params) => (
        <Tooltip
          sx={{ cursor: "pointer" }}
          title={params.row.industry}
          placement="bottom-start"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <Typography paddingRight={3} noWrap variant="body1">
            {params.row.industry}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: "Initiator",
      headerName: "Initiator",
      width: 200,
    },
    {
      field: "Category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "StartDate",
      headerName: "Start Date",
      width: 150,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "EndDate",
      headerName: "End Date",
      width: 150,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "ProjectStatus",
      headerName: "Project Status",
      width: 200,
      align: "center",
      headerAlign: "center",

      renderCell: (param) => (
        <Chip color="success" clickable label={param.row.ProjectStatus} />
      ),
    },
    {
      field: "feedbackResearcher",
      headerName: "Feedback From Researcher",
      width: 300,

      renderCell: (params) => (
        <Stack direction="row" alignItems={"center"} gap={1}>
          <Rating
            name="text-feedback"
            value={4.3}
            readOnly
            precision={0.1}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Typography letterSpacing={1} variant={"caption"}>
            (4.2)
          </Typography>
        </Stack>
      ),
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Proposals",
      headerName: "No. of Proposals",
      width: 150,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "approveByFundingAgency",
      headerName: "Approved By Funding Agency",
      width: 300,
      align: "center",
      headerAlign: "center",

      renderCell: (param) => (
        <Chip
          color="success"
          clickable
          label={param.row.approveByFundingAgency}
        />
      ),
    },
    {
      field: "approvelDoc",
      headerName: "Approval Document By Funding Agency",
      width: 300,
      align: "center",
      headerAlign: "center",

      renderCell: (param) => (
        <a href={param.row.approvelDoc}>
          <Button
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            variant="contained"
            href={param.row.approvelDoc}
            color="primary"
            onClick={() => console.log(param.row.approvelDoc)}
          >
            View
          </Button>
        </a>
      ),
    },
    {
      field: "ViewProposals",
      headerName: "View Proposal",
      width: 150,
      align: "center",
      headerAlign: "center",

      renderCell: (param) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/directportal/dashboard/viewproposal")}
          variant="contained"
          color="primary"
        >
          View
        </Button>
      ),
      align: "center",
    },
  ];

  const rows = [
    {
      id: 1,
      ProjectNames: "Smart Ball Based Surveillance System using AI (BKV-1)",
      Category: "Defence",
      industry: "M/S Octathorn",
      Initiator: "Dr Amer Sohail Kashif",
      StartDate: "11/16/2023",
      EndDate: "11/3/2024",
      ProjectStatus: "ongoing",
      Proposals: "1",
      ProposalsHighRating: "1/1",
      fundingAgency: "Defence",
      approveByFundingAgency: "success",
      approvelDoc: "/pdf/approval of project by funding agency.pdf",
      feedbackResearcher: "",
      ViewProposals: "",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card
          sx={{
            boxShadow: customTheme.palette.boxShadows.boxShadowTable,
          }}
        >
          <IconsHeadings
            text={"Award Of Contract"}
            paddingLeft={2.7}
            paddingTop={3}
            paddingBottom={2}
            icons={<EmojiEvents sx={{ color: "bg.darkBlue" }} />}
          />
          <DataGrids dataRow={rows} dataColumn={columns} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default AwardOfContract;
