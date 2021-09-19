import { useState } from "react";
import { print } from "../utils/function";
const AuthHandler = () => {
  const [authState, setAuthState] = useState("login");
  const switchAuthState = () => {
    print("Switching");
    authState === "signup" ? setAuthState("login") : setAuthState("signup");
  };
  return { authState, switchAuthState };
};

export default AuthHandler;
