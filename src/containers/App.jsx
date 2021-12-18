import React, { useState } from "react";
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
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Background />
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
