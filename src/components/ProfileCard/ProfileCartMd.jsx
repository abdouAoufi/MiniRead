import React from "react";
import { ICONS } from "../../assets/assets";

function ProfileCartMd(props) {
  console.log(props.author);
  return (
    <div className=" w-72 md:border-b lg:border-0 border-gray-200 pb-5 p-3">
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <div>
          <p className="text-black font-semibold text-md  ">
            {props.author.firstName + " " + props.author.lastName}
          </p>
          <p className="text-black-light font-normal text-sm ">
            {props.author.work}
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
            <img src={ICONS.document} alt="document" className="w-6 h-6 mr-4" />
            <p className="text-black text-sm font-medium">Blogs</p>
          </div>
          <div className="text-sm font-semibold px-1 h-6 grid place-items-center rounded-md bg-black-lighterr text-secondary">
            {props.author.postInfo.postCount}
          </div>
        </div>
        {/* single info */}
        <div className="flex justify-between w-full items-center my-2">
          <div className="flex items-center">
            <img src={ICONS.follwers} alt="document" className="w-6 h-6 mr-4" />
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
        <button className="py-1 px-4 mt-4 mr-4 cursor-pointer text-primary font-semibold tracking-wide rounded-sm text-md bg-gray-200  block md:inline-block">
          Follow{" "}
        </button>
        <div className="py-1 px-4 mt-4 mr-3  cursor-pointer text-primary font-semibold tracking-wide rounded-sm text-md bg-gray-200  block md:inline-block">
          <img src={ICONS.message} alt="message" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default ProfileCartMd;
