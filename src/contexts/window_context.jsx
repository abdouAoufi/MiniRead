import React, { createContext, useState } from "react";
import Window from "../components/layout@/dialog/dialog";
export const WindowContext = createContext();

export const WindowProvider = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [messageModal, setMessageModal] = useState({
    title: "title",
    message: "message",
  });
  const setMessageWindow = (title, message, cb) => {
    let updatedMessage = { ...messageModal };
    updatedMessage.title = title;
    updatedMessage.message = message;
    setMessageModal(updatedMessage);
    setModalDisplay(!modalDisplay);
    if (cb !== undefined) {
      cb();
    }
  };
  return (
    <WindowContext.Provider value={{ modalDisplay, setMessageWindow }}>
      <Window
        openModal={modalDisplay}
        click={() => setModalDisplay(!modalDisplay)}
        message={messageModal}
      />
      {props.children}
    </WindowContext.Provider>
  );
};
