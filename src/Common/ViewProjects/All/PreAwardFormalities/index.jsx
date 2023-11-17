import {
  Button,
  Card,
  Chip,
  Fade,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import DataGrids from "../../../TableMui/DataGrids";
import { useNavigate } from "react-router-dom";
import { customTheme } from "../../../../Theme/theme";
import IconsHeadings from "../../../AnimationMui/IconHeadings";
import {
  ArticleOutlined,
  Propane,
  SourceRounded,
  UploadFile,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function PreAwardFormalities() {
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
      headerName: "Funding Agency",
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
      field: "Proposals",
      headerName: "No. of Proposals",
      width: 150,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "ProposalsHighRating",
      headerName: "Proposals with High Rating",
      width: 300,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "ViewProposals",
      headerName: "View Proposals",
      width: 150,
      align: "center",
      headerAlign: "center",

      renderCell: (param) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/directportal/dashboard/proposallist")}
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
      Initiator: "Dr Amer Sohail Kashif",
      StartDate: "11/16/2023",
      EndDate: "11/3/2024",
      ProjectStatus: "ongoing",
      Proposals: "1",
      ProposalsHighRating: "1/1",
      fundingAgency: "Defence",
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
            text={"Pre-Award Formalities"}
            paddingLeft={2.7}
            paddingTop={3}
            paddingBottom={2}
            icons={<SourceRounded sx={{ color: "bg.darkBlue" }} />}
          />
          <DataGrids dataRow={rows} dataColumn={columns} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default PreAwardFormalities;
