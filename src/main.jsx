import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 👇 THIS IS THE FIX. It automatically reads the path from your vite.config.js
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);
