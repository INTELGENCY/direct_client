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
import { ExpandMore, Propane, Share } from "@mui/icons-material";
import MainHeadings from "../../../../Common/AnimationMui/MainHeadings";
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: "100%",
    editable: true,
    renderCell: (params) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
function Proposals() {
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
        <DataGrids checkboxSelection />
      </Grid>
    </Grid>
  );
}

export default Proposals;
