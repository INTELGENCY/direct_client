import { Grid } from "@mui/material";
import SignupSectionTop from "./SignupSectionTop";
import Sectiontwo from "./SectionTwo/Sectiontwo";

function Signup() {
  return (
    <div className="signup">
      <Grid container rowGap={8} className="container">
        <Grid item xs={12}>
          <SignupSectionTop />
        </Grid>
        <Grid item xs={12}>
          <Sectiontwo />
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
