import React from "react";
import ProfilePic from "../ProfilePicture/ProfilePic";
import { IMAGES } from "../../assets/assets";
import ArticleInfo from "./ArticleInfo";

function ArticleCard(props) {
  return (
    <article className="min-w-full p-0 m-0 items-center overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <div className="my-2 py-2  dark:bg-gray-800">
          <div className="flex">
            <ProfilePic size="small" />
            <a className="px-3  text-sm mr-2 font-semibold text-black transition-colors duration-200 transform cursor-pointer  hover:text-secondary">
              {props.article?.creator.firstName +
                " " +
                props.article?.creator.lastName}
            </a>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-xl max-w-xl uppercase block font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            >
              {props.article?.title}
            </a>
            <p className="mt-2 max-w-xl  text-gray-600   truncate dark:text-gray-300">
              {props.article?.summary}
            </p>
          </div>
          <ArticleInfo
            date={props.article?.createdAt}
            topic={props.article?.postinfo.topic}
          />
        </div>
        <div className="overflow-hidden rounded-md ml-8 h-32 w-48">
          <img
            src={props.article.imageHeaderUrl ?? IMAGES.suggestion}
            alt="article header"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
