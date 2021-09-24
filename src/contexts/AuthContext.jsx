import React, { createContext, useState } from "react";
import { getInfoFromLocal } from "../services/tokenservice";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogged, setLogged] = useState(false);
  const [token, setToken] = useState(getInfoFromLocal().token);
  const [userID, setUserID] = useState(getInfoFromLocal().userID);
  const [userInfo, setUserInfo] = useState(getInfoFromLocal().userInfo);
  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setLogged,
        userInfo,
        setUserInfo,
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
