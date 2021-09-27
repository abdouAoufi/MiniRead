import React from "react";
import { AuthContextProvider } from "../../contexts/auth_context";
import { LayoutContextProvider } from "../../contexts/layout_context";
import { WindowProvider } from "../../contexts/window_context";

function Context(props) {
  return (
    <AuthContextProvider>
      <LayoutContextProvider>
        <WindowProvider>{props.children}</WindowProvider>
      </LayoutContextProvider>
    </AuthContextProvider>
  );
}

export default Context;
