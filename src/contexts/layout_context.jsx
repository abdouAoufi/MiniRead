import React, { createContext, useState } from "react";
export const LayoutContext = createContext();

export const LayoutContextProvider = (props) => {
  const [showFooter, setShowFooter] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ showFooter, setShowFooter, showNavbar, setShowNavbar }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};
