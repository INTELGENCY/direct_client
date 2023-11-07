import { Grid } from "@mui/material";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { keys } from "../../../config";

function Profile() {
  const loginData = useSelector((state) => state.profile.profile);
  const [ProfileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
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
        console.log(response, "response");
        if (response.data.type === "success" || response.status === 200) {
          setProfileData(response.data.userDetails);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container sx={{ pt: 4, pb: 4 }} gap={4}> 
      <Grid item xs={12}>
        <SectionOne profileData={ProfileData} />
      </Grid>
      <Grid item xs={12}>
        <SectionTwo profileData={ProfileData} />
      </Grid>
    </Grid>
  );
}

export default Profile;
