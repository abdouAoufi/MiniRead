import { useState } from "react";

const HomeHandler = () => {
  const MYTABS = [
    {
      name: "Recommended for you",
      to: "/recommended",
      current: true,
    }
  ];

  const classes = [
    {
      tabs: {
        active:
          "mr-2 py-2 font-semibol border-b-2 text-center border-secondary text-gray-800 rounded-t opacity-50",
        idle: "mr-2 py-2 font-semibol  text-center text-gray-800 rounded-t opacity-50",
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
