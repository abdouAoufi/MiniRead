import React, { useState, useEffect, Fragment, useContext } from "react";
import logo from "../../assets/images/svg/logo.svg";
import MenuBurger from "../icons/Menu";
import ProfileMenus from "./Menus/ProfileMenus";
import NotifMenu from "./Menus/NotifMenu";
import { LINKS_NAVBAR } from "../../assets/assets";
import { AuthContext } from "../../contexts/AuthContext";
import { LayoutContext } from "../../contexts/LayoutContext";
import { FaSearch } from "react-icons/fa";
import Icon from "../Icon/Icon";
import { useHistory , Link } from "react-router-dom";
import Button from "../Button/Button";

function header(props) {
  const history = useHistory();
  const { setShowNavbar } = useContext(LayoutContext);
  const { isLogged, setLogged, userName } = useContext(AuthContext);
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

  const click = function () {
    setLogged(!isLogged);
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
            <div className="hidden cursor-pointer md:block lg:hidden">
              <MenuBurger className="hidden" />
            </div>
            {/* // ! LOGO */}
            <div className="cursor-pointer">
              <Link to={"/"}>
                <img className="inline" src={logo} alt="logo" height="25" />
              </Link>
              <p className="pl-4 inline-block">
                {userName.firstName + userName.lastName}
              </p>
            </div>
            {/*// ! LINKS LIST */}
            {isLogged === true ? (
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
            ) : (
              ""
            )}
            {/*// ! ICONS CONTAINER */}
            {isLogged === true ? (
              <div className="flex items-center">
                <div className="mx-2 cursor-pointer" onClick={displaySearchBar}>
                  <Icon>
                    <FaSearch />
                  </Icon>
                </div>
                <NotifMenu />
                <div className="hidden md:block">
                  <ProfileMenus />
                </div>
              </div>
            ) : (
              <div className="flex">
                <Button
                  text="Log in"
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
