import React, { useState } from "react";
import "../styles/App.scss";
import Header from "../components/header";

const App = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="App">
      <Header toggle={isOpen} setToggle={setOpen} />
    </div>
  );
};

export default App;
