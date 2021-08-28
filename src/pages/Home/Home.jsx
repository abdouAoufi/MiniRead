import React, { useState } from "react";
import Tags from "../../components/Tags/TagsHome";
import { TAGS } from "../../assets/assets";
import ProfilePic from "../../components/ProfilePicture/ProfilePic";
import ArticleCard from "../../components/Article/ArticleCard";
import { ARTICLES } from "../../assets/data";
import { ICONS } from "../../assets/assets";
import { Link } from "react-router-dom";

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
    <section className="md:flex width-full border justify-between lg:px-8">
      {/* feed CONTAINER */}
      <div className="p-4">
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
      <div className="hidden md:block w-80">
        <div className="mt-6">
          {/* <div className="5/6 h-48 border rounded relative p-4">
            <img
              src={ICONS.deltee}
              className="w-4 h-4 absolute top-4 right-4"
              alt="close"
            />
            <div className="flex-column items-center justify-center   h-full">
              <h3 className=" text-md  text-black ">Welcome to MiniRead </h3>

              <div className="mt-3">
                <p className=" font-bold text-sm  text-black-light mt-2">
                  Read articles you like{" "}
                </p>
                <p className=" font-bold text-sm  text-black-light mt-2">
                  Write articles and share{" "}
                </p>
                <p className=" font-bold text-sm  text-black-light mt-2">
                  Interact with people{" "}
                </p>
              </div>
            </div>
          </div> */}
          <button className="btn btn-primary loading bg-black-light border-0">
            {" "}
            hello{" "}
          </button>
          <div className="avatar">
            <div className="w-16 h-16">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
            </div>
          </div>
          <div className="artboard">
            <div className="alert alert-success">hi three</div>
          </div>
          <div className="avatar">
            <div className="mb-8 rounded-btn w-14 h-14">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
            </div>
          </div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
             
              <li>
                <a>Documents</a>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
          <div class="badge badge-xs bg-black-light"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
