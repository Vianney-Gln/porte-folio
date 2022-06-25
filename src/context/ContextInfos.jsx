import React, { createContext, useState, useEffect } from "react";
import { getIntro } from "../service/service";

const ContextInfos = createContext(null);

export const ContextInfosProvider = ({ children }) => {
  const [infoIntro, setInfoIntro] = useState({}); // state managing infos intro and actually

  useEffect(() => {
    getIntro()
      .then((result) => setInfoIntro(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContextInfos.Provider value={{ infoIntro, setInfoIntro }}>
      {children}
    </ContextInfos.Provider>
  );
};

export default ContextInfos;
