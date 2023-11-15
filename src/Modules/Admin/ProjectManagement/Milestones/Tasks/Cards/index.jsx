import {
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { customTheme } from "../../../../../../Theme/theme";
import ProgressMui from "../../../../../../Common/ProgressMui";

function Cards() {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: customTheme.palette.boxShadows.boxShadowCardsLight,
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ pt: 1 }}
          >
            <Typography variant="h5" fontWeight={600}>
              Task's name comes here
            </Typography>
            <Chip
            color={'primary'}
              sx={{
                backgroundColor: customTheme.palette.bg.parrotGreen,
                color: "white",
              }}
              label={"Complete"}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Task No.</Typography>
            <Typography variant="body2" fontWeight={600}>
              10
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Attachments:</Typography>
            <Typography variant="body2" fontWeight={600}>
              20
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Start Date:</Typography>
            <Typography variant="body2" fontWeight={500}>
              02/02/2002
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Due Date:</Typography>
            <Typography variant="body2" fontWeight={500}>
              02/02/2004
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography width={"100%"} noWrap variant="body2">
            Task's name comes here Task's name comes here Task's name comes here
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <ProgressMui value={24} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;
