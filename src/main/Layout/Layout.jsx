import React, { useContext } from "react";
import Navbar from "../../components/layout@/navbar";
import Footer from "../../components/layout@/footer";
import ModalLogic from "./modal";

import { LayoutContext } from "../../contexts/layout_context";

function Layout(props) {
  const { openModal, click, insideModalHandler } = ModalLogic();
  const { showFooter, showNavbar } = useContext(LayoutContext);
  return (
    <div>
      {showNavbar ? (
        <Navbar isAuth={true} setOpenModal={click} closing={openModal} />
      ) : null}
      {props.children}
      {showFooter ? <Footer /> : null}
    </div>
  );
}

export default Layout;
