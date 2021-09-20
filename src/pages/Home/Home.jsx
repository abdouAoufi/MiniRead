import React, { useEffect, useContext, useState } from "react";
import Tags from "../../components/Tags/TagsHome";
import { print } from "../../utils/function";
// import useUpdateEffect from "../../utils/useupdateeffect";
import ArticleCard from "../../components/Article/ArticleCard";
import Loading from "../../components/Loading";
import LoadingPost from "../../components/Loading/LoadingPost";
import AlsoRead from "../../components/AlsoRead/AlsoReadMd";
import ProfileSide from "../../components/ProfileCard/ProfileSide";
import ArticleSlide from "../../components/Article/ArticleSlide";
import HomeHandler from "./HomeHandler";
import { LayoutContext } from "../../contexts/LayoutContext";
import {
  getTages,
  getTrendPost,
  getHomePosts,
  checkForAuth,
} from "../../api/homeservice";
import { WindowContext } from "../../contexts/Windowcontenxt";
import { AuthContext } from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom"

function Home() {
  const history = useHistory();
  const { TABS, switchTabs, classes } = HomeHandler();
  const { token, setLogged, userID } = useContext(AuthContext);
  const { showFooter, setShowFooter, showNavbar, setShowNavbar } =
    useContext(LayoutContext);
  const [tags, setTags] = useState([]);
  const { setMessageWindow } = useContext(WindowContext);
  const [trendPosts, setTrendPosts] = useState([]);
  const [homePosts, setHomePosts] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingSmall, setLoadingSmall] = useState(true);
  const [errorFetching, setErrorFetching] = useState(false);
  console.log(userID);
  useEffect(async () => {
    if (showFooter) {
      setShowFooter(false);
    }
    if (!showNavbar) {
      setShowNavbar(true);
    }
    fetchResources();
  }, []);

  useEffect(() => {
    print(token);
    if (token) {
      checkForAuth(token).then((result) => {
        if (result.status === 200) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      });
    } else {
      setLogged(false);
    }
  }, []);
  // useUpdateEffect(() => alert("Tags loaded successfully"), [tags]);

  const fetchResources = async () => {
    setLoadingArticles(true);
    let fetchedTags, fetchedTrendPosts, fetchedPosts;
    try {
      fetchedTags = await getTages();
      fetchedTrendPosts = await getTrendPost();
      fetchedPosts = await getHomePosts();
    } catch (err) {
      history.replace("/404")
      return setMessageWindow(
        "Something went wrong!",
        err.message ??
          "There is a problem to connect with server! please try again later"
      );
    }

    if (
      !fetchedTags.ok ||
      !fetchedTrendPosts.ok ||
      !fetchedPosts.ok ||
      fetchedPosts.length === 0
    ) {
      setLoadingArticles(false);
      setLoadingSmall(false);
      history.replace("/404")
      return setMessageWindow(
        "Something went wrong!",
        "There was a problem to connect with server! please try again later"
      );
    }

    fetchedTags = await fetchedTags.json();
    fetchedTrendPosts = await fetchedTrendPosts.json();
    fetchedPosts = await fetchedPosts.json();

    setHomePosts(fetchedPosts.articles);
    setTrendPosts(fetchedTrendPosts.articles);
    setTags(fetchedTags.tags);
    setLoadingArticles(false);
    setLoadingSmall(false);
  };

  return (
    <section className="relative md:flex mt-2 flex-wrap width-full  px-4">
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
          {loadingSmall ? <Loading /> : null}
          {<Tags tags={tags} />}
        </div>
        <div className="mt-4 ">
          <ArticleSlide />
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
          {loadingArticles ? <LoadingPost /> : null}
          {homePosts.map((article, index) => {
            return <ArticleCard article={article} key={index} />;
          })}
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
          {trendPosts?.length > 0 ? (
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
