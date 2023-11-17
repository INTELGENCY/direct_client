import { Button } from "@mui/material";
import { customTheme } from "../../../../Theme/theme";
import { Download } from "@mui/icons-material";

export const columnsFiles = [
  {
    field: "id",
    headerName: "No.",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "fileName",
    headerName: "File Name",
    width: 300,
  },
  {
    field: "upload",
    headerName: "Uploaded By",
    width: 250,
  },
  {
    field: "type",
    headerName: "File Type",
    width: 250,

    align: "center",
    headerAlign: "center",
  },
  {
    field: "size",
    headerName: "Size",
    width: 200,

    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Uploaded Date",
    width: 200,

    align: "right",
    headerAlign: "right",
  },
  {
    field: "download",
    headerName: "Download",
    width: 300,

    align: "center",
    headerAlign: "center",
    renderCell: () => (
      <Button
        sx={{
          backgroundColor: customTheme.palette.bg.lightPurple,
          "&:hover": {
            backgroundColor: customTheme.palette.bg.lightPurple,
          },
        }}
        variant="contained"
        startIcon={<Download />}
      >
        Download
      </Button>
    ),
  },
];

export const rowsFiles = [
  {
    id: 1,
    fileName: "Snow",
    size: "45KBs",
    upload: "Jon",
    type: "PNG",
    date: "Nov 10, 2022",
  },
  {
    id: 2,
    fileName: "Lannister",
    size: "45KBs",
    upload: "Cersei",
    type: "PNG",
    date: "Nov 09, 2022",
  },
  {
    id: 3,
    fileName: "Lannister",
    size: "45KBs",
    upload: "Jaime",
    type: "PNG",
    date: "Nov 08, 2022",
  },
  {
    id: 4,
    fileName: "Stark",
    size: "45KBs",
    upload: "Arya",
    type: "PNG",
    date: "Nov 7, 2022",
  },
  {
    id: 5,
    fileName: "Targaryen",
    size: "45KBs",
    upload: "Daenerys",
    type: "PNG",
    date: "Nov 06, 2022",
  },
  {
    id: 6,
    fileName: "Melisandre",
    size: "45KBs",
    upload: "Abdullah",
    type: "PNG",
    date: "Nov 05, 2022",
  },
  {
    id: 7,
    fileName: "Clifford",
    size: "45KBs",
    upload: "Ferrara",
    date: "Nov 04, 2022",
    type: "PNG",
  },
  {
    id: 8,
    fileName: "Frances",
    size: "45KBs",
    upload: "Rossini",
    date: "Nov 03, 2022",
    type: "PNG",
  },
  {
    id: 9,
    fileName: "Roxie",
    size: "45KBs",
    type: "PNG",
    upload: "Harvey",
    date: "Nov 02, 2022",
  },
];
