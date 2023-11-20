import React, { useEffect } from "react";
import MapComponentWrapper from "./MapComponent";
// import Banner from "./Banner/Banner.jsx";
import Banner from "./Banner";
import Stats from "./Stats";
import ProjectsCarousel from "./ProjectsCarousel";
import TechnologyGrid from "./TechnologyGrid";
// import TopResources from "./TopResources";
import NewsEvent from "./News&Event";
import { Helmet } from "react-helmet";
import { landingMeta } from "../../../utils/seocontent";
import { keys } from "../../../config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../../Store/Features/QalamSlice";
import MissionAndVision from "./MissionAndStatement";

const LandingPage = () => {
  const dispatch = useDispatch();
  const profilesData = useSelector((state) => state.qalam);
  console.log(profilesData, "profilesData");
  useEffect(() => {
    const fetchProfileApi = async () => {
      try {
        const response = await axios.get(keys.api + "qalam/profiles");
        console.log(response, "response");
        const data = response?.data?.ric_expert_portal_faculty_cards_json_data;
        dispatch(
          setProfile(response?.data?.ric_expert_portal_faculty_cards_json_data)
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchProjectsApi = async () => {
      let uniqueMap = new Map();
      try {
        const response = await axios.get(keys.api + "qalam/projects");
        console.log(response, "response project");
        if (response.data.ric_expert_portal_project_json_data) {
          response.data.ric_expert_portal_project_json_data.map((e, i) => {
            if (e.project_type) {
              if (!uniqueMap.has(e.project_type)) {
                uniqueMap.set(e.project_type, e);
              }
            }
          });
        }
        console.log(uniqueMap, "uniqueMap");
      } catch (error) {
        console.log(error.message);
      }
    };
    // fetchProfileApi();
    // fetchProjectsApi();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{landingMeta?.title}</title>
        <meta name="description" content={landingMeta?.description} />
      </Helmet>
      <Banner />
      {/* <MissionAndVision /> */}
      <MissionAndVision />
      <Stats />
      <ProjectsCarousel />
      <TechnologyGrid />
      <MapComponentWrapper />
      {/* <TopResources /> */}
      <NewsEvent />
    </div>
  );
};

export default LandingPage;
