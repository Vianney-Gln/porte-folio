import React, { useState } from "react";
import {
  Header,
  Apropos,
  Heros,
  Actuellement,
  PorteFolio,
} from "../components";
import Competences from "../components/compétences";
//style
import "../styles/App.scss";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Heros isOpen={isOpen} setOpen={setOpen} />
      <Apropos />
      <Actuellement />
      <Competences />
      <PorteFolio />
    </div>
  );
};

export default App;
