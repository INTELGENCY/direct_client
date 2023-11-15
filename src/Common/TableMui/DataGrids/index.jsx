import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, styled } from "@mui/material";
const CenterAlignedHeaderCell = styled("div")({
  textAlign: "center",
});
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 60,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  root: {
    borderWidth: "0px !important",
    border: "none",
  },
}));
function DataGrids({ checkboxSelection, dataRow, dataColumn }) {
  return (
    <Card sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          "&.MuiDataGrid-root": {
            border: "none !important",
            borderWidth: "none !important",
            outline: "none",
          },
        }}
        rows={dataRow ? dataRow : rows}
        columns={dataColumn ? dataColumn : columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        autoPageSize
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        density="comfortable"
      />
    </Card>
  );
}

export default DataGrids;
