import { Grid } from "@mui/material";
import React from "react";
import InputFields from "../../../../InputFields/InputFields";

function Compatibility() {
  return (
    <div>
      <Grid container>
        <Grid sx={{ p: 1 }} item md={12} lg={6}>
          <InputFields
            placeholder={""}
            label={"CPTR Equipment"}
            type={"text"}
            // name={"specification"}
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values?.specification}
            // error={!!touched.specification && !!errors.specification}
            // helperText={touched.specification && errors.specification}
          />
        </Grid>
        <Grid sx={{ p: 1 }} item md={12} lg={6}>
          <InputFields
            placeholder={""}
            label={"Integration Held Inventory"}
            type={"text"}
            // name={"specification"}
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values?.specification}
            // error={!!touched.specification && !!errors.specification}
            // helperText={touched.specification && errors.specification}
          />
        </Grid>
        <Grid sx={{ p: 1 }} item xs={12}>
          <InputFields
            placeholder={""}
            label={"Remarks"}
            type={"textbox"}
            rows={3}
            // name={"specification"}
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values?.specification}
            // error={!!touched.specification && !!errors.specification}
            // helperText={touched.specification && errors.specification}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Compatibility;
