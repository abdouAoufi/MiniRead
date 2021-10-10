import React from "react";
import styled from "styled-components";
import ArticleCard from "./components/ArticleCard";
import Tabs from "./components/Tabs";
import { Box } from "@mui/material";

function ArticleList() {
  const setCurrentSelect = (selected) => {
    console.log(selected);
  };
  return (
    <Wrapper>
      <Tabs setCurrentSelect={setCurrentSelect} />
      <Box sx={{ mt: 1, p: 1 }}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Box>
    </Wrapper>
  );
}

export default ArticleList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;
