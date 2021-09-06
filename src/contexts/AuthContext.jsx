import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogged, setLogged] = useState(true);
  return (
    <AuthContext.Provider value={{ isLogged, setLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
};
