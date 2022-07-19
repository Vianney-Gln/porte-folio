import React, { createContext, useState, useEffect } from "react";
import { getIntro, getProjects } from "../service/service";

const ContextInfos = createContext(null);

export const ContextInfosProvider = ({ children }) => {
  const [infoIntro, setInfoIntro] = useState({}); // state managing infos intro and actually
  const [projects, setProjects] = useState([]); // state managing projects
  const [isUpdate, setIsUpdate] = useState(false);

  // On Mounting, get all infos from introduction and projects
  useEffect(() => {
    getIntro()
      .then((result) => setInfoIntro(result))
      .catch((err) => console.log(err));
    getProjects()
      .then((result) => {
        setProjects(result);
      })
      .catch((err) => console.log(err));
  }, [isUpdate]);

  return (
    <ContextInfos.Provider
      value={{
        infoIntro,
        setInfoIntro,
        projects,
        setProjects,
        isUpdate,
        setIsUpdate,
      }}
    >
      {children}
    </ContextInfos.Provider>
  );
};

export default ContextInfos;
