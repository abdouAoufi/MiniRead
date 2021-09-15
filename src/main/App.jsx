import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Article from "../pages/Articles/Articles";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Layout from "./Layout/Layout";
import PostCreateTemp from "../components/PostCreateTemp/PostCreateTemp";
import { AuthContextProvider } from "../contexts/AuthContext";
import { LayoutContextProvider } from "../contexts/LayoutContext";
import { WindowProvider } from "../contexts/Windowcontenxt";
function App() {
  return (
    <LayoutContextProvider>
      <AuthContextProvider>
        <WindowProvider>
          <Router>
            <Layout>
              <main>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/auth">
                    <Auth />
                  </Route>
                  <Route path="/article/:id">
                    <Article />
                  </Route>
                  <Route path="/create-post">
                    <PostCreateTemp />
                  </Route>
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </main>
            </Layout>
          </Router>
        </WindowProvider>
      </AuthContextProvider>
    </LayoutContextProvider>
  );
}

export default App;
