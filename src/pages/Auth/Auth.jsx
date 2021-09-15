import React, { useState, useEffect, useContext } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Modal from "../../components/StyleRelated/Modal/Modal";
import ModalLogic from "../../main/Layout/modal";
import { LayoutContext } from "../../contexts/LayoutContext";
import AuthHandler from "../../main/AuthHandler";

function Auth() {
  const { authState, switchAuthState } = AuthHandler();
  const { showFooter, setShowFooter } = useContext(LayoutContext);
  useEffect(() => {
    if (showFooter) {
      setShowFooter(false);
    }
  }, []);

  return (
    <div className="h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center font-bold text-3xl">Welcome Readers.</p>
            {authState === "login" ? <Login /> : <Register />}
            <div className="text-center pt-9 pb-12">
              {authState === "signup" ? (
                <p>
                  You have an account?{" "}
                  <span
                    onClick={switchAuthState}
                    className="underline font-semibold cursor-pointer"
                  >
                    Login here.
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={switchAuthState}
                    className="underline font-semibold cursor-pointer"
                  >
                    Register here.
                  </span>
                </p>
              )}
            </div>
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
