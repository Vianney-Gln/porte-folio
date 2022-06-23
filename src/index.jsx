import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// Routing
import { BrowserRouter } from "react-router-dom";
// Style
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
