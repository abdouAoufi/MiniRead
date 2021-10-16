import React, { createContext, useState } from "react";

export const PreviewContext = createContext();

export const PreviewContextProvider = ({ children }) => {
  const [articlePreview, setArticlePreview] = useState(null);

  return (
    <PreviewContext.Provider value={{ articlePreview, setArticlePreview }}>
      {children}
    </PreviewContext.Provider>
  );
};
