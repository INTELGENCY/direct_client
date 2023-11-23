import { Routes, Route } from "react-router-dom";
import SignupButtons from "./SignupButtons";
import {
  ACADEMIA_LOGIN,
  ACADEMIA_RESETPASS,
  ACADEMIA_SIGNUP,
  INDUSTRY_LOGIN,
  INDUSTRY_RESETPASS,
  INDUSTRY_SIGNUP,
  LOGIN_MAIN,
  SIGNUP_MAIN,
} from "../../utils/routes";
import RESETPASSWORD from "./OTP";
const SingupLoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={LOGIN_MAIN} element={<SignupButtons isLogin />} />
        <Route path={SIGNUP_MAIN} element={<SignupButtons />} />
        <Route path={ACADEMIA_LOGIN} element={<SignupButtons isLogin />} />
        <Route path={ACADEMIA_SIGNUP} element={<SignupButtons />} />
        <Route path={INDUSTRY_LOGIN} element={<SignupButtons isLogin />} />
        <Route path={INDUSTRY_SIGNUP} element={<SignupButtons />} />
        <Route path={ACADEMIA_RESETPASS} element={<RESETPASSWORD />} />
        <Route path={INDUSTRY_RESETPASS} element={<RESETPASSWORD />} />
      </Routes>
    </>
  );
};

export default SingupLoginRoutes;
