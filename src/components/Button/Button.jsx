import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.click}
      className=" rounded bg-secondary text-white block  font-bold py-2 px-6 ml-2  items-center"
    >
      {props.text}
    </button>
  );
}

export default Button;
