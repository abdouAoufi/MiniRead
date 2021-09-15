import React, { createContext, useState } from "react";
import Window from "../components/Window/Window";
export const WindowContext = createContext();

export const WindowProvider = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [messageModal, setMessageModal] = useState({
    title: "title",
    message: "message",
  });
  const setMessageWindow = (title, message) => {
    console.log(title, message);
    let updatedMessage = { ...messageModal };
    updatedMessage.title = title;
    updatedMessage.message = message;
    setMessageModal(updatedMessage);
    setModalDisplay(!modalDisplay);
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
