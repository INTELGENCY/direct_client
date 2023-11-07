import { CloudUpload } from "@mui/icons-material";
import { Button, Card, Grid, Stack, Typography, styled } from "@mui/material";
import FileSVG from "/assets/icons/icon-other.svg";
import InputFields from "../InputFields/InputFields";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function FilesComp({ arrayFiles }) {
  return (
    <Grid container justifyContent={"space-between"} gap={1}>
      <Grid item xs={12}>
        <Card elevation={0} sx={{ border: "1px solid lightgray", p: 2, mt: 3 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} gap={2}>
              <img src={FileSVG} />
              <Stack direction={"column"} justifyContent={"space-evenly"}>
                <Typography variant="h5">
                  <InputFields disable={true} type={"text"} value={arrayFiles} />
                </Typography>
              </Stack>
            </Stack>
            {/* <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="body1" color={"gray"}>
                Name of File
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                1341Mbs
              </Typography>
              <IconButton>
                <MoreVert />
              </IconButton>
            </Stack> */}
            {/* <Fab component="label" size="medium">
              startIcon={<CloudUpload sx={{ color: "#252B42" }} />}
            </Fab> */}
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
              startIcon={<CloudUpload />}
              // color="secondary"
            >
              <VisuallyHiddenInput type="file" />
              Upload
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FilesComp;
