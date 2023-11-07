import { Avatar, Button, Grid, MenuItem, Select, styled } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputFields from "../../../../Common/InputFields/InputFields";
import SelectFields from "../../../../Common/SelectFields";

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
const firmTypeArray = [
  "Partnership Firm",
  "One Person Company",
  "Sole Proprietorship",
  "Public Limited Company",
  "Private Limited Company",
  "Limited Liability Partnership",
];
const categoriesArray = [
  "Manufacturer",
  "Stockist",
  "Agent",
  "Freight Forwarder",
  "Research and Development Consultant",
  "Distributor",
  "Dealer",
  "Auctioneer",
  "Engineering/Design House",
];
function StepOne({
  setFieldValue,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setAvatarImg,
}) {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"flex-start"}
      rowGap={8}
      columnGap={4}
    >
      <Grid item xs={12} lg={5.7}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          rowGap={6}
        >
          {/* <Grid item xs={12}>
            <AvatarUpload />
          </Grid> */}
          <Grid item xs={12}>
            <InputFields
              label={"Company/Firm Name"}
              placeholder={"Enter Your Company Name"}
              type={"text"}
              name={"companyName"}
              value={values?.companyName}
              onBlur={handleBlur}
              disable
              onChange={handleChange}
              error={!!touched.companyName && !!errors.companyName}
              helperText={touched.companyName && errors.companyName}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Address (Office)"}
              placeholder={"Enter Your Address"}
              type={"text"}
              value={values?.addressOne}
              name={"addressOne"}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.addressOne && !!errors.addressOne}
              helperText={touched.addressOne && errors.addressOne}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Address Factory/Godown/Stock"}
              placeholder={"Enter Your Address"}
              type={"text"}
              value={values?.addressTwo}
              name={"addressTwo"}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.addressTwo && !!errors.addressTwo}
              helperText={touched.addressTwo && errors.addressTwo}
            />
          </Grid>
          <Grid item xs={5.9}>
            <InputFields
              label={"Registeration Number"}
              placeholder={"Enter Your Registeration Number"}
              type={"text"}
              value={values?.registrationNo}
              name={"registrationNo"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.registrationNo && !!errors.registrationNo}
              helperText={touched.registrationNo && errors.registrationNo}
            />
          </Grid>
          <Grid item xs={5.9}>
            <SelectFields
              label={"Type of Firm/Company"}
              placeholder={"Enter Your Registeration Number"}
              type={"firmType"}
              value={values?.firmType}
              name={"firmType"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!touched.firmType && !!errors.firmType}
              helperText={touched.firmType && errors.firmType}
              array={firmTypeArray}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectFields
              multiple={true}
              label={"Categories for Applying Projects"}
              type={"categories"}
              valueArray={values?.categories}
              name={"categories"}
              setFieldValue={setFieldValue}
              onBlur={handleBlur}
              error={!!touched.categories && !!errors.categories}
              helperText={touched.categories && errors.categories}
              array={categoriesArray}
            />
          </Grid>
          <GridUpload item xs={12}>
            <ButtonUpload
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              href="#file-upload"
              name={"image"}
            >
              Upload a file
              <VisuallyHiddenInput
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
                  } else {
                    setAvatarImg(null);
                  }
                }}
                onBlur={handleBlur}
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                type="file"
              />
            </ButtonUpload>
            <TextUpload>
              {values?.image ? values?.image?.name : "Upload Company Logo"}
            </TextUpload>
          </GridUpload>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={5.7}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          rowGap={6}
        >
          <Grid item xs={12} sm={5.8}>
            <InputFields
              label={"Email ID"}
              placeholder={"Enter Your Email"}
              onChange={handleChange}
              type={"email"}
              value={values?.email}
              disable
              name={"email"}
              onBlur={handleBlur}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={5.8}>
            <InputFields
              label={"Contact"}
              placeholder={"Enter Your Contact"}
              type={"phone"}
              onChange={handleChange}
              value={values?.phone}
              name={"phone"}
              disable
              onBlur={handleBlur}
              error={!!touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={5.8}>
            <InputFields
              label={"National Tax No."}
              placeholder={"Enter Your National Tax No."}
              type={"text"}
              onChange={handleChange}
              value={values?.nationalTax}
              name={"nationalTax"}
              onBlur={handleBlur}
              error={!!touched.nationalTax && !!errors.nationalTax}
              helperText={touched.nationalTax && errors.nationalTax}
            />
          </Grid>
          <Grid item xs={12} sm={5.8}>
            <InputFields
              label={"Sales Tax No."}
              placeholder={"Enter Your Sales Tax No."}
              type={"text"}
              onChange={handleChange}
              value={values?.SalesTax}
              name={"SalesTax"}
              onBlur={handleBlur}
              error={!!touched.SalesTax && !!errors.SalesTax}
              helperText={touched.SalesTax && errors.SalesTax}
            />
          </Grid>
          <Grid item xs={12} sm={5.8}>
            <InputFields
              label={"Tax ID"}
              placeholder={"Enter Your Tax ID"}
              type={"text"}
              value={values?.taxId}
              name={"taxId"}
              onBlur={handleBlur}
              error={!!touched.taxId && !!errors.taxId}
              onChange={handleChange}
              helperText={touched.taxId && errors.taxId}
            />
          </Grid>
          <Grid item xs={12} sm={5.8}>
            <InputFields
              label={"Reg Date"}
              placeholder={"Enter Your Reg Date"}
              value={values?.registrationDate}
              name={`registrationDate`}
              type={"date"}
              onBlur={handleBlur}
              error={!!touched.date && !!errors.date}
              helperText={touched.date && errors.date}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default StepOne;
