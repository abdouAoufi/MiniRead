import React, { useEffect, useState, useContext } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import AboutMe from "./components/Aboutme";
import ArticleCore from "./components/ArticleCore";
import { useParams, useHistory, Link } from "react-router-dom";
import { getSigleArticle } from "../../api/article";
import Loading from "../../components/Loading";
import { PreviewContext } from "../../context/articlePreview";
import Footer from "../../components/Footer";

function Article() {
  const { articlePreview } = useContext(PreviewContext);

  const articleID = useParams().id;
  if (!articleID || articleID.length <= 12) {
    return (
      <>
        <Navbar />
        <Typography
          variant="body2"
          component="div"
          sx={{ mt: 16, textAlign: "center", color: "#f85959" }}
        >
          We're having trouble finding this article
        </Typography>
        <Link to="/">
          <Typography
            sx={{
              mt: 2,
              textAlign: "center",
              color: "#364f6b",
              fontWeight: "bold",
            }}
          >
            Go Home
          </Typography>
        </Link>
      </>
    );
  }
  const fetchSingleArticle = () => {
    if (articlePreview) {
      return setArticle(articlePreview);
    }
    getSigleArticle(articleID)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setArticle(data.article);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(fetchSingleArticle, []);
  const [article, setArticle] = useState(null);
  return (
    <>
      <Navbar />
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        {article ? (
          <ArticleCore article={article} />
        ) : (
          <Box sx={{ minWidth: "65%" }}>
            <Loading />
          </Box>
        )}
        <Box sx={{ px: { xs: 2, md: 1 } }}>
          <AboutMe />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Article;
