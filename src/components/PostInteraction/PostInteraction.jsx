import React from "react";
import { ICONS } from "../../assets/assets";


function PostInteraction() {
  return (
    <div className=" mt-4 py-2  w-full flex justify-between">
      <div className="flex">
        <div className="mr-4">
          <img className="h-5 w-5 inline-block mr-2" src={ICONS.likee} />
          <span className="font-medium text-black-light text-sm">12 likes</span>
        </div>
        <div className="mr-4">
          <img className="h-5 w-5 inline-block mr-2" src={ICONS.comment} />
          <span className="font-medium text-black-light text-sm">
            3 comments
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4">
          <img className="h-5 w-5 inline-block mr-2" src={ICONS.save} />
        </div>
        <div className="mr-4">
          <img className="h-5 w-5 inline-block mr-2" src={ICONS.share} />
        </div>
      </div>
    </div>
  );
}

export default PostInteraction;
