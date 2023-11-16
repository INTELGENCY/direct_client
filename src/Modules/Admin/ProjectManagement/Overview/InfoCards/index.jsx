import { CalendarToday } from "@mui/icons-material";
import { Card, Grid, Stack, Typography } from "@mui/material";

function InfoCards() {
  return (
    <Card
      elevation={4}
      sx={{ p: 3, borderTop: "5px solid green", borderRadius: "7px" }}
    >
      <Grid container gap={1}>
        <Grid item xs={12}>
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Typography variant={"body2"}>Due Date</Typography>
            <CalendarToday sx={{ fontSize: "25px" }} />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"h2"}>Dec 12, 2022</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default InfoCards;
