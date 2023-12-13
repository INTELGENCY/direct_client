import { Grid } from "@mui/material";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import FileUploadCompAdmin from "../../../FileUploadCompAdmin";

function CustomizableFields({
  values = [
    { name: "Budget" },
    { name: "Work Plans" },
    { name: "Timelines" },
    { name: "Gantt Chart" },
  ],
}) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={3}>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <TypographyGrow variant={"h2"} text={"Customizable Fields"} />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <FileUploadCompAdmin
          values={values}
          //   handleChange={handleChange}
          //   setFieldValue={setFieldValue}
        />
      </Grid>
    </Grid>
  );
}

export default CustomizableFields;
