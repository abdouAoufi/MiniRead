import React from "react";
import { IMAGES } from "../../assets/assets";

function ProfilePic(props) {
  let size =
    props.size === "medium"
      ? "w-8 h-8"
      : props.size === "big"
      ? "w-12 h-12"
      : "w-6 h-6";
  return (
    <div>
      <div className={size}>
        <img
          className="rounded-full p-0.5"
          src={props.url ?? IMAGES.boy}
          alt="user image"
        />
      </div>
    </div>
  );
}

export default ProfilePic;
