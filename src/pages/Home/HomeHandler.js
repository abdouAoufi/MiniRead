import { useState } from "react";

const HomeHandler = () => {
  const MYTABS = [
    {
      name: "Recommended topics",
      to: "/recommended",
      current: true,
    },
  ];

  const classes = [
    {
      tabs: {
        active:
          "mr-2 py-2 font-semibol border-b-2 text-center border-secondary   rounded-t text-black font-medium text-base",
        idle: "mr-2 py-2 font-semibol  text-center   rounded-t text-black font-medium text-base",
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
  return { TABS, switchTabs, classes };
};

export default HomeHandler;
