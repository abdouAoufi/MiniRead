import React, { createContext, useState } from "react";
import { getInfoFromLocal } from "../services/tokenservice";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogged, setLogged] = useState(false);
  const [token, setToken] = useState(getInfoFromLocal().token);
  const [userID, setUserID] = useState(getInfoFromLocal().userID);
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setLogged,
        userName,
        setUserName,
        token,
        setToken,
        userID,
        setUserID,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
