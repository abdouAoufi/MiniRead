import React, { useEffect , useContext} from "react";
import Tags from "../../components/Tags/TagsHome";
import { TAGS } from "../../assets/assets";
import ProfilePic from "../../components/ProfilePicture/ProfilePic";
import ArticleCard from "../../components/Article/ArticleCard";
import { ARTICLES } from "../../assets/data";
import { ICONS } from "../../assets/assets";
import AlsoRead from "../../components/AlsoRead/AlsoReadMd";
import ProfileSide from "../../components/ProfileCard/ProfileSide";
import ArticleSlide from "../../components/Article/ArticleSlide";
import HomeHandler from "./HomeHandler";
import { Link } from "react-router-dom";
import Following from "./Temp/Following";
import Recomended from "./Temp/Recomended";
import { Switch, Route } from "react-router-dom";
import { LayoutContext } from "../../contexts/LayoutContext";

function Home() {
  const { TABS, switchTabs, classes } = HomeHandler();
  const { showFooter, setShowFooter } = useContext(LayoutContext);
  useEffect(() => {
    if (showFooter) {
      setShowFooter(false);
    }
  }, []);
  return (
    <section className="md:flex mt-4 flex-wrap width-full  px-4">
      {/* feed CONTAINER */}
      <div className="p-4 flex-column overflow-scroll justify-start lg:w-2/3">
        <div>
          <p className="text-black-light font-medium text-base">
            You're may be inressted by{" "}
          </p>
          <Tags tags={TAGS} />
        </div>
        <div className="mt-4 ">
          <p className="text-black-light font-medium text-base">
            Last article you've read
          </p>
          <div>
            <div className="flex w-full items-center mt-4 overflow-scroll">
              <ArticleSlide />
            </div>
          </div>
        </div>
        {/* TABS */}
        <div>
          <ul id="tabs" className="inline-flex w-full  pt-2 ">
            {TABS.map((i) => {
              return (
                <li
                  onClick={() => switchTabs(i.name)}
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
        <div className="">
          {ARTICLES.map((article, index) => {
            return <ArticleCard article={article} key={index} />;
          })}
        </div>
        {/* ARTICLES */}
      </div>
      {/* information CONTAINER */}
      <div className="hidden md:block lg:w-1/3 px-8">
        <div className="mt-6">
          <div className="5/6 h-48 shadow-sm  text-primary rounded relative p-6 bg-accent">
            <img
              src={ICONS.deltee}
              className="w-4 h-4 absolute top-4 right-4"
              alt="close"
            />
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
          <AlsoRead headTitle="Trends this week " />
        </div>

        <div className="mt-8 border-b pb-8">
          <h2 className="text-md font-semibold text-primary uppercase">
            Who to follow
          </h2>
          <div className="mt-4">
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
