import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvide } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvide>
    <App />
  </AppProvide>
);
