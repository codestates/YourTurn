import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
