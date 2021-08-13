import React from "react";
import image from "../../../assets/images/jpeg/sugg.jpg";

function Suggesion() {
  return (
    <div>
      <p className="font-extrabold text-xl text-primary">Trends</p>
      <div className="mt-4">
        <article>
          <div className="flex items-center p-2 border-gray rounded-md border-2">
            <img src={image} alt="alt" className="w-32 h-24 rounded" />
            <div className="ml-4">
              <p className="font-bold mb-1">Sky ?</p>
              <p className="font-light text-boldGray">How much?</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Suggesion;
