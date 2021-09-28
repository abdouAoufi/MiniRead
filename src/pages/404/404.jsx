import React from "react";
import { ICONS } from "../../assets";
function ErrorPage() {
  return (
    <div className="h-screen -mt-4 w-screen grid place-items-center items-center ">
      <div className="grid place-items-center">
        <img className="h-40" src={ICONS.error} />
        <p className="font-semibold mt-8 text-red-400 text-lg">
          Error some thing bad happend! try again later.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
