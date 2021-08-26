import React from "react";
import ProfilePic from "../ProfilePicture/ProfilePic";

function ArticleCard(props) {
  return (
    <article className="max-w-2xl px-8  my-2 py-4 mx-auto bg-white  dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {props.article.date}
        </span>
        <a className="px-3 py-1 text-sm mr-2  font-bold text-black transition-colors duration-200 transform bg-black-lighterr rounded cursor-pointer hover:bg-secondary hover:text-white">
        {props.article.topic}
        </a>
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          {props.article.title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
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
        <div className="flex items-center">
          <ProfilePic />
          <a className="mr-3 font-medium text-gray-700 cursor-pointer dark:text-gray-200">
          {props.article.profileName}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
