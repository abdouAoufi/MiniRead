import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import Article from "../pages/article/article";
import Home from "../pages/home/home";
import Auth from "../pages/auth/auth-index";
import SettingProfile from "../pages/user/profile-setting/profile_setting";
import CompleteProfile from "../pages/User/add-information/add_informations";
import ErrorPage from "../pages/404/404";
import Layout from "./layout/layout";
import PostCreateTemp from "../components/create-post/create-post";
import Context from "./context/context";

function App() {
  return (
    <Context>
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
              <Route path="/add-userinfo">
                <CompleteProfile />
              </Route>
              <Route path="/update-userinfo">
                <SettingProfile />
              </Route>
              <Route path="/404">
                <ErrorPage />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
        </Layout>
      </Router>
    </Context>
  );
}

export default App;
