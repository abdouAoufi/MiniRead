import React from "react";

function Tags({tags}) {
  return (
    <div className="z-0 border-b  border-gray-200 pb-4 w-64 p-2">
      <p className="text-md font-bold text-primary">Topics related :</p>
      <div className="mt-2 ">
        {tags?.map((tag, index) => {
          return (
            <div
              key={index}
              className="px-3 inline-block mr-2 py-1 text-sm  h-8 font-semibold 
              text-black transition-colors duration-200 transform 
              bg-black-lighterr rounded cursor-pointer 
              hover:bg-secondary hover:text-white"
            >
              {tag.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
