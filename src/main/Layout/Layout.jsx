import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AuthHandler from "../AuthHandler";
import Modal from "../../components/StyleRelated/Modal/Modal";
import Suggesion from "../../components/Navbar/Suggesion/Suggesion";

function Layout(props) {
  const click = () => {
    setOpenModal(!openModal);
  };

  const insideModalHandler = () => {
    console.log("Inside modal cliked ");
  };

  // controlling the navbar from app when is shared
  const { authState, switchAuthState } = AuthHandler();

  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Modal click={click} openModal={openModal}>
        <div onClick={insideModalHandler}>
          <Suggesion />
        </div>
      </Modal>
      <Navbar
        authState={authState}
        switchAuthState={switchAuthState}
        isAuth={true}
        setOpenModal={click}
        closing={openModal}
      />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
