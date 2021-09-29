import React, { useState, useEffect, useContext } from "react";
import Login from "./login/login";
import Register from "./registre/registre";
import { LayoutContext } from "../../contexts/layout_context";
import { AuthContext } from "../../contexts/auth_context";
import { checkForAuth } from "../../api/home-service";
import { useHistory, Link } from "react-router-dom";
import { IMAGES_URL } from "../../assets";

function Auth() {
  const history = useHistory();
  const { token, setLogged } = useContext(AuthContext);
  const [authState, setAuthState] = useState("login");
  const { setShowFooter, setShowNavbar } = useContext(LayoutContext);

  useEffect(() => {
    setShowFooter(false);
    setShowNavbar(false);
    if (!token) {
      setLogged(false);
    }
    checkForAuth(token).then((result) => {
      if (result.status === 200) {
        // setLogged(true);
        goHome();
      } else {
        // setLogged(false);
      }
    });
  }, []);
  const goHome = () => {
    return history.replace("/");
  };
  return (
    <div className="h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="separator">
            <h1 className="header-title">Welcome Readers!</h1>
            {authState === "login" ? (
              <Login switchAuthState={() => setAuthState("register")} />
            ) : (
              <Register switchAuthState={() => setAuthState("login")} />
            )}
            <p className="mt-8 text-center text-light text-black  ">
              No thanks i just want to{" "}
              <Link className="highlight-text" to="/">
                explore
              </Link>{" "}
              now{" "}
            </p>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img className="img-cover" src={IMAGES_URL.AUTH_IMAGE} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
