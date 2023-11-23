import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ACADEMIA, INDUSTRY } from "../../utils/routes";

const Authenticator = ({ Authenticating, academia, industry }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const profile = useSelector((state) => state.profile.profile);
  const isAdmin = ["super", "admin", "subadmin"];
  console.log(profile);
  useEffect(() => {
    if (profile?.email) {
      if (Authenticating) {
        navigate(`/`);
      }
      if (isAdmin.includes(profile?.type)) {
        return navigate("/");
      } else if (profile?.type === ACADEMIA) {
        if (!academia) {
          navigate("/");
        }
      } else if (profile?.type === INDUSTRY) {
        if (!industry) {
          navigate("/");
        }
      }
    } else {
      if (isAdmin.includes(profile?.type)) {
        return navigate("/");
      }
    }
  }, [pathname, profile]);
  return <Outlet />;
};

export default Authenticator;
