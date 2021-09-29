import React from "react";
import ProfileSide from "../profile-card/card-side";
function PeopleCard() {
  return (
    <div className="mt-8 border-b pb-8">
      <h2 className="title-uppercase">Who to follow</h2>
      <div className="mt-4 hover:border rounded">
        <ProfileSide />
        <ProfileSide />
        <ProfileSide />
        <ProfileSide />
      </div>
    </div>
  );
}

export default PeopleCard;
