import React, { useState } from "react";
import Tags from "../../components/Tags/TagsHome";
import { TAGS } from "../../assets/assets";
import ProfilePic from "../../components/ProfilePicture/ProfilePic";
import ArticleCard from "../../components/Article/ArticleCard";
import { ARTICLES } from "../../assets/data";

const MYTABS = [
  {
    name: "Recommended for you",
    to: "/timeline",
    current: false,
  },
  {
    name: "Following",
    to: "/feed",
    current: true,
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
    <div>
      {/* INNER CONTAINER */}
      <div className="p-4">
        <div>
          <p className="text-black-light font-medium text-base">
            You're may be inressted by{" "}
          </p>
          <Tags tags={TAGS} />
        </div>
        {/* TABS */}
        <div>
          <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
            {TABS.map((i) => {
              return (
                <li
                  onClick={() => switchTabs(i.name)}
                  key={i.name}
                  className={
                    i.current === true
                      ? "px-4 py-2 font-semibol border-b-2  border-secondary text-gray-800 rounded-t opacity-50"
                      : "px-4 py-2 font-semibol  text-gray-800 rounded-t opacity-50"
                  }
                >
                  <a href="#second">{i.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ARTICLES */}
        <section>
          {ARTICLES.map((article , index) => {
            return <ArticleCard article={article} key={index}/>;
          })}
        </section>
      </div>
    </div>
  );
}

export default Home;
