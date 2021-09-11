import { useState } from "react";

const HomeHandler = () => {
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
  return { TABS, switchTabs , classes };

  
};

export default HomeHandler;
