import { AccountBox, Delete, Face } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

function Cards() {
  return (
    <Card
      sx={{
        pb: 4,
        pt: 6,
        pr: 4,
        pl: 4,
        boxShadow: "0px 0px 10px 0px rgba(7, 6, 18, 0.20)",
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Stack
            gap={1}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar sx={{ width: "100px", height: "100px", mb: 1.5 }}></Avatar>
            <Typography textAlign={"center"} variant="h3" fontWeight={500}>
              Abdullah Asif
            </Typography>
            <Typography variant="body1" color={"GrayText"}>
              Project Mannager
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"column"} alignItems={"center"} gap={1}>
            <Button variant="outlined" startIcon={<Face />}>
              View Profile
            </Button>
            <Button variant="outlined" color="error" startIcon={<Delete />}>
              Remove From Team
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;
