import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./LandingPage";

import Layout from "./Layout";

import ComingSoon from "../../Common/ComingSoon";

import ProjectDetails from "./ProjectDetails";
import Objective from "./About/Objective";

const PublicPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/project/:status/:name/:id" element={<ProjectDetails />} />
        <Route index path="/about/objectives" element={<Objective />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
};

export default PublicPages;
