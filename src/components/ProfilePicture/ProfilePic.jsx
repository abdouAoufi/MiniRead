import React from "react";

function ProfilePic(props) {
  return (
    <div>
      <div className="relative w-7 h-7 mr-4">
        <img
          className="rounded-full  shadow-sm"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user image"
        />
      </div>
    </div>
  );
}

export default ProfilePic;
