import React, { useState } from "react";
import logo from "../../assets/images/svg/logo.svg";
import profilePicture from "../../assets/images/jpeg/port.jpg";
import Bell from "../icons/Bell";
import Search from "../icons/Search";
import Menu from "../icons/Menu";
import { Link } from "react-router-dom";

function header(props) {
  let stateForDisplay = true;
  const [menuItems, setMenuItemsState] = useState(
    "p-4 flex justify-between items-center"
  );
  const [searchBarParams, setSearchBarPrams] = useState("hidden");
  const switchSearchBar = () => {
    setMenuItemsState("hidden");
    setSearchBarPrams("flex justify-center items-center py-3");
  };
  return (
    <header>
      <nav>
        {/* BIG CONTAILNER */}
        <div className=" border-b-2 border-gray md:px-8 md:border-1">
          {/* SEARCH APPEAR ONY ON MOBILE */}
          <div className={`${searchBarParams}`}>
            <div className="flex items-center" >
              {/* SEARCH ICON */}
              <div className="mx-4 md:mx-4 cursor-pointer">
                <Search />
              </div>
              {/* INPUT */}
              <input
                className="outline-none"
                type="text"
                name="search"
                placeholder="Look for anything ... . ."
              />
            </div>
          </div>
          <div className={`${menuItems}`}>
            {/* BURGER MENU ONLY FOR TABLET */}
            <div className="hidden cursor-pointer md:block lg:hidden">
              <Menu className="hidden" />
            </div>
            {/* LOGO */}
            <div className="cursor-pointer">
              <img src={logo} alt="logo" height="25" />
            </div>
            {/* LINKS LIST */}
            <ul className="hidden md:hidden lg:flex">
              <li className="mx-6 text-black font-semibold">
                <Link to="/home">Home</Link>
              </li>
              <li className="mx-6 text-black font-semibold">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="mx-6 text-black font-semibold">
                <Link to="/quizes">Quizes</Link>
              </li>
              <li className="mx-6 text-black font-semibold">
                <Link to="/descussion">Descussion</Link>
              </li>
            </ul>
            {/* ICONS CONTAINER */}
            <div className="flex">
              {/* SEARCH ICON */}
              <div
                onClick={switchSearchBar}
                className="mx-2 md:mx-3 cursor-pointer"
              >
                <Search />
              </div>
              {/* NOTIFICATION */}
              <div className="mx-2 md:mx-3 cursor-pointer">
                <Bell />
              </div>
              {/* IMAGE-PROFILE */}
              <div className="mx-2 md:mx-3 cursor-pointer">
                <img src={profilePicture} className="h-6 w-6 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
