import React from "react";

function Tags(props) {
  return (
    <div className="border-b border-gray-200 pb-4 p-2 ">
      <div className="mt-2 flex flex-row overflow-auto">
        {props.tags?.map((tag,index) => {
          return (
            <div key={index} className=" grid place-items-center w-auto py-1 px-4 mr-3 h-8 my-1 rounded-md bg-gray-100 text-sm text-black-light">
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
