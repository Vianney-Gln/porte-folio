import React from "react";
// Routing
import { Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import ContainerApp from "./containerApp";

//style
import "../styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/" element={<ContainerApp />} />
      </Routes>
    </div>
  );
};

export default App;
