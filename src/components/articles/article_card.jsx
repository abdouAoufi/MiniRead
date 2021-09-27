import React, { useEffect } from "react";
import ProfilePic from "../profile-picture/profile-pic";
import { IMAGES } from "../../assets";
import ArticleInfo from "./article_info";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  return (
    <article className="min-w-full py-4 m-0 items-center overflow-hidden  ">
      <div className="flex justify-between items-center w-full">
        <div className="my-2 py-2  dark:bg-gray-800">
          <div className="flex">
            <ProfilePic size="small" />
            <Link
              to={`/user/${props.article?.creator._id}`}
              className="px-3  text-sm mr-2 font-semibold text-black transition-colors duration-200 transform cursor-pointer  hover:text-secondary"
            >
              {props.article?.creator.firstName +
                " " +
                props.article?.creator.lastName}
            </Link>
          </div>
          <div className="mt-2">
            <Link
              to={`/article/${props.article._id}`}
              className="text-xl max-w-xl uppercase block font-bold text-gray-700 dark:text-white dark:hover:text-gray-200 hover:text-secondary-dark"
            >
              {props.article?.title}
            </Link>
            <p className="mt-2 max-w-xl  text-gray-600   truncate dark:text-gray-300">
              {props.article?.summary}
            </p>
          </div>
        </div>
        <div className="overflow-hidden hidden md:block rounded-md  h-32 w-48">
          <img
            // src={props.article.imageHeaderUrl ?? IMAGES.suggestion}
            src={IMAGES.suggestion}
            alt="article header"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <ArticleInfo
          timeReading={props.article?.articleinfo.timeReading}
          date={props.article?.createdAt}
          topic={props.article?.articleinfo.topic}
        />
      </div>
    </article>
  );
}

export default ArticleCard;