import { Cloud } from "@mui/icons-material";
import {
  Button,
  Card,
  Fab,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import FilesComp from "./FilesComp.jsx";
function FileUploadComp({ arrayFiles }) {
  console.log(arrayFiles, "arrayFiles");
  return (
    <Card sx={{ p: 3 }}>
      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={2}
      >
        <Fab disabled size="medium" aria-label="upload">
          <Cloud sx={{ color: "#252B42" }} />
        </Fab>
        <Typography variant="h3">Upload Your Files</Typography>
        {/* <Button
                sx={{ marginLeft: "auto", backgroundColor: "#2e86de" }}
                startIcon={<FileUpload />}
                variant="contained"
                component="label"
              >
                Upload Documents
                <VisuallyHiddenInput type="file" />
              </Button> */}
      </Stack>
      {arrayFiles?.map((e, i) => (
        <>
          {console.log(e, "e")}
          <FilesComp key={i} arrayFiles={e} />
        </>
      ))}
    </Card>
  );
}

export default FileUploadComp;
