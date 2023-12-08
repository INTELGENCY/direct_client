import { Grid, Typography } from "@mui/material";
import InputFields from "../../InputFields/InputFields";
import Editor from "../../../Common/Editor";
import Filters from "./Filters";
import SearchbarFilter from "./SearchbarFilter";
function PublishSearch({ title, dateTitle, researcher }) {
  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Typography variant="h2" fontSize={"1.8rem"}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchbarFilter researcher={researcher} />
      </Grid>
      <Grid item xs={12}>
        <Editor label={"Description"} />
      </Grid>
      <Grid item xs={6}>
        <InputFields type={"date"} label={dateTitle} />
      </Grid>
    </Grid>
  );
}

export default PublishSearch;
