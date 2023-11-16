import { Add, HelpOutline } from "@mui/icons-material";
import { Button, Fab, Grow, Stack, Tooltip, Typography } from "@mui/material";

function IconsHeadings({
  text,
  icons,
  helpOutline,
  button,
  startIconButton,
  paddingBottom,
  paddingTop,
  paddingLeft,
  handleClickButton,
}) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={1.5}
      sx={{
        pb: paddingBottom ? paddingBottom : 0,
        pl: paddingLeft ? paddingLeft : 0,
        pt: paddingTop ? paddingTop : 0,
      }}
    >
      <Fab disabled size="small" aria-label="upload">
        {icons}
      </Fab>
      <Typography variant="h3" fontWeight={600}>
        {text}
      </Typography>
      {helpOutline && (
        <Tooltip arrow TransitionComponent={Grow} title={helpOutline}>
          <HelpOutline sx={{ color: "GrayText", cursor: "pointer" }} />
        </Tooltip>
      )}
      {button && (
        <Button
          onClick={() => handleClickButton}
          sx={{
            marginLeft: "auto",
            backgroundColor: "#008080",
            "&:hover": {
              backgroundColor: "#008080",
            },
          }}
          variant="contained"
          startIcon={startIconButton}
        >
          {button}
        </Button>
      )}
    </Stack>
  );
}

export default IconsHeadings;
