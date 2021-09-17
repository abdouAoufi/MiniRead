import React, { useContext, useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import ProfileCardMobile from "../../components/ProfileCard/ProfileCardMobile";
import ProfileCartMd from "../../components/ProfileCard/ProfileCartMd";
import Tags from "../../components/Tags/Tags";
import AlsoReadMd from "../../components/AlsoRead/AlsoReadMd";
import PostInteraction from "../../components/PostInteraction/PostInteraction";
import { TAGS } from "../../assets/assets";
import { LayoutContext } from "../../contexts/LayoutContext";
import { useParams } from "react-router-dom";
import { getSinglePostDB } from "../../api/articleservice";
import Window from "../../components/Window/Window";
import LoadingPost from "../../components/Loading/LoadingPost";
import Loading from "../../components/Loading/Loading";

function ArticleFn() {
  let articleID = useParams("id");
  const { setShowFooter } = useContext(LayoutContext);
  const [postInfo, setPostInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState({
    title: "Something went wrong!",
    message:
      "There is a problem to connect with server! please try again later",
  });
  useEffect(() => {
    setShowFooter(true);
    setTimeout(getSingleArticle, 2000);
  }, []);

  const getSingleArticle = async () => {
    let fetchedPost;
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
      fetchedPost = await response.json();
      setPostInfo(fetchedPost);
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
          {postInfo ? (
            <ProfileCardMobile author={postInfo.post.creator} />
          ) : (
            <Loading />
          )}
        </div>
        <div className="hidden md:block ">
          <div className="w-72">
            {postInfo ? (
              <ProfileCartMd author={postInfo.post.creator} />
            ) : (
              <Loading />
            )}
          </div>
          <div className="hidden md:block mt-4 lg:hidden ">
            {postInfo ? (
              <div className="border">
                <Tags tags={postInfo.post.tags} />
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
          {postInfo ? (
            <Article post={postInfo.post} />
          ) : (
            <div className="w-120 mx-12">
              <LoadingPost />
            </div>
          )}
          {/*<PostInteraction />*/}
        </div>
        <div className="hidden lg:block ">
          <div className="w-72">
            {postInfo ? <Tags tags={postInfo.post.tags} /> : <Loading />}
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
