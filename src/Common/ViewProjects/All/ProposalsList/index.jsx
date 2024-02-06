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
import { ArticleOutlined, Propane, UploadFile } from "@mui/icons-material";
import { motion } from "framer-motion";

function ProposalsList() {
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
          onClick={() => navigate("/directportal/dashboard/details")}
        >
          <Typography paddingRight={3} noWrap variant="body2">
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
          <Typography paddingRight={3} noWrap variant="body2">
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
      headerName: "Start Date of Proposal",
      width: 250,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "EndDate",
      headerName: "End Date of Proposal",
      width: 250,

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
      field: "ViewProposals",
      headerName: "View Proposals",
      width: 150,
      align: "center",
      headerAlign: "center",

      renderCell: (params) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            navigate(`/directportal/dashboard/proposallist/${params?.value}`)
          }
          variant="contained"
          color="primary"
        >
          {console.log(params)}
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
      StartDate: "December 16, 2023",
      EndDate: "January 16, 2024",
      ProjectStatus: "ongoing",
      Proposals: "1",
      ViewProposals: 90785643,
      fundingAgency: "Defence",
    },
    {
      id: 2,
      ProjectNames: "Mechanical Mine Field Breaching System",
      Category: "Defence",
      Initiator: "Dr Kashif Ahmad",
      StartDate: "December 12, 2023",
      EndDate: "January 12, 2024",
      ProjectStatus: "ongoing",
      Proposals: "5",
      ViewProposals: 90785644,
      fundingAgency: "Defence",
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
            text={"Proposals"}
            paddingLeft={2.7}
            paddingTop={3}
            paddingBottom={2}
            icons={<ArticleOutlined sx={{ color: "bg.darkBlue" }} />}
          />
          <DataGrids dataRow={rows} toolBarGrid dataColumn={columns} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProposalsList;
// 0px 2px 4px -1px rgba(-1,0,0,0.2), 0px 4px 12px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.1)
