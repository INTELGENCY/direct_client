import { Grid } from "@mui/material";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SideInfo from "./SideInfo";
import { useEffect, useState } from "react"; 
import axios from "axios";
import { keys } from "../../config";
import { useSelector } from "react-redux";
function Profile() {
  const loginData = useSelector((state) => state.profile.profile);
  const [ProfileData, setProfileData] = useState(null);
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
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container rowGap={6}>
      <Grid item xs={12} sx={{ mt: 6 }}>
        {ProfileData && <SectionOne profileData={ProfileData} />}
      </Grid>
      <Grid item xs={12}>
        {ProfileData && <SideInfo profileData={ProfileData} />}
      </Grid>
      <Grid item xs={12}>
        {ProfileData && <SectionTwo profileData={ProfileData} />}
      </Grid>
    </Grid>
  );
}

export default Profile;
