import { CircularProgress, Grid, styled } from "@mui/material";

export const GridMDNone = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "grid",
  },
}));

const SpinnerWrapper = styled("div")(({ theme }) => ({
  background: "white",
  zIndex: "3000",
  position: "fixed",
  left: "50%",
  top: "50%",
  width: "100vw",
  height: "100vh",
  transform: "translate(-50%, -50%)",
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
