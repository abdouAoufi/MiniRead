import React from "react";
import styled from "styled-components";
import ArticleCard from "./components/ArticleCard";
import Tabs from "./components/Tabs";

function ArticleList() {
  const setCurrentSelect = (selected) => {
    console.log(selected);
  };
  return (
    <Wrapper>
      <Tabs setCurrentSelect={setCurrentSelect} />
      <ArticleCard />
    </Wrapper>
  );
}

export default ArticleList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;
