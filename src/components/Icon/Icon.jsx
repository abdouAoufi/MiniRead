import React from "react";
import { IconContext } from "react-icons/lib";

function Icon(props) {
  return (
    <IconContext.Provider
      value={{
        size: "1.35rem",
        style: {
          color: "#6b7280",
        },
      }}
    >
      {props.children}
    </IconContext.Provider>
  );
}

export default Icon;
