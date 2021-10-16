import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
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
import { Typography } from "@mui/material";
import CostumeButton from "../../components/CostumeButton/CostumeButton";

function Home() {
  const [articleList, setArticleList] = useState([]);
  const [trendArticle, setTrendList] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const { category, setCategory, keyWord, setKeyWord } =
    useContext(CategoryContext);

  const setCurrentSelect = (selected) => {
    resetList();
    switch (selected) {
      case "Feed":
        getArticlesHome();
        break;
      case "Latest":
        getLatestArticles();
        break;
    }
  };

  const getArticlesHome = () => {
    resetList();
    getArticles().then((response) => {
      response.json().then((data) => {
        setLoading(false);
        setTrendList(data.trendArticle);
        setArticleList(data.articles);
      });
    });
  };

  const searchArticles = () => {
    resetList();
    searchArticleDB(keyWord).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          if (data.articles.length === 0) {
            return setIsNotFound(true);
          }
          setLoading(false);
          setArticleList(data.articles);
        });
      } else {
        setLoading(false);
        setIsNotFound(true);
      }
    });
  };

  const getArticleByCategory = () => {
    resetList();
    getArticleByCategoryDB(category).then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json().then((data) => {
          setLoading(false);
          setArticleList(data.articles);
        });
      }
    });
  };

  const getLatestArticles = () => {
    getLatestArticlesDB().then((response) => {
      if (response.ok) {
        response.json().then((articlesData) => {
          setLoading(false);
          setArticleList(articlesData.articles);
        });
      }
    });
  };

  const resetList = () => {
    setLoading(true);
    setIsNotFound(false);
    setArticleList([]);
  };

  useLayoutEffect(() => {
    if (category) return;
    if (keyWord) return;
    getArticlesHome();
  }, []);

  useEffect(() => {
    if (category) {
      getArticleByCategory();
      return function () {
        setCategory(null);
      };
    }
  }, [category]);

  useEffect(() => {
    if (keyWord) {
      searchArticles();
      return function () {
        setKeyWord(null);
      };
    }
  }, [keyWord]);

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
        <Box sx={{ width: "25%", display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: "50%" }}>
          <Tabs setCurrentSelect={setCurrentSelect} />
          {articleList.length > 0 ? (
            <ArticleList articleList={articleList} />
          ) : null}
          {loading ? (
            <Box>
              <Loading />
            </Box>
          ) : null}
          {isNotFound ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                placeItems: "center",
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{ mt: 16, textAlign: "center", color: "#f85959", fontWeight : "600" }}
              >
                Sorry! we couldn't find any article 
              </Typography>
              <Box marginTop={4}>
                <CostumeButton
                  onClick={() => {
                    getArticlesHome();
                  }}
                >
                  {" "}
                  Go home
                </CostumeButton>
              </Box>
            </Box>
          ) : null}
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
