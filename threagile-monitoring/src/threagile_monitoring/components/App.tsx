import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout showHome={true} />} />

        <Route path="/dashboards" element={<Layout showDashboard={true} />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
