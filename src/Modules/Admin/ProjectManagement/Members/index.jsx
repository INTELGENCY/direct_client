import { Search } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CardSection from "./CardSections";

function Members() {
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container gap={6}>
      <Grid item xs={12}>
        <Stack direction={"row"} gap={1} justifyContent={"flex-end"}>
          <TextField
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
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>View All</MenuItem>
            <MenuItem value={20}>Management Team</MenuItem>
            <MenuItem value={30}>Industry</MenuItem>
            <MenuItem value={40}>Funding Agency</MenuItem>
          </Select>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <CardSection sectionName={"Management Team"} color={"#2980b9"} />
      </Grid>
      <Grid item xs={12}>
        <CardSection sectionName={"Industry"} color={"#9c88ff"} />
      </Grid>
      <Grid item xs={12}>
        <CardSection sectionName={"Funding Agency"} color={"#fa8231"} />
      </Grid>
    </Grid>
  );
}

export default Members;
