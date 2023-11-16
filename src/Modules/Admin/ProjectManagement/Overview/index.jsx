import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  styled,
} from "@mui/material";
import InfoCards from "./InfoCards";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import {
  AdminPanelSettings,
  AttachFile,
  Cloud,
  TaskSharp,
} from "@mui/icons-material";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import { CardsData } from "./data";
const columnsFiles = [
  {
    field: "id",
    headerName: "No.",
    width: 60,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "fileName",
    headerName: "File Name",
    width: 200,
    editable: true,
  },
  {
    field: "upload",
    headerName: "Uploaded By",
    width: 150,
    editable: true,
  },
  {
    field: "size",
    headerName: "Size",
    width: 100,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
];

const rowsFiles = [
  {
    id: 1,
    fileName: "Snow",
    size: "45KBs",
    upload: "Jon",
    date: "Nov 10, 2022",
  },
  {
    id: 2,
    fileName: "Lannister",
    size: "45KBs",
    upload: "Cersei",
    date: "Nov 09, 2022",
  },
  {
    id: 3,
    fileName: "Lannister",
    size: "45KBs",
    upload: "Jaime",
    date: "Nov 08, 2022",
  },
  {
    id: 4,
    fileName: "Stark",
    size: "45KBs",
    upload: "Arya",
    date: "Nov 7, 2022",
  },
  {
    id: 5,
    fileName: "Targaryen",
    size: "45KBs",
    upload: "Daenerys",
    date: "Nov 06, 2022",
  },
  {
    id: 6,
    fileName: "Melisandre",
    size: "45KBs",
    upload: "Abdullah",
    date: "Nov 05, 2022",
  },
  {
    id: 7,
    fileName: "Clifford",
    size: "45KBs",
    upload: "Ferrara",
    date: "Nov 04, 2022",
  },
  {
    id: 8,
    fileName: "Frances",
    size: "45KBs",
    upload: "Rossini",
    date: "Nov 03, 2022",
  },
  {
    id: 9,
    fileName: "Roxie",
    size: "45KBs",
    upload: "Harvey",
    date: "Nov 02, 2022",
  },
];
const columnsSubadmin = [
  {
    field: "id",
    headerName: "No.",
    width: 60,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    editable: true,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Avatar sizes="small" alt={`${params.row.name}`} src={""} />
        <Typography variant="body2" fontWeight={500}>
          {params.row.name}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
    editable: true,
  },
  {
    field: "joinDate",
    headerName: "Present in Team Since",
    width: 200,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
];

const rowSubadmin = [
  { id: 1, name: "Snow", role: "Project Manager", joinDate: "Nov 05, 2022" },
  {
    id: 2,
    name: "Lannister",
    role: "Project Manager",
    joinDate: "Nov 05, 2022",
  },
  {
    id: 3,
    name: "Lannister",
    role: "Project Manager",
    joinDate: "Nov 05, 2022",
  },
  { id: 4, name: "Stark", role: "Project Manager", joinDate: "Nov 05, 2022" },
  {
    id: 5,
    name: "Targaryen",
    role: "Project Manager",
    joinDate: "Nov 05, 2022",
  },
  {
    id: 6,
    name: "Melisandre",
    role: "Project Manager",
    ajoinDate: "Nov 05, 2022",
  },
  {
    id: 7,
    name: "Clifford",
    role: "Project Manager",
    joinDate: "Nov 05, 2022",
  },
  { id: 8, name: "Frances", role: "Project Manager", joinDate: "Nov 05, 2022" },
  { id: 9, name: "Roxie", role: "Project Manager", joinDate: "Nov 05, 2022" },
];
const columnsTasks = [
  {
    field: "id",
    headerName: "No.",
    width: 60,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "taskName",
    headerName: "Task Name",
    width: 300,
    editable: true,
    renderCell: (params) => (
      <Tooltip
        sx={{ cursor: "pointer" }}
        arrow
        TransitionComponent={Zoom}
        placement="bottom-start"
        title={params.row.taskName}
      >
        <Typography variant="body2" paddingRight={3} noWrap fontWeight={500}>
          {params.row.taskName}
        </Typography>
      </Tooltip>
    ),
  },
  {
    field: "progress",
    headerName: "Progress",
    editable: true,
    align: "right",
    headerAlign: "right",
    renderCell: (params) => (
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={params.row.progress} />
      </Box>
    ),
    width: 600,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 200,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "detail",
    headerName: "View Details",
    editable: true,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => <Button variant={"contained"}>View</Button>,
    width: 200,
  },
];

const rowsTasks = [
  {
    id: 1,
    taskName: "Snow Lannister Lannister Lannister Lannister",
    progress: 89,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 2,
    taskName: "Lannister",
    progress: 9,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 3,
    taskName: "Lannister",
    progress: 93,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 4,
    taskName: "Stark",
    progress: 82,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 5,
    taskName: "Targaryen",
    progress: 13,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 6,
    taskName: "Melisandre",
    progress: 53,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 7,
    taskName: "Clifford",
    progress: 23,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 8,
    taskName: "Frances",
    progress: 56,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
  {
    id: 9,
    taskName: "Roxie",
    progress: 76,
    dueDate: "Nov 05, 2022",
    detail: "",
  },
];
const StyledIconCloud = styled(Cloud)(({ theme }) => ({
  color: theme.palette.bg.darkBlue,
  fontSize: "20px",
}));
const StyledIconAdminPanelSettings = styled(AdminPanelSettings)(
  ({ theme }) => ({
    color: theme.palette.bg.darkBlue,
    fontSize: "20px",
  })
);
const StyledIconTaskSharp = styled(TaskSharp)(({ theme }) => ({
  color: theme.palette.bg.darkBlue,
  fontSize: "20px",
}));
function Overview() {
  return (
    <Grid container rowGap={2} justifyContent={"space-between"}>
      <Grid item xs={12}>
        <Grid alignItems="stretch" container justifyContent={"space-between"}>
          {CardsData?.map((e, i) => (
            <Grid item xs={3.9}>
              <InfoCards dataCards={e} key={i} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={6.85}>
        <Card elevation={4} sx={{ pt: 2 }}>
          <IconsHeadings
            paddingLeft={2}
            paddingBottom={2}
            text={"Latest Attachments"}
            icons={
              <AttachFile
                sx={{
                  color: "bg.darkBlue",
                  fontSize: "20px",
                }}
              />
            }
          />
          <DataGrids dataRow={rowsFiles} dataColumn={columnsFiles} />
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card elevation={4} sx={{ pt: 2 }}>
          <IconsHeadings
            paddingLeft={2}
            paddingBottom={2}
            text={"Management Team"}
            icons={<StyledIconAdminPanelSettings />}
          />
          <DataGrids dataRow={rowSubadmin} dataColumn={columnsSubadmin} />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card elevation={4} sx={{ pt: 2 }}>
          <IconsHeadings
            paddingLeft={2}
            paddingBottom={2}
            text={"Tasks"}
            icons={<StyledIconTaskSharp />}
          />
          <DataGrids dataRow={rowsTasks} dataColumn={columnsTasks} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Overview;

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{ borderRadius: "10px", height: "5px" }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
