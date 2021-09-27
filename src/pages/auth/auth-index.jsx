import React, { useState, useEffect, useContext } from "react";
import Login from "./login/login";
import Register from "./registre/registre";
import { LayoutContext } from "../../contexts/layout_context";
import { AuthContext } from "../../contexts/auth_context";
import { checkForAuth } from "../../api/home-service";
import { useHistory, Link } from "react-router-dom";

function Auth() {
  const history = useHistory();
  const { token, setLogged } = useContext(AuthContext);
  const [authState, setAuthState] = useState("login");
  const { showFooter, setShowFooter, showNavbar, setShowNavbar } =
    useContext(LayoutContext);
  useEffect(() => {
    if (showFooter && showNavbar) {
      setShowFooter(false);
      setShowNavbar(false);
    }
  }, []);
  useEffect(() => {
    if (token) {
      checkForAuth(token).then((result) => {
        if (result.status === 200) {
          setLogged(true);
          history.replace("/");
        } else {
          setLogged(false);
        }
      });
    } else {
      setLogged(false);
    }
  }, []);
  return (
    <div className="h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center font-bold text-3xl">Welcome Readers.</p>
            {authState === "login" ? (
              <Login switchAuthState={() => setAuthState("register")} />
            ) : (
              <Register switchAuthState={() => setAuthState("login")} />
            )}
            <p className="mt-8 text-center  ">
              No thanks i just want to{" "}
              <Link className="text-secondary font-bold cursor-pointer" to="/">
                explore
              </Link>{" "}
              now{" "}
            </p>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1576097492152-4687ccd1c6ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;
