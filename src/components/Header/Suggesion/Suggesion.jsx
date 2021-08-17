import React from "react";
import Article from "./SuggestoinCard";

function Suggesion() {
  return (
    <div className="">
      <p className="font-extrabold text-xl text-primary ">Trends</p>
      <div className="mt-2 block md:grid grid-col-3 gap-0.5">
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}

export default Suggesion;
