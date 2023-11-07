import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import MainHeadings from "../../../../Common/AnimationMui/MainHeadings";
import { Add, FilterList, Search } from "@mui/icons-material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import { useState } from "react";
import AddSubAdmin from "../AddSubAdmin";

function ViewLists() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Grid container gap={4} sx={{ mt: 8 }}>
      <Grid item xs={12}>
        <MainHeadings text={"Sub-Admins"} />
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            onClick={handleClickOpen}
            startIcon={<Add />}
            variant="contained"
            color={"success"}
          >
            Add SubAdmin
          </Button>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <TextField
              color="success"
              type="text"
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
            <IconButton>
              <FilterList />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <DataGrids checkboxSelection />
      </Grid>
      <AddSubAdmin setOpen={setOpen} open={open} />
    </Grid>
  );
}

export default ViewLists;
