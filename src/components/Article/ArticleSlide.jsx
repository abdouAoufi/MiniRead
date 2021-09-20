import React from "react";
import { IMAGES } from "../../assets/assets";

function ArticleSlide() {
  return (
    <div>
      <p className="text-black font-medium text-base">
        Picked up for you{" "}
        {/* <span className="cursor-pointer text-red-300">[nothing]</span>{" "} */}
      </p>
      <div className="flex w-full items-center mt-4 overflow-scroll">
        <div className="w-full flex">
          <div className="flex md:w-1/2 bg-white   overflow-hidden">
            <img className="h-32" src={IMAGES.suggestion} loading="lazy" />
            <div className="w-2/3 ml-3 p-2">
              <h1 className="text-black font-bold text-xl">Tomorow</h1>
              <p className="mt-2 text-gray-600 text-sm break-words">
                You can't buy your future, but you can do it. Money is nothing,
                you'r everything.
              </p>
            </div>
          </div>
          <div className=" hidden md:flex w-1/2 bg-white overflow-hidden">
            <img className="h-32" src={IMAGES.suggestion} />
            <div className="w-2/3 ml-3 p-2">
              <h1 className="text-black font-bold text-xl">Tomorow</h1>
              <p className="mt-2 text-gray-600 text-sm">
                You can't buy your future, but you can do it. Money is nothing,
                you'r everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSlide;
