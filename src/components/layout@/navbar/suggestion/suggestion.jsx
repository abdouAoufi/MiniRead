import React from "react";
 import { ICONS } from "../../../../assets";

function Suggesion() {
  return (
    <div className="px-4 py-3">
      <p className="font-medium text-sm capitalize  text-primary ">
        Trending shortcut
      </p>
      <div className="mt-2">
        <div className="inline-block py-1 px-4 mr-3 my-1 rounded-md bg-gray-100 text-sm text-black-light">
          Web
        </div>
        <div className="inline-block py-1 px-4 mr-3 my-1 rounded-md bg-gray-100 text-sm text-black-light">
          Front end
        </div>
        <div className="inline-block py-1 px-4 mr-3 my-1 rounded-md bg-gray-100 text-sm text-black-light">
          Dev Ops
        </div>
      </div>

      <p className="font-medium text-sm capitalize  mt-2 text-primary ">
        resent search
      </p>
      <div className=" pb-2">
        <div className="mt-3 cursor-pointer hover:bg-gray-100 flex  py-1 rounded-md items-center justify-between">
          <div>
            <img
              src={ICONS.recent}
              alt="recent research"
              className="w-5 h-5 mr-2 ml-1 inline-block "
            />
            <p className=" inline-block font-medium text-black-light text-sm">
              Javascript
            </p>
          </div>

          <img
            src={ICONS.deltee}
            alt="recent research"
            className="w-4 h-4 mr-3 inline-block "
          />
        </div>
        <div className="mt-3 cursor-pointer hover:bg-gray-100 flex  py-1 rounded-md items-center justify-between">
          <div>
            <img
              src={ICONS.recent}
              alt="recent research"
              className="w-5 h-5 mr-2 ml-1 inline-block "
            />
            <p className=" inline-block font-medium text-black-light text-sm">
              How nodeJs works behind the scene
            </p>
          </div>

          <img
            src={ICONS.deltee}
            alt="recent research"
            className="w-4 h-4 mr-3 inline-block "
          />
        </div>
        <div className="mt-3 cursor-pointer hover:bg-gray-100 flex  py-1 rounded-md items-center justify-between">
          <div>
            <img
              src={ICONS.recent}
              alt="recent research"
              className="w-5 h-5 mr-2 ml-1 inline-block "
            />
            <p className=" inline-block font-medium text-black-light text-sm">
              why Javascript is the best?
            </p>
          </div>

          <img
            src={ICONS.deltee}
            alt="recent research"
            className="w-4 h-4 mr-3 inline-block "
          />
        </div>
        <div className="mt-3 cursor-pointer hover:bg-gray-100 flex  py-1 rounded-md items-center justify-between">
          <div>
            <img
              src={ICONS.recent}
              alt="recent research"
              className="w-5 h-5 mr-2 ml-1 inline-block "
            />
            <p className=" inline-block font-medium text-black-light text-sm">
              Is ruby still used ?
            </p>
          </div>

          <img
            src={ICONS.deltee}
            alt="recent research"
            className="w-4 h-4 mr-3 inline-block "
          />
        </div>
      </div>
    </div>
  );
}

export default Suggesion;
