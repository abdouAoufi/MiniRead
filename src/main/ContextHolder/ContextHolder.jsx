import React from "react";
import { AuthContextProvider } from "../../contexts/AuthContext";
import { LayoutContextProvider } from "../../contexts/LayoutContext";
import { WindowProvider } from "../../contexts/Windowcontenxt";

function ContextHolder(props) {
  return (
    <AuthContextProvider>
      <LayoutContextProvider>
        <WindowProvider>{props.children}</WindowProvider>
      </LayoutContextProvider>
    </AuthContextProvider>
  );
}

export default ContextHolder;
