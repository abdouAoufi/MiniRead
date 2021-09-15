import React, { useContext, useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import ProfileCardMobile from "../../components/ProfileCard/ProfileCardMobile";
import ProfileCartMd from "../../components/ProfileCard/ProfileCartMd";
import Tags from "../../components/Tags/Tags";
import AlsoReadMd from "../../components/AlsoRead/AlsoReadMd";
import Footer from "../../components/Footer/Footer";
import PostInteraction from "../../components/PostInteraction/PostInteraction";
import { TAGS } from "../../assets/assets";
import { LayoutContext } from "../../contexts/LayoutContext";
import { useParams } from "react-router-dom";
import { getSinglePostDB } from "../../api/articleservice";
import Window from "../../components/Window/Window";

function ArticleFn() {
  let articleID = useParams("id");
  const { setShowFooter } = useContext(LayoutContext);
  const [openModal, setOpenModal] = useState(true);
  const [messageModal, setMessageModal] = useState({
    title: "title",
    message: "message",
  });
  // TODO : fetch single article
  useEffect(() => {
    setShowFooter(true);
    getSingleArticle();
  }, []);

  const getSingleArticle = async () => {
    let post;
    try {
      const response = await getSinglePostDB(articleID.id);
      post = await response.json();
    } catch (err) {
      return setMessageWindow(
        "Something went wrong!",
        err.message ??
          "There is a problem to connect with server! please try again later"
      );
    }
    console.log(post);
  };

  const setMessageWindow = (title, message) => {
    let updatedMessage = { ...messageModal };
    updatedMessage.title = title;
    updatedMessage.message = message;
    setMessageModal(updatedMessage);
    setModalDisplay(!openModal);
  };

  return (
    <section>
      <Window
        openModal={openModal}
        click={() => setOpenModal(!setOpenModal)}
        message={messageModal}
      />
      <div className="md:flex flex-column justify-center items-start md:px-4 md:justify-between px-4 py-6  ">
        <div className="md:hidden">
          <ProfileCardMobile />
        </div>
        <div className="hidden md:block mr-8 ">
          <ProfileCartMd />
          <div className="hidden md:block mt-4 lg:hidden ">
            <Tags tags={TAGS} />
            <AlsoReadMd />
          </div>
        </div>
        <div>
          <Article />
          <PostInteraction />
        </div>

        <div className="hidden lg:block ">
          <Tags tags={TAGS} />
          <div className="hidden lg:block ">
            <AlsoReadMd />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleFn;
