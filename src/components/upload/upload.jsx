import React from "react";

function upload(props) {
  return (
    <div className="flex  items-center  mt-2 bg-grey-lighter">
      <label className=" flex px-4 py-2 items-center bg-white text-blue rounded uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
        <svg
          className="w-8 h-8"
          fill="#00beb0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="ml-3 text-base leading-normal">Select a file</span>
        {props.children}
      </label>
    </div>
  );
}

export default upload;
