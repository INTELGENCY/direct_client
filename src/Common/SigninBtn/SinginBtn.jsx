import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Btn = styled(Button)(({ theme }) => ({
  paddingBlock: "12px",
  fontSize: "1.1rem",
  backgroundColor: "#098E6E",
  textTransform: "capitalize",
  width: "100%",
  "&:hover": {
    backgroundColor: "#098E6E",
  },
}));
function SigninBtn({ text }) {
  return (
    <div>
      <Btn fullWidth variant="contained">
        {text}
      </Btn>
    </div>
  );
}

export default SigninBtn;
