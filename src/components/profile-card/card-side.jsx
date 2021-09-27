import React from "react";
import { IMAGES } from "../../assets";

function ProfileSide() {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex">
        <div className="mr-4">
          <img
            className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full"
            src={IMAGES.boy}
            alt="Avatar"
          />
        </div>
        <div>
          <h1 className="text-md font-medium text-gray-700">Crestopher joe</h1>
          <p className="text-black-light text-xs">UX Designer at Hyrule</p>
        </div>
      </div>
      <button className="text-black-light text-sm hover:opacity-75 border-black-\light border rounded-full px-4 py-2">
        Follow
      </button>
    </div>
  );
}

export default ProfileSide;
