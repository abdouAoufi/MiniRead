import React from "react";
import { ICONS } from "../../assets/assets";

function ArticleInfo(props) {
  // TODO : convert date
  const date = new Date(props.date);
  let d = date.getDate()+1;
  let m = date.getMonth()+1;
  let y = date.getFullYear();
  let fullDate = `${d} - ${m} - ${y}`
  return (
    <div className="flex items-center justify-between pr-12 md:pr-0 md:justify-between mt-4  ">
      <div className="flex items-baseline relative">
        <span className="text-xs font-bold mr-2 text-black-light dark:text-gray-400">
          {fullDate}
        </span>
        <div className=" mr-1  ">
          <span className="text-black-lighter font-medium">|</span>
        </div>
        <p className="text-xs mx-2 font-bold text-black-light dark:text-gray-400">
          {props.timeReading} min
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
