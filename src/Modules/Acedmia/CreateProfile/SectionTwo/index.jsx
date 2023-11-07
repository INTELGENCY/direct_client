import { Button, Card, Fade, Grid, Grow, Zoom, styled } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo ";
import DialogMui from "../../../../Common/DialogMui/DialogMui";
import { Formik } from "formik";
import { formAcademiaSchema } from "../../../../Common/Validation/FormValidation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import { setAlert } from "../../../../Store/Features/AlertSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { keys } from "../../../../config";
import { TransitionGroup } from "react-transition-group";

const Container = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  paddingBlock: "40px",
  marginTop: "100px",
}));
const GridItemThree = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
}));
const CancelButton = styled(Button)(({ theme }) => ({
  border: "1px solid #8E0909",
  background: "transparent",
  color: "#8E0909",
  width: "150px",
}));
const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.bg.greenDark,
  color: "white",
  width: "150px",
  "&:hover": {
    backgroundColor: theme.palette.bg.greenDark,
    color: "white",
    width: "150px",
  },
}));
const SliderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  border: "1px solid green",
  overflow: "hidden",
  // transition:"transform 2s ease-in-out",
}));
const SliderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  border: "1px solid red",
  // display: "flex",
  // flexWrap: "nowrap",
  // transition: "all 2s ease-in-out",
}));
const SliderItemOne = styled("div")(({ theme }) => ({
  width: "100%",
  flexShrink: "0",
  border: "5px solid yellow",
  transition: "all 2s ease-in-out",
}));
// const SliderItemTwo = styled("div")(({ theme }) => ({
//   width: "100%",
//   border: "5px solid purple",
//   transform:"translateX(-100%)"
// }));
function SectionTwo({ handleNext, handleReset, activeStep, setAvatarImg }) {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.profile.profile);
  const [isLoading, setIsLoadng] = useState(false);
  const [DialogState, setDialogState] = useState(false);
  const [Sliders, setSliders] = useState(1);
  const [ProfileData, setProfileData] = useState({});
  console.log(ProfileData, "ProfileData");
  const handleClickOpen = () => {
    setDialogState(true);
  };

  const handleClose = () => {
    setDialogState(false);
  };
  const checkerForValues = (target) => {
    const isArray = Array.isArray(target);
    const isString = !isArray;
    if (isArray) {
      if (!Array.isArray(target)) {
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
  const handleCreate = async (values) => {
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
          : JSON.stringify(value);
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
        keys.api + "academia/updateprofile",
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
      console.log(e);
    }
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          keys.api + "academia/getmyprofile",
          { _id: loginData._id },
          {
            headers: {
              Authorization: `Bearer ${loginData.token}`,
            },
          }
        );
        // console.log(response, "response");
        if (response?.data?.type === "success" || response?.status === 200) {
          setProfileData(response?.data?.userDetails);
          if (response?.data?.userDetails?.image) {
            setAvatarImg(keys.api + response?.data?.userDetails?.image);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);
  if (Object.keys(ProfileData).length === 0) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        firstName: loginData?.firstName,
        lastName: loginData?.lastName,
        designation: ProfileData?.designation ? ProfileData.designation : "",
        currentUniversity: ProfileData?.currentUniversity
          ? ProfileData.currentUniversity
          : "",
        image: ProfileData?.image ? ProfileData.image : "",
        department: ProfileData?.department ? ProfileData.department : "",
        email: loginData.email,
        phone: loginData.phone,
        telephone: ProfileData?.telephone ? ProfileData.telephone : "",
        description: ProfileData?.description ? ProfileData.description : "",
        qualificationSection:
          ProfileData?.qualificationSection?.length > 0
            ? ProfileData?.qualificationSection
            : [{ degree: "", university: "", start: "", end: "" }],
        experienceSection:
          ProfileData?.experienceSection?.length > 0
            ? ProfileData?.experienceSection
            : [{ post: "", university: "", start: "", end: "" }],
        awardsSection:
          ProfileData?.awardsSection?.length > 0
            ? ProfileData?.awardsSection
            : [{ title: "", year: "", awardedBy: "" }],
        scopusSection:
          ProfileData?.scopusSection?.length > 0
            ? ProfileData?.scopusSection
            : [{ scopus: "", WoS: "", profileScopus: "", scienceScopus: "" }],
        socialMediaSection:
          ProfileData?.socialMediaSection?.length > 0
            ? ProfileData?.socialMediaSection
            : [{ scopus: "", WoS: "", profileScopus: "", scienceScopus: "" }],
        membershipSection:
          ProfileData?.membershipSection?.length > 0
            ? ProfileData?.membershipSection
            : [{ title: "", name: "", start: "", end: "" }],
        researchProjectsSection:
          ProfileData?.researchProjectsSection?.length > 0
            ? ProfileData?.researchProjectsSection
            : [
                {
                  type: "",
                  sponcer: "",
                  title: "",
                  status: "",
                  cost: "",
                  startDate: "",
                  endDate: "",
                },
              ],
        industrialProjectsSection:
          ProfileData?.industrialProjectsSection?.length > 0
            ? ProfileData?.industrialProjectsSection
            : [
                {
                  type: "",
                  sponcer: "",
                  title: "",
                  status: "",
                  cost: "",
                  startDate: "",
                  endDate: "",
                },
              ],
        researchArticlesSection:
          ProfileData?.researchArticlesSection?.length > 0
            ? ProfileData?.researchArticlesSection
            : [
                {
                  title: "",
                  name: "",
                  journal: "",
                  issue: "",
                  impact: "",
                  citations: "",
                  quartiesOne: "",
                  quartiesTwo: "",
                },
              ],
        conferenceSection:
          ProfileData?.conferenceSection?.length > 0
            ? ProfileData?.conferenceSection
            : [
                {
                  title: "",
                  name: "",
                  citations: "",
                  conferenceTitle: "",
                },
              ],
        bookChapSection:
          ProfileData?.bookChapSection?.length > 0
            ? ProfileData?.bookChapSection
            : [
                {
                  title: "",
                  name: "",
                  publisher: "",
                  author: "",
                  publishedPages: "",
                },
              ],
        bookSection:
          ProfileData?.bookSection?.length > 0
            ? ProfileData?.bookSection
            : [
                {
                  title: "",
                  citation: "",
                  publisher: "",
                  author: "",
                  publishedPages: "",
                },
              ],
        editorialSection:
          ProfileData?.editorialSection?.length > 0
            ? ProfileData?.editorialSection
            : [
                {
                  name: "",
                  IF: "",
                  typePaper: "",
                  datePaper: "",
                  publicationDate: "",
                },
              ],
        patentsSection:
          ProfileData?.patentsSection?.length > 0
            ? ProfileData?.patentsSection
            : [
                {
                  name: "",
                  inventorName: "",
                  status: "",
                  approvalDate: "",
                  type: "",
                  inventor: "",
                },
              ],
        copyRightsSection:
          ProfileData?.copyRightsSection?.length > 0
            ? ProfileData?.copyRightsSection
            : [
                {
                  title: "",
                  inventorName: "",
                  nameOfUni: "",
                  patentName: "",
                  status: "",
                  approvalDate: "",
                },
              ],
        industrialDesignsSection:
          ProfileData?.industrialDesignsSection?.length > 0
            ? ProfileData?.industrialDesignsSection
            : [
                {
                  title: "",
                  inventorName: "",
                  inventorSchool: "",
                  status: "",
                  approvalDate: "",
                },
              ],
        technologyTransferedSection:
          ProfileData?.technologyTransferedSection?.length > 0
            ? ProfileData?.technologyTransferedSection
            : [
                {
                  title: "",
                  techName: "",
                  iprs: "",
                  pl: "",
                  licensedDate: "",
                  piSchool: "",
                  sector: "",
                },
              ],
        attendedSection:
          ProfileData?.attendedSection?.length > 0
            ? ProfileData?.attendedSection
            : [
                {
                  title: "",
                  organizedBy: "",
                  startDate: "",
                  endDate: "",
                },
              ],
        organizedSection:
          ProfileData?.organizedSection?.length > 0
            ? ProfileData?.organizedSection
            : [
                {
                  title: "",
                  organizedBy: "",
                  startDate: "",
                  endDate: "",
                },
              ],
        phdSection:
          ProfileData?.phdSection?.length > 0
            ? ProfileData?.phdSection
            : [
                {
                  title: "",
                  college: "",
                  name: "",
                  field: "",
                },
              ],
        mastersSection:
          ProfileData?.mastersSection?.length > 0
            ? ProfileData?.mastersSection
            : [
                {
                  title: "",
                  college: "",
                  name: "",
                  field: "",
                },
              ],
      }}
      validationSchema={formAcademiaSchema}
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
              {/* {console.log(values)} */}
              <Grid
                container
                rowGap={4}
                columnGap={6}
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                <Grid item xl={12}>
                  {activeStep === 0 && (
                    <TransitionGroup>
                      <Fade timeout={1000}>
                        <div>
                          <StepOne
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setAvatarImg={setAvatarImg}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fade>
                    </TransitionGroup>
                  )}
                  {activeStep === 1 && (
                    <TransitionGroup>
                      <Fade timeout={1000}>
                        <div>
                          <StepTwo
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fade>
                    </TransitionGroup>
                  )}
                  {activeStep === 2 && (
                    <TransitionGroup>
                      <Fade timeout={1000}>
                        <div>
                          <StepThree
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fade>
                    </TransitionGroup>
                  )}
                  {activeStep === 3 && (
                    <TransitionGroup>
                      <Fade timeout={1000}>
                        <div>
                          <StepFour
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fade>
                    </TransitionGroup>
                  )}
                  {activeStep === 4 && (
                    <TransitionGroup>
                      <Fade timeout={1000}>
                        <div>
                          <StepFive
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fade>
                    </TransitionGroup>
                  )}
                  {activeStep === 5 && (
                    <TransitionGroup>
                      <Fade timeout={1000}>
                        <div>
                          <StepSix
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </Fade>
                    </TransitionGroup>
                  )}
                </Grid>
                <GridItemThree item xs={12}>
                  <CancelButton
                    onClick={() => {
                      setSliders(1);
                      handleReset();
                    }}
                  >
                    Back
                  </CancelButton>
                  <NextButton
                    name="submitButton"
                    type="submit"
                    onClick={handleClickOpen}
                  >
                    Finish
                  </NextButton>
                  {activeStep === 5 ? (
                    <>
                      <NextButton
                        name="submitButton"
                        type="submit"
                        onClick={handleClickOpen}
                      >
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
                      name="next"
                      type="button"
                      onClick={() => {
                        setSliders(2);
                        handleNext();
                      }}
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
