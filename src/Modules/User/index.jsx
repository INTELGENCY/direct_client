import React from "react";
import { Route, Routes } from "react-router";
import Profile from "./CreateProfile";
import Layout from "../../Common/Layout";
import ComingSoon from "../../Common/ComingSoon";
import Authenticator from "../../Common/Authenticator";
import Projects from "../CommonPages/Projects";
import ProjectDetails from "../../Common/ProjectDetails";
import ProfilePage from "./ProfilePage";
import ViewProposals from "./ViewProposals";
import AddProposal from "./AddProposal";

const UserModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Authenticator industry={true} />}>
        <Route path="/" element={<Layout />}>
          <Route path="/createprofile" element={<Profile />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/viewproposals" element={<ViewProposals />} />
          <Route path="/addproposal" element={<AddProposal />} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
        </Route>
      </Route>

      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
};

export default UserModule;
