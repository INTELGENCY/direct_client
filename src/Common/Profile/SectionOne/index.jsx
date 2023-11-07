import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Card,
  Fab,
  Grid,
  Grow,
  Typography,
  Zoom,
  styled,
} from "@mui/material";
import { keys } from "../../../config";
import { useNavigate } from "react-router-dom";
const TextFlex = styled("div")(({ theme }) => ({
  marginLeft: "45px",
  // pl: 3,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  ["@media screen  and (max-width:800px)"]: {
    justifyContent: "center",
    alignItems: "center",
    gap: ".7rem",
    marginLeft: "0px",
  },
}));
const GridItems = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  paddingRight: "40px",
  ["@media screen  and (max-width:800px)"]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "0px",
    gap: ".7rem",
  },
}));
const AvatarUpload = styled(Avatar)(({ theme }) => ({
  width: "190px",
  height: "190px",
  borderRadius: "30px",
  marginLeft: "40px",
  ["@media screen  and (max-width:800px)"]: {
    marginLeft: "0px",
    margin: "auto",
  },
  // marginBottom: "-200px",
}));
function SectionOne({ profileData }) {
  const navigate = useNavigate()
  return (
    <Card
      elevation={1}
      sx={{
        minHeight: "100%",
        pb: 4,
        // border: "1px solid #edeef0",
        borderRadius: "var(--1, 8px) var(--1, 8px) var(--1, 8px) var(--1, 8px)",
      }}
    >
      <Grid container gap={3}>
        <Grid
          item
          sx={{
            height: "190px",
            borderRadius:
              "var(--1, 8px) var(--1, 8px) var(--none, 0px) var(--none, 0px)",
            background:
              "linear-gradient(270deg, #FBE6FC 0%, #EDEDFB 0%, #F5EBFE 18.75%, #EFF0FF 34.9%, #E5E9F0 100%)",
            position: "relative",
          }}
          xs={12}
        ></Grid>
        <Grid item xs={12} sx={{ mt: -17 }}>
          <AvatarUpload
            sx={{ backgroundColor: "lightgray" }}
            src={profileData?.image ? keys.api + profileData?.image : ""}
            variant="square"
          />
        </Grid>
        <GridItems item xs={12}>
          <TextFlex>
            <Grow in timeout={1000}>
              <Typography variant="h2">{profileData.companyName}</Typography>
            </Grow>
            <Grow in timeout={1400}>
              <Typography variant="h4">{profileData.businessType}</Typography>
            </Grow>
            <Grow in timeout={1800}>
              <Typography variant="body2" color={"gray"}>
                {profileData.address}
              </Typography>
            </Grow>
          </TextFlex>
          <Zoom in timeout={800}>
            <Fab
              variant="extended"
              onClick={() => navigate("/industry/createprofile")}
            >
              <Edit sx={{ mr: 1, fontSize: "17px" }} />
              Edit Profile
            </Fab>
          </Zoom>
        </GridItems>
      </Grid>
    </Card>
  );
}

export default SectionOne;
