import React, { useState } from "react";
import { Header, Apropos, Heros, Actuellement } from "../components";

//style
import "../styles/App.scss";

const App = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="App">
      <Header toggle={isOpen} setToggle={setOpen} />
      <Heros />
      <Apropos />
      <Actuellement />
    </div>
  );
};

export default App;
