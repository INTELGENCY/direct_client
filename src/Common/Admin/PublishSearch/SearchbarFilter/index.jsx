import { Grid } from "@mui/material";
import Filters from "../Filters";
import { useEffect, useState } from "react";
import DisplayUsers from "../DisplayUsers";
import AutocompleteMui from "../../../AutocompleteMui";
const namesList = [
  { name: "Abdul", field: "Manfacturer", institute: "Foji Cements" },
  {
    name: "Abdullah",
    field: "Artificial Inteligence",
    institute: "Intelgency Ltd",
  },
  { name: "Abdul Aziz", field: "Data Sciences", institute: "Rapidev" },
  { name: "Ali", field: "Artificial Inteligence", institute: "Rapidev Games" },
  {
    name: "Osama",
    field: "Artificial Inteligence",
    institute: "Rapidev Games",
  },
  {
    name: "Hamid",
    field: "Artificial Inteligence",
    institute: "Rapidev Games",
  },
];
function SearchbarFilter({ researcher }) {
  const [selectedValue, setSelectedValue] = useState("byName");
  const [selectedValueField, setSelectedValueField] = useState("None");
  const [DataArray, setDataArray] = useState([namesList]);

  console.log(DataArray, "DataArray");
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleValueField = (event) => {
    setSelectedValueField(event.target.value);
  };
  useEffect(() => {
    const SearchFilterByFields = () => {
      if (selectedValueField !== "None") {
        const FilteredData = namesList?.filter(
          (e) => e?.field === selectedValueField
        );
        setDataArray(FilteredData);
      } else {
        setDataArray(namesList);
      }
    };
    SearchFilterByFields(namesList);
  }, [selectedValueField]);

  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Filters
          selectedValue={selectedValue}
          selectedValueField={selectedValueField}
          handleRadioChange={handleRadioChange}
          handleValueFieldChange={handleValueField}
          researcher={researcher}
        />
      </Grid>
      <Grid item xs={12}>
        <AutocompleteMui
          dataSearch={DataArray}
          placeholder={"Search..."}
          Content={DisplayUsers}
          select={selectedValueField}
          filterSelect={selectedValue}
        />
      </Grid>
    </Grid>
  );
}

export default SearchbarFilter;
