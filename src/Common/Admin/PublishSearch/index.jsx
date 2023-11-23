import { Grid, Typography } from "@mui/material";
import InputFields from "../../InputFields/InputFields";
import SelectFields from "../../SelectFields";
import Editor from "../../../Common/Editor";
const arrayFields = ["Artificial Inteligence", "Data Sciences", "Manfacturer"];
function PublishSearch({title}) {
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Typography variant="h2" fontSize={"1.8rem"}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <InputFields type={"search"} label={"Search"} />
      </Grid>
      <Grid item xs={12}>
        <SelectFields array={arrayFields} label={"Select"} />
      </Grid>
      <Grid item xs={12}>
        <Editor label={"Description"} />
      </Grid>
      <Grid item xs={6}>
        <InputFields type={"date"} label={"Proposal Submission Date"} />
      </Grid>
    </Grid>
  );
}

export default PublishSearch;
