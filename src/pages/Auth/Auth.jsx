import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Modal from "../../components/StyleRelated/Modal/Modal";
import ModalLogic from "../../main/Layout/modal";

function Auth(props) {
  const { openModal, insideModalHandler, click } = ModalLogic();
  const [message, setMessage] = useState({ title: "", message: "" });
  const setModal = (msg) => {
    const newMessage = { ...message };
    newMessage.title = msg.title;
    newMessage.message = msg.message;
    setMessage(newMessage);
    click();
  };

  return (
    <div className="h-screen">
      <Modal center click={click} openModal={openModal}>
        <div onClick={insideModalHandler}>
          <div className="inline-block   max-w-md p-6 my-8 w-120 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
            <p
              as="h2"
              className="text-xl font-semibold leading-6 text-gray-900"
            >
              {message.title}
            </p>
            <div className="mt-2">
              <p className="text-sm font-medium text-black-light">
                {message.message}
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="float-right inline-flex justify-center px-4 py-2 text-sm font-medium text-primary bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={click}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p
              className="text-center font-bold text-3xl"
            >
              Welcome Readers.
            </p>
            {props.authState === "login" ? (
              <Login setOpenModal={setModal} />
            ) : (
              <Register setOpenModal={setModal} />
            )}
            <div className="text-center pt-9 pb-12">
              {props.authState === "signup" ? (
                <p>
                  You have an account?{" "}
                  <span
                    onClick={props.switchAuthState}
                    className="underline font-semibold cursor-pointer"
                  >
                    Login here.
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={props.switchAuthState}
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
