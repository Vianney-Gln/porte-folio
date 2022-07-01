import React from "react";
// Routing
import { Route, Routes } from "react-router-dom";
// Components
import ContainerApp from "./containerApp";
import Login from "../auth/Login";
import ProtectedRoute from "../auth/ProtectedRoute";

//style
import "../styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<ProtectedRoute />} />
        <Route exact path="/" element={<ContainerApp />} />
      </Routes>
    </div>
  );
};

export default App;
