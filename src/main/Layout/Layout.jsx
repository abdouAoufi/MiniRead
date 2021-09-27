import React, { useContext } from "react";
import Navbar from "../../components/layout@/navbar";
import Footer from "../../components/layout@/footer";
import ModalLogic from "./modal";
import Modal from "../../components/modal/modal/modal";
import Suggesion from "../../components/layout@/navbar/suggestion/suggestion";
import {
  LayoutContext,
  LayoutContextProvider,
} from "../../contexts/layout_context";

function Layout(props) {
  // controlling the navbar from app when is shared
  const { openModal, click, insideModalHandler } = ModalLogic();
  const { showFooter, showNavbar } = useContext(LayoutContext);
  return (
    <div>
      <Modal click={click} openModal={openModal}>
        <div onClick={insideModalHandler}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="rounded-b-md bg-white  min-h-1/4 w-screen md:w-120 "
          >
            <Suggesion />
          </div>
        </div>
      </Modal>
      {showNavbar ? (
        <Navbar
          isAuth={true}
          setOpenModal={click}
          closing={openModal}
        />
      ) : null}
      {props.children}
      {showFooter ? <Footer /> : null}
    </div>
  );
}

export default Layout;
