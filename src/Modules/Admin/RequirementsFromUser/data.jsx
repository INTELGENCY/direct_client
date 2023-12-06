import { Button } from "@mui/material";
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
    headerName: "Funding Agency",
    width: 400,
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
    renderCell: (param) => (
      <Button
        variant="contained"
        target="_blank"
        href={param.row?.url}
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
    fileName: "Defence",
    size: "45KBs",
    upload: "Ali",
    type: "pdf",
    date: "Nov 18, 2023",
    url: "/pdf/Design & Development of a Smart Ball Based Surveil.pdf",
  },
  {
    id: 2,
    fileName: "Systems Ltd",
    size: "45KBs",
    upload: "Systems Ltd",
    type: "pdf",
    date: "Nov 18, 2023",
    url: "/pdf/Annexure-C (Budget Breakdown) Financial.pdf",
  },
  {
    id: 3,
    fileName: "Funds Utilization Oraganization",
    size: "523KBs",
    upload: "Funds Utilization Oraganization",
    type: "pdf",
    date: "Nov 18, 2023",
    url: "/pdf/Annexure-Q (Funds Utilization Report ).pdf",
  },
  {
    id: 4,
    fileName: "Manufacturing Oraganization",
    size: "523KBs",
    upload: "Manufacturing Oraganization",
    type: "pdf",
    date: "Nov 18, 2023",
    url: "/pdf/Annexure-Q (Funds Utilization Report ).pdf",
  },
];
