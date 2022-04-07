import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(app);
reportWebVitals();
