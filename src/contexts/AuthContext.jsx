import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogged, setLogged] = useState(false);
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  return (
    <AuthContext.Provider
      value={{ isLogged, setLogged, userName, setUserName }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
