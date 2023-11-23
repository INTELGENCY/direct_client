import { Routes, Route } from "react-router-dom";
import SignupButtons from "./SignupButtons";
import {
  ACADEMIA_LOGIN,
  ACADEMIA_SIGNUP,
  INDUSTRY_LOGIN,
  INDUSTRY_SIGNUP,
  LOGIN_MAIN,
  SIGNUP_MAIN,
} from "../../utils/routes";
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
      </Routes>
    </>
  );
};

export default SingupLoginRoutes;
