import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutCommon from "../../Common/Layout";
import CreateProfile from "./CreateProfile";
import Authenticator from "../../Common/Authenticator";
import Profile from "./Profile";
import PropjectsProposals from "./ProjectsProposals";
import ProposalLists from "./ProposalLists";
import RateProposal from "./RateProposal";

function index() {
  return (
    <Routes>
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
