import React, { useEffect, useContext, useState } from "react";
import Tags from "../../components/Tags/TagsHome";
// import useUpdateEffect from "../../utils/useupdateeffect";
import ArticleCard from "../../components/Article/ArticleCard";
import Loading from "../../components/Loading";
import LoadingPost from "../../components/Loading/LoadingPost";
import AlsoRead from "../../components/AlsoRead/AlsoReadMd";
import ProfileSide from "../../components/ProfileCard/ProfileSide";
import ArticleSlide from "../../components/Article/ArticleSlide";
import HomeHandler from "./HomeHandler";
import { LayoutContext } from "../../contexts/LayoutContext";
import { getTages, getTrendPost, getHomePosts } from "../../api/homeservice";
import { WindowContext } from "../../contexts/Windowcontenxt";

function Home() {
  const { TABS, switchTabs, classes } = HomeHandler();
  const { showFooter, setShowFooter } = useContext(LayoutContext);
  const [tags, setTags] = useState([]);
  const { setMessageWindow } = useContext(WindowContext);
  const [trendPosts, setTrendPosts] = useState([]);
  const [homePosts, setHomePosts] = useState([]);
  useEffect(async () => {
    if (showFooter) {
      setShowFooter(false);
    }
    fetchResources();
  }, []);

  // useUpdateEffect(() => alert("Tags loaded successfully"), [tags]);

  const fetchResources = async () => {
    let fetchedTags, fetchedTrendPosts, fetchedPosts;
    try {
      fetchedTags = await getTages();
      fetchedTrendPosts = await getTrendPost();
      fetchedPosts = await getHomePosts();
    } catch (err) {
      return setMessageWindow(
        "Something went wrong!",
        err.message ??
          "There is a problem to connect with server! please try again later"
      );
    }

    if (!fetchedTags.ok || !fetchedTrendPosts.ok || !fetchedPosts.ok) {
      return setMessageWindow(
        "Something went wrong!",
        "There was a problem to connect with server! please try again later"
      );
    }

    fetchedTags = await fetchedTags.json();
    fetchedTrendPosts = await fetchedTrendPosts.json();
    fetchedPosts = await fetchedPosts.json();

    setHomePosts(fetchedPosts.posts);
    setTrendPosts(fetchedTrendPosts.posts);
    setTags(fetchedTags.tags);
  };

  return (
    <section className="relative md:flex mt-4 flex-wrap width-full  px-4">
      {/* feed CONTAINER */}
      <div className="p-4 flex-column overflow-scroll justify-start lg:w-2/3">
        <div>
          <p
            onClick={fetchResources}
            className="text-black font-medium text-base"
          >
            You're may be inressted by{" "}
            {/* <span className="cursor-pointer text-red-300">[fetch data]</span>{" "} */}
          </p>
          {tags.length > 0 ? <Tags tags={tags} /> : <Loading />}
        </div>
        <div className="mt-4 ">
          <p className="text-black font-medium text-base">
            Last article you've read{" "}
            {/* <span className="cursor-pointer text-red-300">[nothing]</span>{" "} */}
          </p>
          <div>
            <div className="flex w-full items-center mt-4 overflow-scroll">
              <ArticleSlide />
            </div>
          </div>
        </div>
        <div>
          <ul id="tabs" className="inline-flex w-full  pt-2 ">
            {TABS.map((i) => {
              return (
                <li
                  onClick={() => {
                    switchTabs(i.name);
                  }}
                  key={i.name}
                  className={
                    i.current === true
                      ? classes[0].tabs.active
                      : classes[0].tabs.idle
                  }
                >
                  <p className="cursor-pointer">{i.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full">
          {homePosts.length > 0 ? (
            homePosts.map((article, index) => {
              return <ArticleCard article={article} key={index} />;
            })
          ) : (
            <div>
              <LoadingPost />
              <LoadingPost />
              <LoadingPost />
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/3 px-8 lg:px-12">
        <div className="mt-6">
          <div className=" h-48 shadow-sm  text-primary rounded relative p-6 bg-accent">
            <div className="flex-column items-center justify-center h-full">
              <h3 className=" text-md   focus: ">Welcome to MiniRead </h3>
              <div className="mt-5">
                <p className=" font-bold   mt-2">Read articles you like </p>
                <p className=" font-bold   mt-2">Write articles and share </p>
                <p className=" font-bold  mt-2">Interact with people </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-b pb-8">
          {trendPosts.length > 0 ? (
            <AlsoRead posts={trendPosts} headTitle="Trends this week " />
          ) : (
            <Loading />
          )}
        </div>

        <div className="mt-8 border-b pb-8">
          <h2 className="text-md font-semibold text-primary uppercase">
            Who to follow
          </h2>
          <div className="mt-4 hover:border rounded">
            <ProfileSide />
            <ProfileSide />
            <ProfileSide />
            <ProfileSide />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
