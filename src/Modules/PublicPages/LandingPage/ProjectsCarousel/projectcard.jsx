import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
  styled,
} from "@mui/material";
const ProjectCard = ({ data }) => {
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

      [theme.breakpoints.up("sm")]: {
        margin: "0",
      },
    };
  });
  const CardMediaStyled = styled(CardMedia)(({ theme }) => {
    return {
      background: "white",
      padding: "0px",
      objectFit: "cover", 
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
  return (
    <CardStyled elevation={3} sx={{ padding: "1rem" }}>
      <CardHeader
        style={{ paddingInline: "0px", display: "block" }}
        title={
          <Heading variant="h4" noWrap>
            {data?.name}
          </Heading>
        }
        subheader={<Ongoing>{data?.status}</Ongoing>}
      />
      <CardMediaStyled
        component="img"
        width={"100%"}
        height="190px"
        image={data?.image}
        alt="project"
      />
      <CardContent style={{ padding: ".8rem 0rem .2rem 0rem" }}>
        <Pstyled variant="body2" color="black">
          {data?.description}
        </Pstyled>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={"1rem"}
          alignItems={"center"}
          marginTop={"1.5rem"}
        >
          <ButtonStyledNoBorder>Q/A Forum</ButtonStyledNoBorder>
          <ButtonStyled type="primary">Know More</ButtonStyled>
        </Stack>
      </CardContent>
    </CardStyled>
  );
};

export default ProjectCard;
