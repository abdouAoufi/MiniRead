import React, { useState, useEffect, Fragment, useContext } from "react";
import logo from "../../../assets/images/svg/logo.svg";
import ProfileMenus from "./menu/profile_menu";
import { LINKS_NAVBAR } from "../../../assets";
import { AuthContext } from "../../../contexts/auth_context";
import { LayoutContext } from "../../../contexts/layout_context";
import { FaSearch, FaBars } from "react-icons/fa";
import Icon from "../icon/icon";
import { useHistory, Link } from "react-router-dom";
import Button from "../button/button";

function header(props) {
  const history = useHistory();
  const { setShowNavbar } = useContext(LayoutContext);
  const { isLogged } = useContext(AuthContext);
  const defaultClasses = {
    searchBar: "hidden",
    navbarItems: "p-4 flex justify-between items-center",
    header:
      "sticky z-50 shadow border-0  right-0 top-0 left-0 bg-white  unset-0  ",
  };

  const redirectToAuth = () => {
    setShowNavbar(false);
    history.replace("/auth");
  };

  useEffect(() => {
    if (props.closing === false) {
      hideSearchBar();
    }
  }, [props.closing]);

  const [searchBarParams, setSearchBarPrams] = useState(
    defaultClasses.searchBar
  );
  const [menuItems, setMenuItemsState] = useState(defaultClasses.navbarItems);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const displaySearchBar = () => {
    setMenuItemsState("hidden");
    setSearchBarPrams("flex justify-center items-center h-14  my-auto");
  };

  const displaySearchSuggestion = () => {
    props.setOpenModal();
  };

  const hideSearchBar = () => {
    console.log("Executed ...");
    setMenuItemsState("p-4 flex justify-between items-center");
    setSearchBarPrams("hidden");
  };

  return (
    <header className={defaultClasses.header}>
      <nav>
        
      </nav>
    </header>
  );
}

export default header;
