import {
  Button,
  Card,
  Chip,
  Fade,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { customTheme } from "../../../../Theme/theme";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShareOutlined, Star } from "@mui/icons-material";

function ProposalTable() {
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      companyName: "M/S Octathorn",
      submissionDate: "11/3/2024",
      researcherName: "Abdullah Asif",
    },
  ];
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
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 250,
    },
    {
      field: "researcherName",
      headerName: "Status",
      width: 250,
      renderCell: (params) => (
        <>
          <Chip color="error" label={"Action Required"} />
        </>
      ),
    },
    {
      field: "feedbackResearcher",
      headerName: "Feedback From Researcher",
      width: 300,

      renderCell: (params) => (
        <Stack direction="row" alignItems={"center"} gap={1}>
          <Typography variant={"body2"}>Feedback not given</Typography>
        </Stack>
      ),
      align: "center",
      headerAlign: "center",
    },
    {
      field: "viewBtn",
      headerName: "View/Rate Proposal",
      width: 200,

      renderCell: (params) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/academia/rateproposal")}
          variant="contained"
        >
          View
        </Button>
      ),
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Card
      sx={{ p: 2, boxShadow: customTheme.palette.boxShadows.boxShadowTable }}
    >
      <DataGrids dataRow={rows} dataColumn={columns} />
    </Card>
  );
}

export default ProposalTable;
