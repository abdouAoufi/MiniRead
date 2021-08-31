import React, { useState } from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Modal from "../components/StyleRelated/Modal/Modal";
import Suggesion from "../components/Navbar/Suggesion/Suggesion";
import Article from "../pages/Articles/Articles";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [authState, setAuthState] = useState("signup");
  const click = () => {
    setOpenModal(!openModal);
  };

  const insideModalHandler = () => {
    console.log("Inside modal cliked ");
  };

  const switchAuthState = () => {
    console.log("executed!");
    authState === "signup" ? setAuthState("login") : setAuthState("signup");
  };

  return (
    <Router>
      <Modal click={click} openModal={openModal}>
        <div onClick={insideModalHandler}>
          <Suggesion />
        </div>
      </Modal>
      <div className="App">
        <Header
          authState={authState}
          switchAuthState={switchAuthState}
          isAuth={false}
          setOpenModal={click}
          closing={openModal}
        />
        <main>
          <Auth authState={authState} switchAuthState={switchAuthState} />
          {/* <Article /> */}
          {/* <Home /> */}
        </main>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
