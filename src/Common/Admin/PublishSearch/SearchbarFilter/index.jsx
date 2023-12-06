import {
  Fade,
  Grid,
  Grow,
  MenuItem,
  Paper,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import InputFields from "../../../InputFields/InputFields";
import Filters from "../Filters";
import { useState } from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import DisplayUsers from "../DisplayUsers";
import { motion } from "framer-motion";
const namesList = [
  { name: "Abdul", field: "Manfacturer", institute: "Foji Cements" },
  {
    name: "Abdullah",
    field: "Aritficial Intelegence",
    institute: "Intelgency Ltd",
  },
  { name: "Abdul Aziz", field: "Data Sciences", institute: "Rapidev" },
  { name: "Ali", field: "Game Developer", institute: "Rapidev Games" },
];
function SearchbarFilter({ filters }) {
  const [searchText, setSearchText] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const handleSearch = (event) => {
    console.log(event.target.value, "event");
    const query = event.target.value
    setSearchText(query);

    const filtered = namesList?.filter((name) =>
      name.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredNames(filtered);
  };
   const handleSelect = (value) => {
      if (!selectedNames.includes(value)) {
        setSelectedNames([...selectedNames, value]);
      }
     setSearchText(value);
     setFilteredNames([]);
   };
  const variants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    close: {
      opacity: 0,
    },
  };
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Filters filters={filters} />
      </Grid>
      <Grid item xs={12}>
        {/* <Grow in> */}
        <InputFields
          type={"search"}
          onChange={handleSearch}
          value={searchText}
          label={"Search"}
        />
        {searchText !== "" && (
          <Paper
            elevation={6}
            variants={variants}
            component={motion.div}
            initial={"close"}
            animate={"open"}
            sx={{ p: 3, pl: 0 }}
          >
            {filteredNames.length > 0 ? (
              filteredNames?.map((name, i) => (
                <MenuItem
                  variants={variants}
                  component={motion.div}
                  key={i}
                  value={i}
                  onClick={() => handleSelect(name.name)}
                >
                  <DisplayUsers dataUsers={name} />
                </MenuItem>
              ))
            ) : (
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Typography
                  textAlign={"center"}
                  variant="h5"
                  color={"text.grey"}
                  fontWeight={600}
                >
                  No User Found!
                </Typography>
                <SentimentDissatisfiedIcon sx={{ color: "text.grey" }} />
              </Stack>
            )}
          </Paper>
        )}
      </Grid>
      {/* </Grow> */}
    </Grid>
  );
}

export default SearchbarFilter;
