import React from "react";
import Article from "../../components/Article/Article";
import ProfileCardMobile from "../../components/ProfileCard/ProfileCardMobile";
import ProfileCartMd from "../../components/ProfileCard/ProfileCartMd";
import Tags from "../../components/Tags/Tags";
import AlsoReadMd from "../../components/AlsoRead/AlsoReadMd";
import Footer from "../../components/Footer/Footer";
import PostInteraction from "../../components/PostInteraction/PostInteraction";

function ArticleFn() {
  const tags = [
    "Web",
    "JavaScript",
    "Css",
    "jQuery",
    "nodeJs",
    "AngularJs",
    "SQL",
    "Data structure",
  ];
  return (
    <section>
      <div className="md:flex flex-column justify-center items-start md:px-4 md:justify-between px-4 py-6  ">
        <div className="md:hidden">
          <ProfileCardMobile />
        </div>
        <div className="hidden md:block mr-8 ">
          <ProfileCartMd />
          <div className="hidden md:block mt-4 lg:hidden ">
            <Tags tags={tags} />
            <AlsoReadMd />
          </div>
        </div>
        <div>
          <Article />
          <PostInteraction />
        </div>

        <div className="hidden lg:block ">
          <Tags tags={tags} />
          <div className="hidden lg:block ">
            <AlsoReadMd />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ArticleFn;
