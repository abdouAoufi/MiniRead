import React, { useContext, useEffect, useState } from "react";
import Article from "../../components/articles/article";
import ProfileCardMobile from "../../components/profile-card/card-mobile";
import ProfileCartMd from "../../components/profile-card/card-medium";
import Tags from "../../components/tag/article-tag";
import AlsoReadMd from "../../components/also-read/also_read"
import { LayoutContext } from "../../contexts/layout_context";
import { useParams } from "react-router-dom";
import { getSinglePostDB } from "../../api/article-service";
import Window from "../../components/layout@/dialog/dialog";
import LoadingPost from "../../components/layout@/loading/Loading_post";
import Loading from "../../components/layout@/loading/Loading";

function ArticleFn() {
  let articleID = useParams("id");
  const { setShowFooter, showNavbar, setShowNavbar } =
    useContext(LayoutContext);
  const [article, setArticle] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState({
    title: "Something went wrong!",
    message:
      "There is a problem to connect with server! please try again later",
  });
  useEffect(() => {
    if (!showNavbar) setShowNavbar(true);
    setShowFooter(true);
    getSingleArticle();
  }, []);

  const getSingleArticle = async () => {
    let fetchedArticle;
    try {
      const response = await getSinglePostDB(articleID.id);
      if (!response.ok) {
        response.json().then((res) => {
          return setMessageWindow(
            res.title || "Something went wrong!",
            res.message ||
              "There is a problem to connect with server! please try again later"
          );
        });
      }

      fetchedArticle = await response.json();
      setArticle(fetchedArticle.article);
    } catch (err) {
      return setMessageWindow(
        "Something went wrong!",
        err.message ??
          "There is a problem to connect with server! please try again later"
      );
    }
  };

  const setMessageWindow = (title, message) => {
    let updatedMessage = { ...messageModal };
    updatedMessage.title = title;
    updatedMessage.message = message;
    setMessageModal(updatedMessage);
    setOpenModal(!openModal);
  };

  return (
    <section>
      <Window
        openModal={openModal}
        click={() => setOpenModal(!setOpenModal)}
        message={messageModal}
      />
      <div className="md:flex flex-column justify-center items-around px-4 md:justify-between  py-6  ">
        <div className="md:hidden">
          {article ? <ProfileCardMobile author={article.creator} /> : <Loading />}
        </div>
        <div className="hidden md:block ">
          <div className="w-72">
            {article ? <ProfileCartMd author={article.creator} /> : <Loading />}
          </div>
          <div className="hidden md:block mt-4 lg:hidden ">
            {article ? (
              <div className="border">
                <Tags tags={article.tags} />
                <AlsoReadMd headTitle="People also read" />
              </div>
            ) : (
              <div className="w-72">
                <Loading />
              </div>
            )}
          </div>
        </div>
        <div>
          {article ? (
            <Article article={article} />
          ) : (
            <div className="w-120 mx-12">
              <LoadingPost />
            </div>
          )}
        </div>
        <div className="hidden lg:block ">
          <div className="w-72">
            {article ? <Tags tags={article.tags} /> : <Loading />}
          </div>
          <div className="hidden lg:block ">
            <AlsoReadMd headTitle="People also read" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleFn;
