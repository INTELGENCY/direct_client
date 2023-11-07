import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Otp from "./OTP";
import { Route, Routes } from "react-router-dom";
import LayoutCommon from "../../Common/Layout";
import CreateProfile from "./CreateProfile";
import Authenticator from "../../Common/Authenticator";
import Projects from "../CommonPages/Projects";
import ProjectDetails from "../../Common/ProjectDetails";
import Profile from "./Profile";

function index() {
  return (
    <Routes>
      <Route path="/" element={<Authenticator Authenticating />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<Otp />} />
      </Route>
      <Route path="/" element={<Authenticator academia />}>
        <Route path="/" element={<LayoutCommon />}>
          <Route index path="/createprofile" element={<CreateProfile />} />
          <Route index path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
          <Route />
        </Route>
      </Route>
    </Routes>
  );
}

export default index;
