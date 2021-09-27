import React from "react";
import Icon from "../layout@/icon/icon";
import { FaHeart, FaComment, FaShare,FaBookmark } from "react-icons/fa";

function ArticleInteraction({likes , comments}) {
  return (
    <div className=" mt-4 py-2  w-full flex justify-between">
      <div className="flex ">
        <div className="mr-4 flex items-center">
          <Icon>
            <FaHeart />
          </Icon>
          <span className="font-medium text-black-light text-sm ml-2">
            {likes} likes
          </span>
        </div>
        <div className="mr-4 flex items-center">
          <Icon>
            <FaComment />
          </Icon>
          <span className="font-medium text-black-light text-sm ml-2">
            {comments.length} comments
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4">
          <Icon>
            <FaShare />
          </Icon>
        </div>
        <div className="mr-4">
          <Icon>
            <FaBookmark />
          </Icon>
        </div>
      </div>
    </div>
  );
}

export default ArticleInteraction;
