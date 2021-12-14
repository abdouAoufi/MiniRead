import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setStatee] = useState(false);
  return (
    <Context.Provider value={(state, setStatee)}>{children}</Context.Provider>
  );
};
