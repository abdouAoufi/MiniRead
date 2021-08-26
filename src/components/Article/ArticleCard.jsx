import React from "react";
import ProfilePic from "../ProfilePicture/ProfilePic";

function ArticleCard(props) {
  return (
    <article className="flex w-full  items-center">
      <div className="  my-2 py-2 mx-auto dark:bg-gray-800">
        <div className="flex items-center ">
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
        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className=" text-primary dark:text-blue-400 hover:underline"
          >
            Read more
          </a>
          <span className="text-sm  mr-4 font-light text-gray-600 dark:text-gray-400">
            {props.article.date}
          </span>
          {/* <div className="flex items-center">
          <ProfilePic />
          <a className="mr-3 font-medium text-gray-700 cursor-pointer dark:text-gray-200">
            {props.article.profileName}
          </a>
        </div> */}
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
