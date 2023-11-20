import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Delete, Edit, MoreVert, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { keys } from "../../../config";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import placeholder from "/assets/placeholder.jpg";
const Heading = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.dark,
    fontWeight: 600,
    margin: "0",
  };
});
const ButtonStyled = styled(Button)(({ theme }) => {
  return {
    background: "transparent",
    color: theme.palette.text.grey,
    border: "2px solid" + theme.palette.text.grey,
    padding: ".2rem .6rem",
  };
});
const ButtonStyledNoBorder = styled(Button)(({ theme }) => {
  return {
    background: "transparent",
    color: theme.palette.text.grey,
    padding: ".2rem .6rem",
    "&:hover": {
      background: "transparent",
    },
  };
});

const Ongoing = styled("h5")(({ theme }) => {
  return {
    color: theme.palette.bg.greenDark,
    fontWeight: 600,
    margin: "0",
    fontSize: "13px",
  };
});
const CardStyled = styled(Card)(({ theme }) => {
  return {
    padding: "1rem",
    // marginRight: "1.5rem !important",
    borderRadius: 10,
    margin: "0",
    // maxWidth: "500px",
    [theme.breakpoints.up("sm")]: {
      margin: "0",
      maxWidth: "500px",
    },
    [theme.breakpoints.up("xs")]: {
      margin: "0",
    },
    maxWidth: "400px",
  };
});
const CardMediaStyled = styled(CardMedia)(({ theme }) => {
  return {
    background: "white",
    padding: "0px",
    objectFit: "contain",
    margin: "0",
    borderRadius: "2px",
    [theme.breakpoints.up("md")]: {},
  };
});
const Pstyled = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
  textAlign: "left",
  // lineHeight: 1.6,
  fontWeight: "400",
  height: "95px",
}));
const ProjectCards = ({ data }) => {
  const profile = useSelector((state) => state.profile.profile);
  const admin =
    profile?.type === "super" ||
    profile?.type === "admin" ||
    profile?.type === "subadmin";
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(data,"Data");
  return (
    <CardStyled elevation={3} sx={{ padding: "1rem" }}>
      <CardHeader
        style={{
          width: "100%",
          paddingInline: "0px",
        }}
        title={
          <div style={{ width: "290px", display: "block" }}>
            <Heading variant="h4" noWrap>
              {data?.title}
            </Heading>
          </div>
        }
        action={
          <>
            {admin && (
              <>
                <IconButton
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  aria-label="settings"
                >
                  <MoreVert />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  PaperProps={{
                    style: {
                      width: "15ch",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Edit fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Visibility fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Details</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            )}
          </>
        }
        subheader={
          <Ongoing>
            {data?.endDate === null
              ? "coming soon"
              : new Date(data?.startDate).toDateString()}
          </Ongoing>
        }
      />
      {data.image ? (
        <CardMediaStyled
          component="img"
          width={"100%"}
          height="190px"
          // image={keys.api + data?.image}
          image={data?.image}
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
          alt="project"
        />
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={190} />
      )}
      <CardContent style={{ padding: ".8rem 0rem .2rem 0rem" }}>
        {data.description ? (
          <>
            <Pstyled variant="body2" color="black">
              {data?.description}
            </Pstyled>
            {admin ? (
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={"1rem"}
                alignItems={"center"}
                marginTop={"1.5rem"}
              >
                <ButtonStyled
                  type="primary"
                  onClick={() => {
                    navigate(
                      "/directportal/dashboard/projectdetails/" + data?.id
                    );
                  }}
                >
                  Know More
                </ButtonStyled>
              </Stack>
            ) : (
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={"1rem"}
                alignItems={"center"}
                marginTop={"1.5rem"}
              >
                <ButtonStyledNoBorder>Q/A Forum</ButtonStyledNoBorder>
                <ButtonStyled
                  type="primary"
                  onClick={() => {
                    navigate(
                      `/${
                        pathname?.includes("/industry")
                          ? "industry"
                          : "academia"
                      }/projectdetails/` + data?.id
                    );
                  }}
                >
                  Know More
                </ButtonStyled>
              </Stack>
            )}
          </>
        ) : (
          <Box sx={{ width: "100%" }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        )}
      </CardContent>
    </CardStyled>
  );
};

export default ProjectCards;
