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
        {/* BIG CONTAINER */}
        <div className="md:px-8 ">
          {/* SEARCH APPEAR ONY ON SEARCHNG */}
          <div className={`${searchBarParams}`}>
            <div className="flex items-center lg:w:1/2">
              {/* SEARCH ICON */}
              <div className="mx-4 md:mx-4 cursor-pointer">
                <Icon>
                  <FaSearch />
                </Icon>
              </div>
              {/* INPUT */}
              <input
                onClick={displaySearchSuggestion}
                className="outline-none flex-2"
                type="text"
                name="search"
                placeholder="Look for anything ...."
              />
            </div>
          </div>
          <div className={`${menuItems}`}>
            {/* BURGER MENU ONLY FOR TABLET */}
            <div className=" cursor-pointer lg:hidden">
              <Icon>
                <FaBars />
              </Icon>
            </div>
            {/* // ! LOGO */}
            <div className="cursor-pointer">
              <Link to={"/"}>
                <img className="inline" src={logo} alt="logo" height="25" />
              </Link>
            </div>
            {/*// ! LINKS LIST */}

            <ul className="hidden md:hidden lg:flex">
              {LINKS_NAVBAR.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white capitalize"
                      : "text-black hover:bg-secondary hover:text-white capitalize",
                    "px-3 py-2 mx-3 rounded-sm text-base font-semibold capitalize"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </ul>

            {/*// ! ICONS CONTAINER */}
            {isLogged === true ? (
              <div className="flex items-center">
                <div className="" onClick={displaySearchBar}>
                  <Icon>
                    <FaSearch />
                  </Icon>
                </div>
                <div className="">
                  <ProfileMenus />
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div
                  className="mx-2 hidden md:block cursor-pointer"
                  onClick={displaySearchBar}
                >
                  <Icon>
                    <FaSearch />
                  </Icon>
                </div>
                <Button
                  primary
                  text="Sign in"
                  click={redirectToAuth}
                  className="text-black-light text-sm hover:opacity-75 border-black-\light border rounded-full px-4 py-2"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
