import React, { useState } from "react";
import Header from "../components/header";
import Heros from "../components/heros";
//style
import "../styles/App.scss";

const App = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="App">
      <Header toggle={isOpen} setToggle={setOpen} />
      <Heros />
    </div>
  );
};

export default App;
