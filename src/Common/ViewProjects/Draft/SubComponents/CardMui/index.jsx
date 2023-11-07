import {
  Button,
  Card,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { Delete, Edit, Publish } from "@mui/icons-material";
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1rem",
}));
const Contents = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1rem",
}));
const GridFlexItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: ".5rem",
}));
const GridBtn = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));
const TypographyMui = styled(Typography)(({ theme }) => ({
  display:"block"
}));
function CardMui() {
  return (
    <Card sx={{ p: 2, maxWidth: "100%" }} elevation={4}>
      <Grid container gap={2}>
        <GridFlexItem item xs={12}>
          <DescriptionIcon />
          <TypographyMui
            noWrap
            maxWidth={"70%"}
            textOverflow={"ellipsis"}
            fontWeight={600}
            variant="h4"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </TypographyMui>
          <IconButton sx={{ marginLeft: "auto" }}>
            <Edit />
          </IconButton>
        </GridFlexItem>
        <Grid item xs={12}>
          <Typography variant="body1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </Typography>
        </Grid>
        <GridBtn item xs={12}>
          <Button startIcon={<Publish />} color="success" variant="contained">
            Publish
          </Button>
          <Button startIcon={<Delete />} color="error" variant="outlined">
            Delete
          </Button>
        </GridBtn>
      </Grid>
    </Card>
  );
}

export default CardMui;
{
  /* <Container>
  <Contents>
    <FlexItem>
      <DescriptionIcon />
      <Typography fontWeight={600} variant="h4">
        Heading
      </Typography>
    </FlexItem>
    <Typography variant="body2">
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
    </Typography>
    <BtnDiv>
      <Button variant="contained">Publish</Button>
      <Button variant="outlined">Delete</Button>
    </BtnDiv>
  </Contents>
  <IconButton>
    <Edit />
  </IconButton>
</Container> */
}
