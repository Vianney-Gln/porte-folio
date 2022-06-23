import React, { useState } from "react";
// Routing
import { Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import {
  Header,
  Apropos,
  Heros,
  Actuellement,
  PorteFolio,
  Contact,
  Competences,
  Footer,
} from "../components";
import Background from "../components/background";

//style
import "../styles/App.scss";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="admin" element={<Admin />} />
      </Routes>
      <Background />
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Heros isOpen={isOpen} setOpen={setOpen} />
      <Apropos />
      <Actuellement />
      <Competences />
      <PorteFolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
