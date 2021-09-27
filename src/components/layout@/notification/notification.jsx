import React from "react";

function Notification() {
  // TODO : create notification ...
  return (
    <div className="container items-center px-5 py-12 text-blueGray-500 lg:px-20">
      <div className="p-2 mx-auto my-6 bg-white border rounded-lg shadow-xl lg:w-1/2">
        <div className="flex-grow p-6 py-2 rounded-lg">
          <div className="inline-flex items-center w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 icon icon-tabler icon-tabler-alert-triangle"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
            <strong> Note</strong>
          </div>
          <p className="my-4 text-sm font-semibold tracking-wide uppercase">
            {" "}
            If any Environment Variables values are changed between Deployments,
            deduplication will always be bypassed. So you know.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
