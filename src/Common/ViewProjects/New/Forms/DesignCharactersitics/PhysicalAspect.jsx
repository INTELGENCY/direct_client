import { Grid } from "@mui/material";
import InputFields from "../../../../InputFields/InputFields";

function PhysicalAspect() {
  return (
    <Grid container>
      <Grid sx={{ p: 1 }} item md={12} lg={6}>
        <InputFields
          placeholder={""}
          label={"Max Length"}
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
          label={"Min Length"}
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
          label={"Max Width"}
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
          label={"Min Width"}
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
          label={"Max Height"}
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
          label={"Min Height"}
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
          label={"Max Weight"}
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
          label={"Min Weight"}
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
  );
}

export default PhysicalAspect;
