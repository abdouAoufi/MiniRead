import React from "react";
import styled from "styled-components";
import ArticleCard from "./components/ArticleCard";
import Tabs from "./components/Tabs";
import { Box } from "@mui/material";

function ArticleList({ articleList }) {
  return (
    <Wrapper>
      <Box sx={{ mt: 1, p: 1 }}>
        {articleList.map((article) => {
          return <ArticleCard article={article} key={article._id} />;
        })}
      </Box>
    </Wrapper>
  );
}

export default ArticleList;

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
`;
