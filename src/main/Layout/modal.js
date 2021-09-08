import React, { useState } from "react";

const ModalLogic = () => {
  const [openModal, setOpenModal] = useState(false);
  const click = () => {
    setOpenModal(!openModal);
  };
  const insideModalHandler = () => {
    console.log("Inside modal cliked ");
  };
  return { openModal, click, insideModalHandler };
};

export default ModalLogic;
