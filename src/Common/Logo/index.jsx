import LogoSmall from "/assets/logo.png";
import LogoInvert from "/assets/logo.png";
import { useNavigate } from "react-router-dom";

const LogoWrapper = ({ height = null, width = null, invert }) => {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate("/")}
      src={invert ? LogoInvert : LogoSmall}
      alt="DIRECT LOGO"
      style={{ height, width, cursor: "pointer" }}
    />
  );
};

export default LogoWrapper;
