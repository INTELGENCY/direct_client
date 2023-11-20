import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Project from "./Project";
import LayoutCommon from "../../Common/Layout";
import Authenticator from "../../Common/Authenticator/admin.jsx";
import Otp from "./OTP";
import ProjectDetails from "../../Common/ProjectDetails";
import ViewProposals from "./ViewProposals/index.jsx";
import ViewLists from "./SubAdmin/ViewLists/index.jsx";
import ProposalList from "./ProposalList/index.jsx";
import ProjectManagement from "./ProjectManagement";
function index() {
  return (
    <Routes>
      <Route path="/" element={<Authenticator admin />}>
        <Route path="/dashboard" element={<LayoutCommon />}>
          <Route index element={<Project />} />
          <Route path="/dashboard/viewproposal" element={<ViewProposals />} />
          <Route
            path="/dashboard/projectdetails/:id"
            element={<ProjectDetails />}
          />
          <Route path="/dashboard/management" element={<ViewLists />} />
          <Route path="/dashboard/proposallist" element={<ProposalList />} />
          <Route path="/dashboard/projectmanagement" element={<ProjectManagement />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Authenticator Authenticating />}>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/resetpassword" element={<Otp />} />
      </Route>
    </Routes>
  );
}

export default index;
