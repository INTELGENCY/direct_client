import { Grid, IconButton, InputAdornment, TextField, styled } from "@mui/material";
import InputFields from "../../../../InputFields/InputFields";
import { FilterList, Search } from "@mui/icons-material";
const GridCustom = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "2rem",
}));
const GridItem = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".5rem",
}));
function Filters() {
  return (
    <GridCustom item xs={12}>
      <TextField
        type="text"
        color="success"
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <GridItem>
        <FilterList />
        <span>Filter</span>
      </GridItem>
    </GridCustom>
  );
}

export default Filters;
