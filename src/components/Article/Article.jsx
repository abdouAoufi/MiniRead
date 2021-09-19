import React from "react";
import { ICONS } from "../../assets/assets";

function Article({ article }) {
  return (
    <div className="lg:mx-8 px-4">
      {/* ARTICLE CONTENT */}
      <div>
        <p className="tracking-wide text-secondary-dark font-normal text-sm">
          Trend{" "}
          <span>
            <img
              src={ICONS.trend}
              alt="trends"
              className="ml-2 w-6 h-6 inline-block"
            />
          </span>
        </p>
        {/* TITLE */}
        <h1 className="mt-3 text-black-dark tracking-wider font-bold md:font-bold text-4xl ">
          {article?.title}
        </h1>

        <p className="mt-4 text-black font-normal text-lg ">{article?.summary}</p>

        {/* IMAGE */}
        <div>
          <div className="my-3 w-full  rounded-md overflow-hidden ">
            <img
              src={article?.content.data.imageUrl_1}
              alt="article header"
              className=" w-full"
            />
            <p className="text-sm font-light text-center text-black-light mt-1">
              {article?.title}
            </p>
          </div>
          <p className="mt-2 text-black font-normal">
            {article?.content.data.paragraph_1}
          </p>
        </div>
        <div>
          <div className="my-3 w-full  rounded-md overflow-hidden ">
            <img
              src={article?.content.data.imageUrl_2}
              alt="article header"
              className=" w-full"
            />
            <p className="text-sm font-light text-center text-black-light mt-1">
              {article?.title}
            </p>
          </div>
          <p className="mt-2 text-black font-normal">
            {article?.content.data.paragraph_2}
          </p>
        </div>

        {/* IMAGE */}
      </div>
    </div>
  );
}

export default Article;
