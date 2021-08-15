import React from "react";

function Notification() {
  return (
    <article>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-6">
            <img
              className="rounded-full  shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user image"
            />
            <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2" />
          </div>
          <div>
            <p className="text-black font-bold text-sm mb-2">Nelly Miller</p>
            <p className="text-xs text-black-light">
              Add 2 blogs for a while check it out{" "}
            </p>
          </div>
        </div>
        <p className="text-xs text-black-light font-semibold">2 min</p>
      </div>
    </article>
  );
}

export default Notification;
