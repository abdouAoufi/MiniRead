import React from "react";

function Notification() {
  return (
    <article className="mb-2 pb-2 w-80 md:w-96 lg:w-104">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-4">
            <img
              className="rounded-full  shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user image"
            />
            <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2" />
          </div>
          <div>
            <p className="text-black font-bold text-sm mb-1">Nelly Miller</p>
            <p className="text-xs text-black-light">
              Add 2 blogs for a while check it out{" "}
            </p>
          </div>
        </div>
        <p className="text-xs text-black-light font-thin">2 min</p>
      </div>
      <div className="h-0.5 w-88 bg-gray mt-3 mx-auto"></div>
    </article>
  );
}

export default Notification;
