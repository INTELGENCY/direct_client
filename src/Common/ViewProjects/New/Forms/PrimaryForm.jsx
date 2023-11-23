import { Grid, Grow, Typography } from "@mui/material";
import React, { useState } from "react";
import InputFields from "../../../InputFields/InputFields";
import dayjs from "dayjs";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";

function PrimaryForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={4}
        columnGap={2}
      >
        <Grid item xs={12}>
          <TypographyGrow variant={"h1"} text={"Primary Details"} />
        </Grid>
        <Grid item xs={12} sm={5.9} md={2.9}>
          <InputFields
            required
            type={"text"}
            name={"category"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.category}
            label={"Project Category"}
            placeholder={"Your Project Category"} 
            error={!!touched.category && !!errors.category}
            helperText={touched.category && errors.category}
          />
        </Grid>
        <Grid item xs={12} sm={5.9} md={2.9}>
          <InputFields
            type={"text"}
            label={"Project Number"}
            name={"number"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.number}
            error={!!touched.number && !!errors.number}
            helperText={touched.number && errors.number}
            placeholder={"Your Project Number"}
          />
        </Grid>
        <Grid item xs={12} sm={5.9} md={2.9}>
          <InputFields
            required
            placeholder={"Starting Date"}
            type={"date"}
            label={"Starting Date"}
            name={"startDate"}
            onChange={(e) => setFieldValue("startDate", e)}
            onBlur={handleBlur}
            value={values?.startDate}
            error={!!touched.startDate && !!errors.startDate}
            helperText={touched.startDate && errors.startDate}
          />
        </Grid>
        <Grid item xs={12} sm={5.9} md={2.9}>
          <InputFields
            required
            type={"date"}
            label={"Ending Date"}
            placeholder={"Ending Date"}
            name={"endDate"}
            onBlur={handleBlur}
            onChange={(e) => setFieldValue("endDate", e)}
            value={values?.endDate}
            error={!!touched.endDate && !!errors.endDate}
            helperText={touched.endDate && errors.endDate}
          />
        </Grid>
        <Grid item xs={12}>
          <InputFields
            type={"textbox"}
            rows={3}
            label={"Terms & Conditions"}
            placeholder={"Terms & Conditions For Projects"}
            name={"terms"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.terms}
            error={!!touched.terms && !!errors.terms}
            helperText={touched.terms && errors.terms}
          />
        </Grid>
        <Grid item xs={12}>
          <InputFields
            type={"textbox"}
            rows={3}
            label={"Customise"}
            name={"customise"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.customise}
            error={!!touched.customise && !!errors.customise}
            helperText={touched.customise && errors.customise}
            placeholder={"Any Extra Note Related To Projects"}
          />
        </Grid>
        <Grid item xs={12}>
          <InputFields
            type={"textbox"}
            rows={3}
            label={"Specifications"}
            name={"specification"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.specification}
            error={!!touched.specification && !!errors.specification}
            helperText={touched.specification && errors.specification}
            placeholder={"Write Project's specifications"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PrimaryForm;
