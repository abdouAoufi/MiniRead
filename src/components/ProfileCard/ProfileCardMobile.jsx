import React from "react";

function ProfileCardMobile() {
  return (
    <div className="mx-auto md:hidden border-black-lighter mb-6 border-b pb-4">
      <div className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
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
  );
}

export default ProfileCardMobile;
