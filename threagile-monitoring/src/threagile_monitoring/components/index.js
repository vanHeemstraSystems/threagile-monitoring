import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import Dashboard from "./Dashboard";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);