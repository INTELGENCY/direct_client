import { Grow, Typography } from "@mui/material";
function TypographyGrow({ text, variant, timeout = 750, align }) {
  return (
    <Grow in timeout={timeout}>
      <Typography textAlign={align ? align : "center"} variant={variant}>
        {text}
      </Typography>
    </Grow>
  );
}

export default TypographyGrow;
