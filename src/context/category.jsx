import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [keyWord, setKeyWord] = useState("");

  return (
    <CategoryContext.Provider
      value={{ category, setCategory, keyWord, setKeyWord }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
