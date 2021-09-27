import React, { useState, useEffect, Fragment, useContext } from "react";
import logoMini from "../../../assets/images/svg/logo-mini.svg";
import logo from "../../../assets/images/svg/logo.svg";
import user from "../../../assets/images/svg/user.svg";
import ProfileMenus from "./menu/profile_menu";
import { LINKS_NAVBAR } from "../../../assets";
import { AuthContext } from "../../../contexts/auth_context";
import { LayoutContext } from "../../../contexts/layout_context";
import { FaSearch, FaBars } from "react-icons/fa";
import Icon from "../icon/icon";
import { useHistory, Link } from "react-router-dom";
import Button from "../button/button";

function header() {
  const { isLogged } = useContext(AuthContext);
  const { setShowNavbar } = useContext(LayoutContext);
  const history = useHistory();
  const redirectAuth = () => {
    setShowNavbar(false);
    history.replace("/auth/login");
  };
  return (
    <header className="sticky z-50 shadow border-0  right-0 top-0 left-0 bg-white  unset-0  border">
      <nav>
        <div className="flex justify-between px-4 lg:px-8 items-center py-3">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="mr-2 " />
            </Link>

            <div className="hidden md:block">
              <Link
                to="/"
                className="btn btn-primary ml-4 bg-gray-100 text-primary border-0 hover:bg-secondary hover:text-white"
              >
                home
              </Link>
              <Link
                to="/new"
                className="btn btn-primary   bg-transparent text-primary border-0 hover:bg-secondary hover:text-white"
              >
                news
              </Link>
              <Link
                to="/about"
                className="btn btn-primary  bg-transparent text-primary border-0 hover:bg-secondary hover:text-white"
              >
                about
              </Link>
            </div>
          </div>
          <div className="flex   items-center">
            <div className="flex items-center border-2 rounded-lg">
              <input
                placeholder="Search"
                type="text"
                className=" pl-4 py-2 w-48 md:w-64 outline-none text-black font-semibold"
              />
              <div className="border-l-2 ">
                <Icon>
                  <FaSearch />
                </Icon>
              </div>
            </div>
            <div className="md:mx-2">
              {isLogged ? (
                <ProfileMenus />
              ) : (
                <Button click={() => redirectAuth()} primary text="Sign in" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
