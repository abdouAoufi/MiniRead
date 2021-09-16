import React from "react";

function Tags(props) {
  return (
    <div className="z-0 border-b border-gray-200 pb-4 w-64 p-2">
      <p className="text-md font-bold text-primary">Topics related :</p>
      <div className="mt-2 ">
        {props.tags?.map((tag,index) => {
          return (
            <div key={index} className="inline-block py-1 px-4 mr-3 my-1 rounded-md bg-gray-100 text-sm text-black-light">
              {tag.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
