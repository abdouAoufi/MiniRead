import { useState } from "react";

const AuthHandler = () => {
  const [authState, setAuthState] = useState("signup");
  const switchAuthState = () => {
    authState === "signup" ? setAuthState("login") : setAuthState("signup");
  };
  return { authState, switchAuthState };
};

export default AuthHandler;
