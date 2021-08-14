import React from "react";
import Article from "./Article";

function Suggesion() {
  return (
    <div>
      <p className="font-extrabold text-xl text-primary">Trends</p>
      <div className="mt-2">
        <Article />
        <Article />
        <div className="hidden md:block">

        <Article />
        <Article />
        </div>
      </div>
    </div>
  );
}

export default Suggesion;
