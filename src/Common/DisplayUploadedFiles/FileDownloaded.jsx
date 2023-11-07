import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import FileSVG from "/assets/icons/icon-other.svg";
import { CloudDownload } from "@mui/icons-material";
import useWindowSize from "../Hooks/useWindowSize";
function FileDownloaded({ arrayFiles }) {
  const windowSize = useWindowSize();
  return (
    <Grid container justifyContent={"space-between"} gap={1}>
      <Grid item xs={12}>
        <Card elevation={0} sx={{ border: "1px solid lightgray", p: 2, mt: 3 }}>
          <Stack
            direction={windowSize < 600 ? "column" : "row"}
            justifyContent={"space-between"}
            alignItems={windowSize < 600 ? "flex-start" : "center"}
            gap={2}
          >
            <Stack sx={{ width: "100%" }} direction={"row"} gap={1}>
              <img src={FileSVG} />
              <Stack
                sx={{ width: "100%" }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={
                  windowSize < 600 ? "space-between" : "flex-start"
                }
                gap={2}
              >
                <Typography variant="h4">
                {arrayFiles}</Typography>
                <Typography variant="body1" color={"GrayText"}>
                  1234 KBs
                </Typography>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              size="medium"
              component="label"
              sx={{
                backgroundColor: "#5758BB",
                "&:hover": {
                  backgroundColor: "#5758BB",
                },
              }}
              startIcon={<CloudDownload />}
            >
              Download
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FileDownloaded;
