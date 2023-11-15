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
  EmojiEvents,
  Propane,
  UploadFile,
} from "@mui/icons-material";
import { motion } from "framer-motion";

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
      ProjectNames: "Development of Brake Para",
      Category: "Defence",
      Initiator: "Aman Ullah",
      StartDate: "3/3/2021",
      EndDate: "3/3/2024",
      ProjectStatus: "ongoing",
      Proposals: "5",
      ViewProposals: "",
    },
    {
      id: 2,
      ProjectNames:
        "Nust Portal Pakistan’s indigenous submarine project reaches ‘mega milestone",
      Category: "Defence",
      Initiator: "Abdullah",
      StartDate: "30/3/2020",
      EndDate: "23/5/2024",
      ProjectStatus: "ongoing",
      Proposals: "12",
      ViewProposals: "",
    },
    {
      id: 3,
      ProjectNames:
        "Pakistan Air Force receives AEW&C radar equipment from Saab",
      Category: "Defence",
      Initiator: "Ali",
      StartDate: "30/3/2020",
      EndDate: "30/12/2024",
      ProjectStatus: "ongoing",
      Proposals: "1",
      ViewProposals: "",
    },
    {
      id: 4,
      ProjectNames: "Experts are here solve your business problem.",
      Category: "Defence",
      Initiator: "Abdullah",
      StartDate: "30/3/2022",
      EndDate: "30/9/2024",
      ProjectStatus: "ongoing",
      Proposals: "24",
      ViewProposals: "",
    },
    {
      id: 5,
      ProjectNames: "Radar equipment from Airforce",
      Category: "Defence",
      Initiator: "Usama",
      StartDate: "30/3/2022",
      EndDate: "30/6/2025",
      ProjectStatus: "ongoing",
      Proposals: "42",
      ViewProposals: "",
    },
    {
      id: 6,
      ProjectNames: "Submarine project reaches ‘mega milestone",
      Category: "Defence",
      Initiator: "Aman",
      StartDate: "30/3/2020",
      EndDate: "30/9/2025",
      ProjectStatus: "ongoing",
      Proposals: "24",
      ViewProposals: "",
    },
    {
      id: 7,
      ProjectNames: "The Brake Parachute System (BPS)",
      Category: "Defence",
      Initiator: "Abdullah",
      StartDate: "30/3/2020",
      EndDate: "30/3/2027",
      ProjectStatus: "ongoing",
      Proposals: "24",
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
