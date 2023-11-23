import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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
      } else if (profile?.type === "academia") {
        if (!academia) {
          navigate("/");
        }
      } else if (profile?.type === "industry") {
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
