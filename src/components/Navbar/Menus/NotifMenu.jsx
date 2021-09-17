import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Bell from "../../icons/Bell";
import { Link } from "react-router-dom";
import Notification from "../Notification/Notification";
import { FaBell } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NotifMenu() {
  return (
    <Menu as="div" className="cursor-pointer mx-3 md:mx-4 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className=" flex text-sm rounded-full focus:outline-none ">
              <span className="sr-only">Open user menu</span>
              {/* BELL-ICON */}
              <div className="relative">
                <span className="absolute -top-2 -right-2 rounded-md font-semibold shadow-sm px-1 bg-secondary text-white">
                  4
                </span>
                <IconContext.Provider
                  value={{
                    size: "1.35rem",
                    style: {
                      color: "#6b7280",
                    },
                  }}
                >
                  <FaBell />
                </IconContext.Provider>
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
            <div>
              <Menu.Items
                static
                className="origin-top-right mx-6 absolute right-1 lef-1 mt-2 w-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="pt-4  mx-4 pb-3 flex justify-between mb-2 border-b-2 border-gray ">
                  <p className="font-bold text-md text-primary">Notification</p>
                  <p className="font-semibod text-sm text-secondary">
                    Mark as read
                  </p>
                </div>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      <div>
                        {/* NOTIFICATION */}
                        <Notification />
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
                      <div>
                        {/* NOTIFICATION */}
                        <Notification />
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default NotifMenu;
