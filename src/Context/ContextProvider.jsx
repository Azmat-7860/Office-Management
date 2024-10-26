import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(localStorage.getItem("page") || "login");

  const [authData, setAuthData] = useState([]);
  useEffect(() => {
    const { empData, adminData } = getLocalStorage();
    setAuthData({ empData, adminData });
  }, []);

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  return (
    <authContext.Provider value={{ authData, page, setPage }}>
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;
