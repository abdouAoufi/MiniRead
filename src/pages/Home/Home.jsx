import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/system";
import SideBar from "./components/SideBar";
import ArticleList from "./components/ArticleList";
import MoreInfo from "./components/MoreInfo";
import styled from "styled-components";
import { getArticles, getLatestArticlesDB } from "../../api/home";
import { searchArticleDB } from "../../api/article";
import { getArticleByCategoryDB } from "../../api/article";
import Tabs from "./components/ArticleList/components/Tabs";
import { CategoryContext } from "../../context/category";
import Loading from "../../components/Loading";

function Home() {
  const [articleList, setArticleList] = useState([]);
  const [trendArticle, setTrendList] = useState([]);
  const { category, setCategory, keyWord, setKeyWord } =
    useContext(CategoryContext);

  const setCurrentSelect = (selected) => {
    setArticleList([]);
    switch (selected) {
      case "Feed":
        setCategory("");
        getArticlesHome();
        break;
      case "Latest":
        getLatestArticles();
        break;
    }
  };

  const getArticlesHome = () => {
    if (keyWord) {
      return searchArticles();
    }
    if (category) {
      return getArticleByCategory();
    }
    getArticles().then((response) => {
      response.json().then((data) => {
        setTrendList(data.trendArticle);
        setArticleList(data.articles);
      });
    });
  };

  const searchArticles = () => {
    setArticleList([]);
    searchArticleDB(keyWord).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setKeyWord("");
          setArticleList(data.articles);
        });
      }
    });
  };
  const getLatestArticles = () => {
    getLatestArticlesDB().then((response) => {
      if (response.ok) {
        response.json().then((articlesData) => {
          setArticleList(articlesData.articles);
        });
      }
    });
  };

  const getArticleByCategory = () => {
    setArticleList([]);
    getArticleByCategoryDB(category).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setArticleList(data.articles);
        });
      }
    });
  };

  useEffect(getArticlesHome, [category, keyWord]);

  return (
    <Wrapper>
      <Navbar />
      <Box
        component="div"
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Box sx={{ width: "30%", display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: "50%" }}>
          <Tabs setCurrentSelect={setCurrentSelect} />
          {articleList.length > 0 ? (
            <ArticleList articleList={articleList} />
          ) : (
            <Box textAlign="center">
              <Loading />
            </Box>
          )}
        </Box>
        <MoreInfo trendArticle={trendArticle} />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100vh;
  position: relative;
  overflow: auto;
`;

export default Home;
