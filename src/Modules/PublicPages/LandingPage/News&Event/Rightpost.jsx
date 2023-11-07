import { Typography, Box, Stack, styled } from "@mui/material";

const HeadingText = styled(Typography)(({ theme }) => ({
  color: "#11112B",
  fontWeight: "650",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("lg")]: {
    // fontSize: "18px",
  },
}));
const DateText = styled("span")(({ theme }) => ({
  fontSize: "16px",
  color: "#5a5a5a",
  fontWeight: "500",
}));
const ImageContainer = styled("div")(({ theme }) => ({
  width: "100px",
  height: "90px",
  backgroundColor: "white",
  borderRadius: "10px",
  overflow: "hidden",
  ["@media screen and (max-width: 400px)"]: {
    display: "none",
  },
}));
const ImageTag = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

function Rightpost() {
  return (
    <Stack direction={"row"} justifyContent={"flex-start"} gap={3}>
      <ImageContainer>
        <ImageTag
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUPizw-9RuKJQd22Phqa5ne39VnXvV_tNibyMZMkeQsIDW7tdDxhgKqjlMtygJdgQczE&usqp=CAU"
          }
          alt={"BlogPost"}
        />
      </ImageContainer>
      <Box>
        <DateText>10 July 2023</DateText>
        <HeadingText variant="h3" marginTop={1}>
          {String(`Cloud Computing: A Game-Changer`).length > 30
            ? String(`Cloud Computing: A Game-Changer`).slice(0, 32) + "..."
            : String("Cloud Computing: A Game-Changer")}
        </HeadingText>
      </Box>
    </Stack>
  );
}

export default Rightpost;
