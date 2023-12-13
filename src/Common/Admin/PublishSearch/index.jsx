import { Button, Grid, Stack, Typography } from "@mui/material";
import InputFields from "../../InputFields/InputFields";
import Editor from "../../../Common/Editor";
import Filters from "./Filters";
import SearchbarFilter from "./SearchbarFilter";
import { motion } from "framer-motion";
function PublishSearch({ title, dateTitle, researcher, noTextBox,handleCloseModal }) {
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
      {noTextBox === false && (
        <Grid item xs={12}>
          <Editor label={"Description"} />
        </Grid>
      )}
      {noTextBox === false && (
        <Grid item xs={6}>
          <InputFields type={"date"} label={dateTitle} />
        </Grid>
      )}
      {handleCloseModal && (
        <Grid item sx={{ mt: 2 }} xs={12}>
          <Stack
            gap={1}
            direction={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Button
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              onClick={handleCloseModal}
              sx={{
                backgroundColor: "bg.slightlyLightRed",
                "&:hover": {
                  backgroundColor: "bg.normalRed",
                },
              }}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              variant="contained"
            >
              Assign
            </Button>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}

export default PublishSearch;
