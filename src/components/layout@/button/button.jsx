import React from "react";

function Button(props) {
  const classes = props.primary
    ? " bg-secondary text-white "
    : " border bg-white border-black-ligh text-black-light";
  return (
    <button
      disabled={props.disabled}
      onClick={props.click}
      className={
        classes +
        "font-semibold py-2  px-6 mx-2 shadow-sm items-center inline-block rounded "
      }
    >
      {props.text}
    </button>
  );
}

export default Button;
