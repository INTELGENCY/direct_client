import { Stack } from "@mui/material";
import LogoWrapper from "../Logo";

const LoginComponentImage = () => {
  return (
    <Stack direction={"column"} className="container">
      <LogoWrapper width={"250px"} height={"250"} />
      <h1>
        Development, Innovation, and Research for Evolving <br /> Cutting-edge
        Technologies
      </h1>
    </Stack>
  );
};

export default LoginComponentImage;
