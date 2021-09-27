import React from "react";

function welcome() {
  return (
    <div className="flex-column items-center justify-center h-full">
      <h3 className=" text-md   focus: ">Welcome to MiniRead </h3>
      <div className="mt-5">
        <p className=" font-bold   mt-2">Read articles you like </p>
        <p className=" font-bold   mt-2">Write articles and share </p>
        <p className=" font-bold  mt-2">Interact with people </p>
      </div>
    </div>
  );
}

export default welcome;
