import React from "react";
import { ICONS } from "../../assets/assets";

function ArticleInfo(props) {
  return (
    <div className="flex items-center justify-between mt-4  ">
      <div className="flex items-baseline relative">
        <span className="text-xs font-bold mr-2 text-black-light dark:text-gray-400">
          {props.date}
        </span>
        <div className=" mr-1  ">
          <span className="text-black-lighter font-medium">|</span>
        </div>
        <p className="text-xs mx-2 font-bold text-black-light dark:text-gray-400">
          7 min
        </p>
        <div className=" mr-1  ">
          <span className="text-black-lighter font-medium">|</span>
        </div>
        <p className="text-xs  mx-2 font-bold text-black-light dark:text-gray-400">
          {props.topic}
        </p>
      </div>
      <div className="flex px-2 mr-3">
        <img className="h-5 w-5 inline-block ml-4 p-0.5" src={ICONS.share} />
        <img className="h-5 w-5 inline-block ml-4 p-0.5" src={ICONS.save} />
      </div>
    </div>
  );
}

export default ArticleInfo;
