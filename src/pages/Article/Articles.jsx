import React from "react";
import Article from "../../components/Article/Article";
import ProfileCardMobile from "../../components/ProfileCard/ProfileCardMobile";

import ProfileCartMd from "../../components/ProfileCard/ProfileCartMd";

function ArticleFn() {
  return (
    // ! BIG CONTAINER
    <div className="md:flex flex-column justify-center items-start md:px-4 md:justify-between px-4 py-6  ">
      {/* PROFILE FOR MOBILE VIEW */}
      <div className="md:hidden">
        <ProfileCardMobile />
      </div>
      {/* PROFILE FOR TABLET VIEW */}
      <div className="hidden md:block mr-8">
        <ProfileCartMd />
      </div>
      <Article />
      {/* TAGS FOR DESKTOP VIEW */}
      <div className="hidden lg:block">
        <div className="border w-64 h-40"></div>
      </div>
    </div>
  );
}

export default ArticleFn;
