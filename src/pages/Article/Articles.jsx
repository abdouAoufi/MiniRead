import React from "react";
import Article from "../../components/Article/Article";
import { IMAGES } from "../../assets/assets";

function ArticleFn() {
  return (
    // ! BIG CONTAINER
    <div className="md:flex flex-column justify-center items-center mx-auto md:w-1/2 lg:w-1/2 px-4 py-6 md:px-0 ">
      {/* PROFILE */}
      <div className="mx-auto md:hidden border-black-lighter mb-6 border-b pb-4">
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-4">
            <img
              className="rounded-full  shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user image"
            />
          </div>
          <div className="">
            <p className="font-semibold text-black">Aoufi abderahmane</p>
            <span className="font-normal text-xs text-black-light">
              89 follower
            </span>
            <span className="font-bold text-black-light mx-2 ">·</span>
            <span className="font-bold tracking-wide cursor-pointer text-xs text-secondary">
              Follow
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Article />
      </div>
    </div>
  );
}

export default ArticleFn;
