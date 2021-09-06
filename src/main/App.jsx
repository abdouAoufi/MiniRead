import React, { useState } from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "../components/StyleRelated/Modal/Modal";
import Suggesion from "../components/Navbar/Suggesion/Suggesion";
import Article from "../pages/Articles/Articles";
import Home from "../pages/Home/Home";
import AuthHandler from "./AuthHandler";
import Auth from "../pages/Auth/Auth";
import { AuthContextProvider } from "../contexts/AuthContext";
function App() {
  const [openModal, setOpenModal] = useState(false);

  const click = () => {
    setOpenModal(!openModal);
  };

  const insideModalHandler = () => {
    console.log("Inside modal cliked ");
  };
  // controlling the navbar from app when is shared
  const { authState, switchAuthState } = AuthHandler();

  return (
    <AuthContextProvider>
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
            isAuth={true}
            setOpenModal={click}
            closing={openModal}
          />
          <main>
            <Switch>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/auth">
                <Auth authState={authState} switchAuthState={switchAuthState} />
              </Route>
              <Route path="/article">
                <Article />
              </Route>
            </Switch>
          </main>
        </div>
        {/* <Footer /> */}
      </Router>
    </AuthContextProvider>
  );
}

export default App;
