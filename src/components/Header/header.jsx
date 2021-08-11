import React from "react";
import logo from "../../assets/images/svg/logo.svg";
import profilePicture from "../../assets/images/jpeg/port.jpg";
import Bell from "../icons/Bell";
import Search from "../icons/Search";
import Menu from "../icons/Menu";
import { Link } from "react-router-dom";

const cp = "cursor-pointer";

function header(props) {
  return (
    <header>
      <nav>
        <div className="border-b-2 border-gray md:px-8 md:border-1">
          <div className="p-4 flex justify-between items-center ">
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
              <div className="mx-2 md:mx-3 cursor-pointer">
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
