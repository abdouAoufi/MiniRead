import React from "react";
import { Link } from "react-router-dom";

function Tags(props) {
  return (
    <div className="border-b border-gray-200 pb-4 py-2 ">
      <div className="width-full mt-1 flex flex-row overflow-x-auto scrollbar-hide ">
        {props.tags?.map((tag, index) => {
          return (
            <Link
              to={`/tags/${tag._id}`}
              key={index}
              className="px-3 mr-2 py-1 text-sm  h-8 font-semibold 
              text-black transition-colors duration-200 transform 
              bg-black-lighterr rounded cursor-pointer 
              hover:bg-secondary hover:text-white"
            >
              {tag.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
