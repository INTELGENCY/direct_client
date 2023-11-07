import { Fade, Grow, Slide, Typography, Zoom, styled } from "@mui/material";
const DividerOne = styled("div")(({ theme }) => ({
  width: "70px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
}));
const LeftBorder = styled("div")(({ theme }) => ({
  width: "70%",
  border: "2px solid" + theme.palette.bg.greenMui,
  borderRadius: "17px",
}));
const RightBorder = styled("div")(({ theme }) => ({
  width: "20%",
  border: "2px solid" + theme.palette.bg.greenMui,
  borderRadius: "17px",
}));
function MainHeadings({ text }) {
  return (
    <Grow in timeout={850}>
      <div>
        <Typography variant="h1">{text}</Typography>
        <DividerOne>
          <LeftBorder></LeftBorder>
          <RightBorder></RightBorder>
        </DividerOne>
      </div>
    </Grow>
  );
}

export default MainHeadings;
