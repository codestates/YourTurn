import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(app);
reportWebVitals();
