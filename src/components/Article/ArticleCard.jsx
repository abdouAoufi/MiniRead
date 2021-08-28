import React from "react";
import ProfilePic from "../ProfilePicture/ProfilePic";
import { ICONS } from "../../assets/assets";

function ArticleCard(props) {
  return (
    <article className="flex w-full p-0 m-0 items-center">
      <div className="my-2 py-2  dark:bg-gray-800">
        <div className="flex">
          <ProfilePic />
          <a className="px-3  text-sm mr-2 font-semibold text-black transition-colors duration-200 transform cursor-pointer  hover:text-secondary">
            Aoufi abderahmane
          </a>
        </div>
        <div className="mt-2">
          <a
            href="#"
            className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            {props.article.title}
          </a>
          <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-300">
            {props.article.content}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4  ">
          <div className="flex relative">
            <span className="text-xs font-bold mr-1 text-black-light dark:text-gray-400">
              {props.article.date}
            </span>
            <p className="mx-2 line"> · </p>
            <span className="text-xs  font-bold text-black-light dark:text-gray-400">
              7 min
            </span>
            <p className="mx-2 line"> · </p>
            <span className="text-xs  mr-2 font-bold text-black-light dark:text-gray-400">
              {props.article.topic}
            </span>
          </div>
          <div className="flex px-2 mr-3">
            <img className="h-5 w-5 inline-block ml-4 p-0.5" src={ICONS.share} />
            <img className="h-5 w-5 inline-block ml-4 p-0.5" src={ICONS.save} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-md ml-8 h-32 w-48">
        <img
          src="https://miro.medium.com/fit/c/200/134/0*uFpxUEweapysDtOl"
          alt="article header"
          className="h-full w-full"
        />
      </div>
    </article>
  );
}

export default ArticleCard;
