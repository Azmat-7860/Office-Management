import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const { empData, adminData } = getLocalStorage();
    setUserData({ empData, adminData });
  }, []);

  return (
    <authContext.Provider value={userData}>{children}</authContext.Provider>
  );
};

export default ContextProvider;
