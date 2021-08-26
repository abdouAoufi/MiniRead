import React from "react";

function ProfilePic(props) {
  return (
    <div>
      <div className="relative w-6 h-6 ">
        <img
          className="rounded-xl  shadow-sm"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user image"
        />
      </div>
    </div>
  );
}

export default ProfilePic;
