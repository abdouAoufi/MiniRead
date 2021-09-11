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
import Layout from "./Layout/Layout";
import { AuthContextProvider } from "../contexts/AuthContext";
import { LayoutContextProvider } from "../contexts/LayoutContext";
function App() {
  const { authState, switchAuthState } = AuthHandler();
  return (
    <LayoutContextProvider>
      <AuthContextProvider>
        <Router>
          <Layout>
            <main>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/auth">
                  <Auth
                    authState={authState}
                    switchAuthState={switchAuthState}
                  />
                </Route>
                <Route path="/article">
                  <Article />
                </Route>
              </Switch>
            </main>
          </Layout>
        </Router>
      </AuthContextProvider>
    </LayoutContextProvider>
  );
}

export default App;
