import { Avatar, Button, Card, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import DialogMui from "../../../../Common/DialogMui/DialogMui";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../Common/Spinner";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import axios from "axios";
import { keys } from "../../../../config";
import { IndustryCreateProfileValidation } from "../../../../Common/Validation/FormValidation";
import SectionThree from "../SectionThree";
import StepThree from "./StepThree";
import { useEffect } from "react";

const Container = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  paddingBlock: "40px",
}));
const GridItemThree = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
}));
const CancelButton = styled(Button)(({ theme }) => ({
  background: "transparent",
  border: "1px solid #8E0909",
  color: "#8E0909",
  width: "150px",
  "& .Mui-disabled": {
    border: "1px solid gray",
  },
  "&:hover": {
    border: "1px solid #8E0909",
  },
}));
const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.bg.greenMui,
  color: "white",
  width: "150px",
  "&:hover": {
    backgroundColor: theme.palette.bg.greenMuiHover,
    color: "white",
    width: "150px",
  },
}));

// const AvatarUpload = styled(Avatar)(({ theme }) => ({
//   width: "200px",
//   height: "200px",
//   marginLeft: "20px",
//   marginTop: "-200px",
// }));
function SectionTwo({ handleNext, handleReset, activeStep, setAvatarImg }) {
  const profile = useSelector((state) => state.profile.profile);
  const loginData = useSelector((state) => state.profile.profile);
  const [ProfileData, setProfileData] = useState({});
  const [DialogState, setDialogState] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setDialogState(true);
  };

  const handleClose = () => {
    setDialogState(false);
  };

  const [profileobj, setprofileObj] = useState({
    email: profile?.email,
    phone: profile?.phone,
    companyName: "",
    registrationNo: "",
    registrationDate: "",
    taxId: "",
    image: null,
    businessType: "",
    industryType: "",
    address: "",
    industrySpecialization: "",
    description: "",
  });
  const [isLoading, setIsLoadng] = useState(false);
  const onChange = (e) => {
    const name = e.target.name;
    console.log(name);
    const value = name == "image" || !name ? e.target.files[0] : e.target.value;
    setprofileObj((d) => {
      return {
        ...d,
        [name ? name : "image"]: value,
      };
    });
  };
  const checkerForValues = (target) => {
    const isArray = Array.isArray(target);
    const isString = !isArray;
    if (isArray) {
      if (!Array.isArray(target)) {
        return false;
      }
      if (target?.length === 0) {
        return false;
      }
      const res = target
        .map((e, i) => {
          return Object.values(e).find((value) => value == "" || !value);
        })
        .filter((e) => e !== undefined);
      if (res.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (isString) {
      const str = String(target || "");
      if (str.trim().length === 0) {
        return true;
      } else return false;
    }
  };
  const handleCreate = async (values, { resetForm }) => {
    console.log(values);
    let dataToSend = {};
    try {
      const getVal = (value) => {
        const isArray = Array.isArray(value);
        const isString = !isArray;

        return checkerForValues(value)
          ? isString
            ? ""
            : null
          : isString
          ? value
          : value.length > 0
          ? JSON.stringify(value)
          : null;
      };
      Object.keys(values).forEach((e) => {
        const data = values[e];
        const getvalue = getVal(data);
        if (getvalue !== null && getvalue !== "") {
          dataToSend[e] = getVal(data);
        }
      });

      console.log(dataToSend, "dataTosend");
    } catch (error) {
      console.log(error);
    }
    try {
      setIsLoadng(true);
      dispatch(setAlert({ status: null, text: null }));
      const formdata = new FormData();
      for (const key in dataToSend) {
        formdata.append(key, dataToSend[key]);
      }
      const res = await axios.post(
        keys.api + "industry/updateprofile",
        formdata
      );
      console.log(res, "response");
      const data = res.data;
      if (res.status === 200) {
        dispatch(
          setAlert({ status: "success", text: "profile updated Successfully" })
        );
        // resetForm();
      } else {
        dispatch(
          setAlert({ status: "error", text: "Couldn't update profile" })
        );
      }
      setIsLoadng(false);
    } catch (e) {
      setIsLoadng(false);
      dispatch(setAlert({ status: "error", text: "Couldn't update profile" }));
      console.log(e.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          keys.api + "industry/getmyprofile",
          { _id: loginData._id },
          {
            headers: {
              Authorization: `Bearer ${loginData.token}`,
            },
          }
        );
        console.log(response, "response");
        if (response.data.type === "success" || response.status === 200) {
          setProfileData(response.data.userDetails);
          if (response?.data?.userDetails?.image) {
            setAvatarImg(keys.api + response?.data?.userDetails?.image);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(ProfileData, "oerasfdsa");
  if (Object.keys(ProfileData).length === 0) {
    return null;
  }
  return (
    <Formik
      initialValues={{
        companyName: loginData.companyName,
        addressOne: ProfileData?.addressOne ? ProfileData.addressOne : "",
        addressTwo: ProfileData?.addressTwo ? ProfileData.addressTwo : "",
        registrationNo: ProfileData?.registrationNo
          ? ProfileData.registrationNo
          : "",
        firmType: ProfileData?.firmType ? ProfileData.firmType : "",
        registrationDate: ProfileData?.registrationDate
          ? ProfileData.registrationDate
          : "",
        taxId: ProfileData?.taxId ? ProfileData.taxId : "",
        nationalTax: ProfileData?.nationalTax ? ProfileData.nationalTax : "",
        SalesTax: ProfileData?.SalesTax ? ProfileData.SalesTax : "",
        image: ProfileData?.image ? ProfileData.image : "",
        industryType: ProfileData?.industryType ? ProfileData.industryType : "",
        industrySpecialization: ProfileData?.industrySpecialization
          ? ProfileData.industrySpecialization
          : "",
        email: loginData.email,
        phone: loginData.phone,
        description: ProfileData?.description ? ProfileData.description : "",
        pasProjectDefence: ProfileData?.pasProjectDefence
          ? ProfileData.pasProjectDefence
          : "",
        blacklisted: ProfileData?.blacklisted ? ProfileData.blacklisted : "",
        caseAgainstFirm: ProfileData?.caseAgainstFirm
          ? ProfileData.caseAgainstFirm
          : "",
        deposit: ProfileData?.deposit ? ProfileData.deposit : "",
        categories: ProfileData?.categories ? ProfileData.categories : [],
        partnerFirm:
          ProfileData?.partnerFirm?.length > 0
            ? ProfileData.partnerFirm
            : [{ name: "", type: "" }],
        localBank:
          ProfileData?.localBank?.length > 0
            ? ProfileData?.localBank
            : [{ bank: "", branch: "", accountNo: "" }],
        foreignBank:
          ProfileData?.foreignBank?.length > 0
            ? ProfileData.foreignBank
            : [{ name: "", type: "", awardedBy: "" }],
        registerWithGov:
          ProfileData?.registerWithGov?.length > 0
            ? ProfileData.registerWithGov
            : [
                {
                  organization: "",
                  regNo: "",
                  dateOfReg: "",
                  dateOfValidity: "",
                  category: "",
                },
              ],
        pastContract:
          ProfileData?.pastContract?.length > 0
            ? ProfileData.pastContract
            : [
                {
                  contract: "",
                  organization: "",
                  contractValue: "",
                  completed: "",
                },
              ],
      }}
      validationSchema={IndustryCreateProfileValidation}
      onSubmit={handleCreate}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Container>
              <Grid
                container
                rowGap={4}
                columnGap={6}
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                <Spinner isLoading={isLoading} />
                {/* <Grid item xs={12}>
                  <AvatarUpload />
                </Grid> */}
                <Grid item xs={12}>
                  {activeStep === 0 && (
                    <StepOne
                      setAvatarImg={setAvatarImg}
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      handleChange={handleChange}
                    />
                  )}
                  {activeStep === 1 && (
                    <StepTwo
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      handleChange={handleChange}
                    />
                  )}
                  {activeStep === 2 && (
                    <StepThree
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      handleChange={handleChange}
                    />
                  )}
                </Grid>
                <GridItemThree item xs={12}>
                  <CancelButton
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleReset}
                  >
                    Back
                  </CancelButton>
                  {activeStep === 2 ? (
                    <>
                      <NextButton type="submit" color="success">
                        Finish
                      </NextButton>
                      <DialogMui
                        title={"Congratulations"}
                        BodyText={
                          "Congratulations! Your profile is now complete. Thank you for providing all the necessary information. You're all set to enjoy the full benefits of our platform"
                        }
                        handleClose={handleClose}
                        open={DialogState}
                      />
                    </>
                  ) : (
                    <NextButton
                      type="button"
                      color="success"
                      onClick={handleNext}
                    >
                      Next
                    </NextButton>
                  )}
                </GridItemThree>
              </Grid>
            </Container>
          </form>
        );
      }}
    </Formik>
  );
}

export default SectionTwo;
