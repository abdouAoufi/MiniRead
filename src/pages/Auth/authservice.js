import { useState } from "react";

const AuthService = () => {
  const [loading, setLoading] = useState(true);
  const switchLoading =  () => {
    console.log("switch")
    setLoading(!loading);
    console.log(loading)
  };
  return { loading, switchLoading };
};

export default AuthService;
