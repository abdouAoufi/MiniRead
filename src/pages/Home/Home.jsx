import React, { useState } from "react";
import Tags from "../../components/Tags/TagsHome";
import { TAGS } from "../../assets/assets";
import ProfilePic from "../../components/ProfilePicture/ProfilePic";
import ArticleCard from "../../components/Article/ArticleCard";
import { ARTICLES } from "../../assets/data";
import { ICONS } from "../../assets/assets";
import { Link } from "react-router-dom";
import AlsoRead from "../../components/AlsoRead/AlsoReadMd";
import ProfileSide from "../../components/ProfileCard/ProfileSide";

const MYTABS = [
  {
    name: "Recommended for you",
    to: "/recommended",
    current: false,
  },
  {
    name: "Following",
    to: "/following",
    current: true,
  },
];

const classes = [
  {
    tabs: {
      active:
        "pr-4 py-2 font-semibol border-b-2  border-secondary text-gray-800 rounded-t opacity-50",
      idle: "pr-4 py-2 font-semibol  text-gray-800 rounded-t opacity-50",
    },
  },
];

function Home() {
  const [TABS, setTABS] = useState(MYTABS);
  const switchTabs = (who) => {
    let newTab = [...TABS];
    newTab = newTab.map((i) => {
      i.current = false;
      if (i.name === who) {
        i.current = true;
      }
      return i;
    });
    setTABS(newTab);
  };
  return (
    <section className="md:flex flex-wrap width-full border px-4">
      {/* feed CONTAINER */}
      <div className="p-4 flex-column justify-start lg:w-2/3">
        <div>
          <p className="text-black-light font-medium text-base">
            You're may be inressted by{" "}
          </p>
          <Tags tags={TAGS} />
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
                  <Link to={i.to}>{i.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ARTICLES */}
        <div className="">
          {ARTICLES.map((article, index) => {
            return <ArticleCard article={article} key={index} />;
          })}
        </div>
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
