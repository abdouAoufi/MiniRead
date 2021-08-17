import React, { useState, useEffect, Fragment } from "react";
import logo from "../../assets/images/svg/logo.svg";
import Search from "../icons/Search";
import MenuBurger from "../icons/Menu";
import { Link } from "react-router-dom";
import ProfileMenus from "./Menus/ProfileMenus";
import NotifMenu from "./Menus/NotifMenu";
import { LINKS_NAVBAR } from "../../assets/assets";

function header(props) {
  const defaultClasses = {
    searchBar: "hidden",
    navbarItems: "p-4 flex justify-between items-center",
  };

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

  useEffect(() => {
    if (props.closing === false) {
      hideSearchBar();
    }
  }, [props.closing]);

  return (
    <header className="sticky z-50 shadow-sm right-0 top-0 left-0 bg-white  min-h-14  unset-0  border-gray">
      <nav>
        {/* BIG CONTAINER */}
        <div className="md:px-8 md:border-1">
          {/* SEARCH APPEAR ONY ON SEARCHNG */}
          <div className={`${searchBarParams}`}>
            <div className="flex items-center lg:w:1/2">
              {/* SEARCH ICON */}
              <div className="mx-4 md:mx-4 cursor-pointer">
                <Search />
              </div>
              {/* INPUT */}
              <input
                onClick={displaySearchSuggestion}
                className="outline-none flex-1"
                type="text"
                name="search"
                placeholder="Look for anything ... . ."
              />
            </div>
          </div>
          <div className={`${menuItems}`}>
            {/* BURGER MENU ONLY FOR TABLET */}
            <div className="hidden cursor-pointer md:block lg:hidden">
              <MenuBurger className="hidden" />
            </div>
            {/* // ! LOGO */}
            <div className="cursor-pointer">
              <img src={logo} alt="logo" height="25" />
            </div>
            {/*// ! LINKS LIST */}
            <ul className="hidden md:hidden lg:flex">
              {LINKS_NAVBAR.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-secondary hover:text-white",
                    "px-3 py-2 mx-3 rounded-sm text-base font-semibold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
            {/*// ! ICONS CONTAINER */}
            <div className="flex items-center">
              {/* Profile dropdown */}
              <div className="mx-2 cursor-pointer" onClick={displaySearchBar}>
                <Search />
              </div>
              <NotifMenu />
              <div className="hidden md:block">
                <ProfileMenus />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
