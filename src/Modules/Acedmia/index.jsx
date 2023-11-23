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
import PropjectsProposals from "./ProjectsProposals";
import ProposalLists from "./ProposalLists";
import RateProposal from "./RateProposal";

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
          <Route path="/projects" element={<PropjectsProposals />} />
          <Route path="/proposallists" element={<ProposalLists />} />
          <Route path="/rateproposal" element={<RateProposal />} />
          <Route />
        </Route>
      </Route>
    </Routes>
  );
}

export default index;
