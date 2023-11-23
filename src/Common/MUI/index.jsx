import { CircularProgress, Grid, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
export const GridMDNone = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "grid",
  },
}));
export const GridMD = styled(Grid)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

const SpinnerWrapper = styled("div")(({ theme }) => ({
  background: "white",
  zIndex: "7000",
  position: "fixed",
  left: "50%",
  top: "50%",
  width: "100vw",
  height: "105vh",
  transform: "translate(-50%, -45%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <CircularProgress />;
    </SpinnerWrapper>
  );
};

export const TruncatedComponent = (props) => {
  const { Component, lines = 2, children, ...rest } = props;
  const TruncatedStyled = styled(Component)(({ theme }) => ({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lines,
  }));
  return <TruncatedStyled {...rest}>{children}</TruncatedStyled>;
};

export const BackArrowButtonComp = ({ route }) => {
  const ButtonBack = styled(Button)(({ theme }) => ({
    color: "#949494",
    marginTop: "-100px",
  }));
  const navigate = useNavigate();
  return (
    <ButtonBack
      onClick={() => navigate(route)}
      startIcon={<ArrowBackRoundedIcon />}
    >
      Back to home
    </ButtonBack>
  );
};
