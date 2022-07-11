import React, { useState } from "react";
// Components
import Header from "../components/header";
import Apropos from "../components/a-propos";
import Heros from "../components/heros";
import Actuellement from "../components/actuellement";
import PorteFolio from "../components/porte-folio";
import Contact from "../components/contact";
import Competences from "../components/compétences";
import Footer from "../components/footer";
import Background from "../components/background";

const ContainerApp = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container-app">
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

export default ContainerApp;
