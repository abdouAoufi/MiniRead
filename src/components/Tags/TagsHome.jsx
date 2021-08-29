import React from "react";

function Tags(props) {
  return (
    <div className="border-b border-gray-200 pb-4 p-2 ">
      <div className="width-full mt-1 flex flex-row overflow-x-auto scrollbar-hide ">
        {props.tags?.map((tag, index) => {
          return (
            <a
              key={index}
              className="px-3 py-1 text-sm mr-2  font-bold text-black transition-colors duration-200 transform bg-black-lighterr rounded cursor-pointer hover:bg-secondary hover:text-white"
            >
              {tag}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
