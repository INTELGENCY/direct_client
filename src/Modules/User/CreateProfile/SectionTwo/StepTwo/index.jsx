import { Button, Grid, Typography } from "@mui/material";
import InputFields from "../../../../../Common/InputFields/InputFields";
import TableMui from "../../../../../Common/TableMui/CreateProfileTable";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import TablesSecTwo from "./TablesSecTwo";
import { SecFourArray, SecOneArray, SecSixArray, SecTwoArray } from "./data";

function StepTwo({
  values,
  setFieldValue,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  return (
    <Grid container rowGap={10} sx={{ paddingBottom: "20px" }}>
      <Grid item xs={12}>
        <TablesSecTwo
          values={values.partnerFirm}
          sectionName={"partnerFirm"}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          ttext={
            "Indicate partnership with any other firm as JV, consortium or  association etc:"
          }
          headerArray={SecOneArray}
        />
      </Grid>
      <Grid item xs={12}>
        <TablesSecTwo
          values={values?.localBank}
          sectionName={"localBank"}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headerArray={SecTwoArray}
          ttext={
            "Local Bank Accounts. Indicate in ‘Remarks’ whether account is in local or foreign currency"
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TablesSecTwo
  
          values={values.foreignBank}
          sectionName={"foreignBank"}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headerArray={SecTwoArray}
          ttext={
            "Foreign Bank Accounts. Indicate in ‘Remarks’ whether account is in local or foreign currency"
          }
        />
      </Grid>
      <Grid item xs={12}> 
        <TablesSecTwo
          values={values.registerWithGov}
          sectionName={"registerWithGov"}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headerArray={SecFourArray}
          ttext={
            "Are you registered with any Government or Semi-Government set-up (other than the Defence Establishment)? If so, please indicate:"
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TablesSecTwo
          values={values.pastContract}
          sectionName={"pastContract"}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headerArray={SecSixArray}
          ttext={
            "Indicate past performance of your firm with all types of Govt, semi-Govt, Civil and Military Organizations (attach list if required):"
          }
        />
      </Grid>
    </Grid>
  );
}

export default StepTwo;

{
  /* <Grid item xs={12} sx={{ height: "100%" }}>
    <InputFields
      rows={5}
      label={"Company Description"}
      type={"textbox"}
      placeholder={"Your Company Description"}
      value={values?.description}
      name="description"
      onBlur={handleBlur}
      onChange={handleChange}
      error={!!touched.description && !!errors.description}
      helperText={touched.description && errors.description}
    />
  </Grid>
  <Grid item xs={7}>
    <InputFields
      label={"Industry Type"}
      type={"text"}
      placeholder={"Your Industry Type"}
      value={values?.industryType}
      name="industryType"
      onBlur={handleBlur}
      onChange={handleChange}
      error={!!touched.industryType && !!errors.industryType}
      helperText={touched.industryType && errors.industryType}
    />
  </Grid>
  <Grid item xs={7}>
    <InputFields
      label={"Industry Specialization"}
      type={"text"}
      placeholder={"Your Industry Specialization"}
      value={values?.industrySpecialization}
      name="industrySpecialization"
      onBlur={handleBlur}
      onChange={handleChange}
      error={
        !!touched.industrySpecialization && !!errors.industrySpecialization
      }
      helperText={
        touched.industrySpecialization && errors.industrySpecialization
      }
    />
  </Grid> */
}
