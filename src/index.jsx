import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// Routing
import { BrowserRouter } from "react-router-dom";
// Context
import { ContextInfosProvider } from "./context/ContextInfos";
// Style
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ContextInfosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextInfosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
