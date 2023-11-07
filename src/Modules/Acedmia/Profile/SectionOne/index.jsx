import {
  Edit,
  Email,
  EmailOutlined,
  Phone,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Fab,
  Grid,
  Grow,
  Paper,
  Stack,
  Typography,
  Zoom,
  styled,
} from "@mui/material";
import { keys } from "../../../../config";
import { useNavigate } from "react-router-dom";
const TextFlex = styled("div")(({ theme }) => ({
  marginLeft: "45px",
  // pl: 3,
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
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
  alignItems: "flex-start",
  paddingRight: "40px",
  ["@media screen  and (max-width:800px)"]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "0px",
    gap: ".7rem",
  },
}));
const GridItemsLast = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "1.1rem",
  paddingRight: "40px",
  marginTop: "-6rem",
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
  const navigate = useNavigate();
  return (
    <Card
      elevation={2}
      sx={{
        minHeight: "100%",
        pb: 4,
        // border: "1px solid #edeef0",
        borderRadius: "var(--1, 8px) var(--1, 8px) var(--1, 8px) var(--1, 8px)",
      }}
    >
      <Grid container rowGap={3}>
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
        >
          {/* <Fab
            sx={{ position: "absolute", right: "20px", top: "20px" }}
            aria-label="edit"
          >
            <Edit color="white" />
          </Fab> */}
        </Grid>
        <Grid item xs={12} sx={{ mt: -17 }}>
          <Zoom in={true} timeout={600}>
            <AvatarUpload
              alt="loading.."
              src={profileData?.image ? keys.api + profileData.image : ""}
              variant="square"
            />
          </Zoom>
        </Grid>
        <GridItems item xs={6}>
          <TextFlex>
            <Typography variant="h2" fontWeight={600}>
              {profileData?.firstName + " " + profileData?.lastName}
            </Typography>
            <Typography variant="body1" color={"gray"}>
              {profileData?.department}
            </Typography>
            <Typography variant="h4" fontWeight={500} fontSize={"18px"}>
              {profileData?.currentUniversity}
            </Typography>
          </TextFlex>
        </GridItems>
        <GridItemsLast item xs={6}>
          <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={500}>
            <Fab
              variant="extended"
              size="medium"
              onClick={() => navigate("/academia/createprofile")}
            >
              <Edit sx={{ mr: 0.7, fontSize: "18px" }} />
              Edit Profile
            </Fab>
          </Grow>
          {/* <Button variant="outlined" color="success" startIcon={<Edit/>}>Edit Profile</Button> */}
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            direction={"row"}
            spacing={2}
          >
            <Phone sx={{ color: "#545454" }} />
            <Typography variant="body1" color={"#545454"}>
              {profileData?.phone}
            </Typography>
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            direction={"row"}
            spacing={2}
          >
            <Email sx={{ color: "#545454" }} />{" "}
            <Typography variant="body1" color={"#545454"}>
              {profileData?.email}
            </Typography>
          </Stack>
        </GridItemsLast>
      </Grid>
    </Card>
  );
}

export default SectionOne;
