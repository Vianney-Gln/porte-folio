import React, { createContext, useState, useEffect } from "react";
import { getIntro, getProjects } from "../service/service";

const ContextInfos = createContext(null);

export const ContextInfosProvider = ({ children }) => {
  const [infoIntro, setInfoIntro] = useState({}); // state managing infos intro and actually
  const [projects, setProjects] = useState([]); // state managing projects
  const [isUpdate, setIsUpdate] = useState(false); // state for rerend
  const [isCreate, setIsCreate] = useState(false); // state for rerend

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
  }, [isUpdate, isCreate]);

  return (
    <ContextInfos.Provider
      value={{
        infoIntro,
        setInfoIntro,
        projects,
        setProjects,
        isUpdate,
        setIsUpdate,
        isCreate,
        setIsCreate,
      }}
    >
      {children}
    </ContextInfos.Provider>
  );
};

export default ContextInfos;
