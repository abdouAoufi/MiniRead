import React, { useState } from "react";
import Tags from "../../components/Tags/TagsHome";
import { TAGS } from "../../assets/assets";
import ProfilePic from "../../components/ProfilePicture/ProfilePic";
import ArticleCard from "../../components/Article/ArticleCard";
import { ARTICLES } from "../../assets/data";
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
      <div className="hidden md:block  border-l border-gray">
        <div className="w-80">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporexpedita dicta totam aspernatur doloremque. Excepturi iste
            iusto eosenim reprehenderit nisi, accusamus delectus nihil quis
            facere in modratione libero!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
