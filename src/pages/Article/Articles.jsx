import React from "react";
import Article from "../../components/Article/Article";
import ProfileCardMobile from "../../components/ProfileCard/ProfileCardMobile";
import { ICONS } from "../../assets/assets";

function ArticleFn() {
  return (
    // ! BIG CONTAINER
    <div className="md:flex flex-column justify-center items-start md:px-4 md:justify-between px-4 py-6  ">
      {/* PROFILE FOR MOBILE VIEW */}
      <div className="md:hidden">
        <ProfileCardMobile />
      </div>
      {/* PROFILE FOR TABLET VIEW */}
      <div className="hidden md:block mr-8">
        <div className=" w-72 border-b border-gray-300 pb-4 p-3">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <div>
              <p className="text-black font-semibold text-md  ">
                Aoufi Abderahmane
              </p>
              <p className="text-black-light font-light text-sm ">
                full stack developper
              </p>
            </div>
            <div className="relative w-12 h-12 ">
              <img
                className="rounded-full  shadow-sm"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
              />
            </div>
          </div>
          {/* INFO ABOUT USER */}
          <div className="flex flex-col place-items-start mt-3">
            {/* single info */}
            <div className="flex justify-between w-full items-center my-2">
              <div className="flex items-center">
                <img
                  src={ICONS.document}
                  alt="document"
                  className="w-6 h-6 mr-4"
                />
                <p className="text-black text-sm font-medium">Blogs</p>
              </div>
              <div className="text-sm font-semibold px-1 h-6 grid place-items-center rounded-md bg-black-lighterr text-secondary">
                12
              </div>
            </div>
            {/* single info */}
            <div className="flex justify-between w-full items-center my-2">
              <div className="flex items-center">
                <img
                  src={ICONS.follwers}
                  alt="document"
                  className="w-6 h-6 mr-4"
                />
                <p className="text-black text-sm font-medium">Followes</p>
              </div>
              <div className="text-sm font-semibold px-1 h-6 grid place-items-center rounded-md bg-black-lighterr text-secondary">
                89
              </div>
            </div>
            {/* single info */}
            <div className="flex justify-between w-full items-center my-2">
              <div className="flex items-center">
                <img src={ICONS.like} alt="document" className="w-6 h-6 mr-4" />
                <p className="text-black text-sm font-medium">Total likes</p>
              </div>
              <div className="text-sm font-semibold px-1 h-6 grid place-items-center rounded-md bg-black-lighterr text-secondary">
                122
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button class="py-1 px-4 mt-4 mr-4 cursor-pointer text-primary font-semibold tracking-wide rounded-sm text-md bg-gray-200  block md:inline-block">
              Follow{" "}
            </button>
            <div class="py-1 px-4 mt-4 mr-3  cursor-pointer text-primary font-semibold tracking-wide rounded-sm text-md bg-gray-200  block md:inline-block">
              <img src={ICONS.message} alt="message" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <Article />
      {/* TAGS FOR DESKTOP VIEW */}
      <div className="hidden lg:block">
        <div className="border w-64 h-40"></div>
      </div>
    </div>
  );
}

export default ArticleFn;
