import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import Profile from "../../../assets/images/jpeg/port.jpg";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { FaUserCog, FaPen, FaBookmark, FaSignOutAlt } from "react-icons/fa";
import { deleteToken } from "../../../services/tokenservice";
import { AuthContext } from "../../../contexts/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProfileMenus() {
  const { isLogged, setLogged, setToken } = useContext(AuthContext);
  const logout = () => {
    if (isLogged) {
      deleteToken();
      setLogged(false);
      setToken(null);
      location.reload(true);
    }
  };

  return (
    <div>
      <Menu as="div" className="cursor-pointer mx-3 md:mx-4 relative ">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className=" flex text-sm rounded-full focus:outline-none ">
                <span className="sr-only">Open user menu</span>
                {/* IMAGE-PROFILE */}
                <div>
                  <img
                    src={Profile}
                    alt="profile picture"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right border absolute right-0 mt-2 w-64 rounded-md shadow-lg 
                py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      <article className="py-4 ">
                        <div className="flex">
                          <div className="relative w-12 h-12 mr-4 ">
                            <img
                              className="rounded-full  shadow-sm"
                              src="https://randomuser.me/api/portraits/women/81.jpg"
                              alt="user image"
                            />
                            <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2" />
                          </div>
                          <div className="mr">
                            <p className="font-medium text-black ">Abdou</p>
                            <p className="text-sm font-light text-black-light">
                              @Abdouou7
                            </p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700 border-t "
                      )}
                    >
                      <div className="my-1 flex items-center text-sm">
                        <Icon>
                          <FaPen />
                        </Icon>
                        <span className="ml-3">Write article</span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      <div className="my-1 flex items-center text-sm">
                        <Icon>
                          <FaBookmark />
                        </Icon>
                        <span className="ml-3">Saved articles</span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/add-userinfo"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      <div className="my-1 flex items-center text-sm">
                        <Icon>
                          <FaUserCog />
                        </Icon>
                        <span className="ml-3">Setting account</span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <p
                      to="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      <div
                        className="my-1 flex items-center text-sm"
                        onClick={logout}
                      >
                        <Icon>
                          <FaSignOutAlt />
                        </Icon>
                        <span className="ml-3">Log out</span>
                      </div>
                    </p>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

export default ProfileMenus;
