import { Button, Chip, Fade, Grid, Tooltip, Typography } from "@mui/material";
import DataGrids from "../../../TableMui/DataGrids";

function ProposalsList() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "ProjectNames",
      headerName: "Project Names",
      width: 450,
      editable: true,
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
      editable: true,
    },
    {
      field: "Category",
      headerName: "Category",
      width: 150,
      editable: true,
    },
    {
      field: "StartDate",
      headerName: "Start Date",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "EndDate",
      headerName: "End Date",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ProjectStatus",
      headerName: "Project Status",
      width: 200,
      align: "center",
      headerAlign: "center",
      editable: true,
      renderCell: (param) => (
        <Chip color="success" clickable label={param.row.ProjectStatus} />
      ),
    },
    {
      field: "Proposals",
      headerName: "No. of Proposals",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ViewProposals",
      headerName: "View Proposals",
      width: 150,
      align: "center",
      headerAlign: "center",
      editable: true,
      renderCell: (param) => (
        <Button variant="contained" color="primary">
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
      Initiator: "Aman Ullah Mahfooz",
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
        <DataGrids checkboxSelection dataRow={rows} dataColumn={columns} />
      </Grid>
    </Grid>
  );
}

export default ProposalsList;
