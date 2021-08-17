import React from "react";
import image from "../../../assets/images/jpeg/sugg.jpg";

function Article() {
  return (
    <article className="inline-block my-2 mx-1">
      <div className="flex items-center p-2 border-gray rounded-lg border-2 px-4">
        <img src={image} alt="alt" className="w-24 h-24 rounded" />
        <div className="ml-4 mr-8">
          <p className="font-bold mb-1">Sky ?</p>
          <p className="font-light text-black">How much?</p>
        </div>
      </div>
    </article>
  );
}

export default Article;
