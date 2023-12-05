import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SelectFields from "../../../SelectFields";

const arrayFields = ["Artificial Inteligence", "Data Sciences", "Manfacturer"];
function Filters({ filters }) {
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <SelectFields array={arrayFields} label={"Select Field"} />
      </Grid>
      {filters && (
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="byName"
              control={<Radio />}
              label="By Name"
            />
            <FormControlLabel
              value="byInstitute"
              control={<Radio />}
              label="By Institute"
            />
          </RadioGroup>
        </Grid>
      )}
    </Grid>
  );
}

export default Filters;
