import React from "react";
import Article from "../../components/Article/Article";
import ProfileCardMobile from "../../components/ProfileCard/ProfileCardMobile";
import ProfileCartMd from "../../components/ProfileCard/ProfileCartMd";
import Tags from "../../components/Tags/Tags";
import { ICONS } from "../../assets/assets";
import AlsoReadMd from "../../components/AlsoRead/AlsoReadMd";

function ArticleFn() {
  const tags = [
    "Web",
    "JavaScript",
    "Css",
    "jQuery",
    "nodeJs",
    "AngularJs",
    "sQl",
  ];
  return (
    <div className="md:flex flex-column justify-center items-start md:px-4 md:justify-between px-4 py-6  ">
      <div className="md:hidden">
        <ProfileCardMobile />
      </div>
      <div className="hidden md:block mr-8">
        <ProfileCartMd />
        <div className="hidden md:block mt-4 lg:hidden">
          <Tags tags={tags} />
          <AlsoReadMd />
        </div>
      </div>
      <Article />
      <div className="hidden lg:block">
        <Tags tags={tags} />
        <div className="hidden lg:block ">
          <AlsoReadMd />
        </div>
      </div>
    </div>
  );
}

export default ArticleFn;
