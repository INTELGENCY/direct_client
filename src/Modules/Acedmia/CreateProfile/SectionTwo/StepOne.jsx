import { Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import InputFields from "../../../../Common/InputFields/InputFields";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MultiInputSection from "../../../../Common/MultiInputSection";
import {
  dataAwards,
  dataExperience,
  dataMembership,
  dataQualification,
  dataScopus,
  dataSocialMedia,
} from "./data";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const GridUpload = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
}));
const TextUpload = styled("span")(({ theme }) => ({
  color: "#484848",
  fontSize: ".8rem",
  fontWeight: "400",
  lineHeight: "166.5%",
}));
const ButtonUpload = styled(Button)(({ theme }) => ({
  color: "black",
  fontSize: ".8rem",
  border: "1px solid #D7D7D7",
  background: "linear-gradient(180deg, #FFF 0%, #929292 100%)",
  "&:hover": {
    color: "black",
    border: "1px solid #D7D7D7",
    background: "linear-gradient(180deg, #FFF 0%, #929292 100%)",
  },
}));
const dataArray = [
  "Degree Qualification",
  "Name of Educational Institute/University",
  "Date Of Starting",
  "Date of End",
];
function StepOne({
  values,
  errors,
  touched,
  handleBlur,
  setAvatarImg,
  handleChange,
  setFieldValue,
}) {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"flex-start"}
      rowGap={8}
      columnGap={4}
    >
      <Grid item xs={12}>
        <Grid
          container
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          rowGap={4}
        >
          <Grid item xs={12}>
            <Typography variant={"h1"}>Profile</Typography>
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"First Name"}
              placeholder={"Enter Your Name"}
              type={"text"}
              name={"firstName"}
              value={values?.firstName}
              disable
              // onBlur={handleBlur}
              // onChange={handleChange}
              // error={!!touched.firstName && !!errors.firstName}
              // helperText={touched.firstName && errors.firstName}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Last Name"}
              placeholder={"Enter Your Name"}
              type={"text"}
              name={"lastName"}
              disable
              value={values?.lastName}
              // onBlur={handleBlur}
              // onChange={handleChange}
              // error={!!touched.lastName && !!errors.lastName}
              // helperText={touched.lastName && errors.lastName}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Designation"}
              placeholder={"Enter Your Designation"}
              type={"text"}
              name={"designation"}
              value={values?.designation}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.designation && !!errors.designation}
              helperText={touched.designation && errors.designation}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Name of Current University"}
              placeholder={"Enter Your Name of Current University"}
              type={"text"}
              name={"currentUniversity"}
              value={values?.currentUniversity}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.currentUniversity && !!errors.currentUniversity}
              helperText={touched.currentUniversity && errors.currentUniversity}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Name of Department"}
              placeholder={"Enter Your Department"}
              type={"text"}
              name={"department"}
              value={values?.department}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.department && !!errors.department}
              helperText={touched.department && errors.department}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Email"}
              placeholder={"Enter Your Email"}
              type={"email"}
              name={"email"}
              disable
              value={values?.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </Grid>
          {/* <Grid item xs={5.9}>
            <InputFields
              label={"Telepone Number"}
              placeholder={"Enter Your Telepone Number*"}
              type={"text"}
              name={"telephone"}
              value={values?.telephone}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.telephone && !!errors.telephone}
              helperText={touched.telephone && errors.telephone}
            />
          </Grid> */}
          <Grid item xs={5.9}>
            <InputFields
              label={"Mobile Number"}
              placeholder={"Enter Your Mobile Number"}
              type={"text"}
              name={"phone"}
              disable
              value={values?.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Introductory Paragraph (2-3 lines)"}
              placeholder={"Your Introductory"}
              type={"textbox"}
              rows={4}
              name={"description"}
              value={values?.description}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.description && !!errors.description}
              helperText={touched.description && errors.description}
            />
          </Grid>
          <GridUpload item sx={{ mt: -8 }} xs={12}>
            <ButtonUpload
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              href="#file-upload"
            >
              Upload a file
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                name={"image"}
                onChange={(e) => {
                  setFieldValue("image", e.target.files[0]);
                  if (e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setAvatarImg(e.target.result);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
                onBlur={handleBlur}
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
              />
            </ButtonUpload>
            <TextUpload>
              {values?.image?.name
                ? values?.image?.name
                : "upload your profile pic"}
            </TextUpload>
          </GridUpload>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          LableHeadings={dataQualification}
          values={values.qualificationSection}
          errors={errors}
          sectionName={"qualificationSection"}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          inputData={dataArray}
          headingSection={"Profile/Qualtification"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          LableHeadings={dataExperience}
          values={values.experienceSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          inputData={dataArray}
          sectionName={"experienceSection"}
          headingSection={"Profile/Experience"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          LableHeadings={dataAwards}
          values={values.awardsSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          inputData={dataArray}
          headingSection={"Profile/Awards"}
          sectionName={"awardsSection"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          LableHeadings={dataScopus}
          values={values.scopusSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          inputData={dataArray}
          sectionName={"scopusSection"}
          headingSection={"Profile/ Web of Science / Scopus"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          LableHeadings={dataSocialMedia}
          sectionName={"socialMediaSection"}
          values={values.socialMediaSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          inputData={dataArray}
          headingSection={"Profile/ Social Media"}
        />
      </Grid>
      <Grid item xs={12}>
        <MultiInputSection
          sectionName={"membershipSection"}
          LableHeadings={dataMembership}
          values={values.membershipSection}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          inputData={dataArray}
          headingSection={"Profile/ Membership"}
        />
      </Grid>
    </Grid>
  );
}

export default StepOne;
