import React from "react";

function ProfileCardMobile(props) {
  return (
    <div className="mx-auto md:hidden  mb-6 border-b pb-4">
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4">
          <img
            className="rounded-full  shadow-sm medium"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
        </div>
        <div className="">
          <p className="font-semibold text-black">
            {props.author?.firstName + " " + props.author?.lastName}
          </p>
          <span className=" text-xs text-black-light">
            {" "}
            {props.author?.work}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardMobile;
