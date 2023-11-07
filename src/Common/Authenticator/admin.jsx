import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Authenticator = ({ Authenticating }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const profile = useSelector((state) => state.profile.profile);

  console.log({ profile });

  const authenticatedarr = [
    "/directportal",
    "directportal/",
    "/directportal/dasboard",
    "/directportal/dasboard/",
    "/directportal/login",
    "/directportal/admin/login",
    "/directportal/resetpassword",
    "/directportal/admin/resetpassword",
    "/directportal/signup",
    "/directportal/admin/signup",
  ];
  const arr2 = ["/directportal/dasboard", "/directportal/dasboard/"];
  const isAdmin = ["super", "admin", "subadmin"];
  useEffect(() => {
    if (profile?.email && isAdmin.includes(profile?.type)) {
      if (Authenticating) {
        navigate(`/directportal/dashboard`);
      } else if (authenticatedarr.find((e) => e === pathname)) {
        navigate("/directportal/dashboard");
      }
    } else {
      if (Authenticating) {
        if (arr2.includes(pathname)) {
          navigate("/directportal/admin/login");
        } else {
          navigate("/directportal/admin/login");
        }
      } else {
        navigate("/directportal/admin/login");
      }
    }
  }, [pathname, profile]);
  return <Outlet />;
};

export default Authenticator;
