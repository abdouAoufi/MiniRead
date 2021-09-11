import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AuthHandler from "../AuthHandler";
import ModalLogic from "./modal";
import Modal from "../../components/StyleRelated/Modal/Modal";
import Suggesion from "../../components/Navbar/Suggesion/Suggesion";
import {
  LayoutContext,
  LayoutContextProvider,
} from "../../contexts/LayoutContext";

function Layout(props) {
  // controlling the navbar from app when is shared
  const { authState, switchAuthState } = AuthHandler();
  const { openModal, click, insideModalHandler } = ModalLogic();
  const { showFooter } = useContext(LayoutContext);
  return (
    <div>
      <Modal click={click} openModal={openModal}>
        <div onClick={insideModalHandler}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="rounded-b-md bg-white  min-h-1/4 w-full md:w-120 "
          >
            <Suggesion />
          </div>
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
      {showFooter ? <Footer /> : ""}
    </div>
  );
}

export default Layout;
