import React, { createContext, useState } from "react";
import Window from "../components/Window/Window";
export const LayoutContext = createContext();

export const LayoutContextProvider = (props) => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <LayoutContext.Provider value={{ showFooter, setShowFooter }}>
      {props.children}
    </LayoutContext.Provider>
  );
};
