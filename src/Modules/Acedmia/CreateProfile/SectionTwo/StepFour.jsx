import { Grid, Typography } from "@mui/material";
import {
  book,
  bookChap,
  conference,
  copyRights,
  editorial,
  industrialDesigns,
  patents,
  researchArticles,
  technologyTransfered,
} from "./data";
import MultiInputSection from "../../../../Common/MultiInputSection";

function StepFour({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) {
  return (
    <Grid container gap={4} sx={{ paddingBottom: "20px" }}>
      <Grid item xs={12}>
        <Typography sx={{ mb: 4 }} variant={"h1"}>
          Intellectual Property
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"patentsSection"}
          LableHeadings={patents}
          values={values.patentsSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headingSection={"Intellectual Property/ Patent"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"copyRightsSection"}
          LableHeadings={copyRights}
          values={values.copyRightsSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headingSection={"Intellectual Property/ Copy Rights"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"industrialDesignsSection"}
          LableHeadings={industrialDesigns}
          values={values.industrialDesignsSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headingSection={"Intellectual Property/ Industrial Designs"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"technologyTransferedSection"}
          LableHeadings={technologyTransfered}
          values={values.technologyTransferedSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          headingSection={"Intellectual Property/ Technology Transfered"}
        />
      </Grid>
    </Grid>
  );
}

export default StepFour;
