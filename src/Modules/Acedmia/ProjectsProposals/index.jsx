import {
  Button,
  Card,
  Chip,
  Fade,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import IconsHeadings from "../../../Common/AnimationMui/IconHeadings";
import { List } from "@mui/icons-material";
import DataGrids from "../../../Common/TableMui/DataGrids";
import { customTheme } from "../../../Theme/theme";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PropjectsProposals() {
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
          <Typography paddingRight={3} noWrap variant="body2">
            {params.row.ProjectNames}
          </Typography>
        </Tooltip>
      ),
    },

    {
      field: "EndDate",
      headerName: "Submission End Date",
      width: 250,

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
      field: "ViewProposals",
      headerName: "View Proposals",
      width: 150,
      align: "center",
      headerAlign: "center",

      renderCell: (param) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/academia/proposallists")}
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
      EndDate: "11th November 2024",
      ProjectStatus: "Review not Submitted",
      Proposals: "1",
      ViewProposals: "",
      fundingAgency: "Defence",
    },
  ];
  return (
    <Grid container sx={{ mt: 6, mb: 4 }} gap={4}>
      <Grid item xs={12}>
        <IconsHeadings
          variantHeadings={"h2"}
          text={"Projects"}
          icons={<List sx={{ color: customTheme.palette.bg.darkBlue }} />}
        />
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 2,
            boxShadow: customTheme.palette.boxShadows.boxShadowTable,
          }}
        >
          <DataGrids dataRow={rows} dataColumn={columns} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default PropjectsProposals;
