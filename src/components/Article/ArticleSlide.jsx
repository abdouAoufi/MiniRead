import React from "react";

function ArticleSlide() {
  return (
    <div className="w-full flex">
      <div className="flex md:w-1/2 bg-white   overflow-hidden">
        <img
          className="h-32"
          src="https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <div className="w-2/3 ml-3 p-2">
          <h1 className="text-black font-bold text-xl">Tomorow</h1>
          <p className="mt-2 text-gray-600 text-sm break-words">
            You can't buy your future, but you can do it. Money is nothing,
            you'r everything.
          </p>
        </div>
      </div>
      <div className=" hidden md:flex w-1/2 bg-white overflow-hidden">
        <img
          className="h-32"
          src="https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <div className="w-2/3 ml-3 p-2">
          <h1 className="text-black font-bold text-xl">Tomorow</h1>
          <p className="mt-2 text-gray-600 text-sm">
            You can't buy your future, but you can do it. Money is nothing,
            you'r everything.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleSlide;
