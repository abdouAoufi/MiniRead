import React, { useEffect, useContext } from "react";
import { Box } from "@mui/system";
import Navbar from "../../components/Navbar";
import ArticleCore from "../Article/components/ArticleCore";
import Loading from "../../components/Loading";
import { PreviewContext } from "../../context/articlePreview";
import { useHistory } from "react-router-dom";

const PreviewArticle = () => {
  const history = useHistory()
  const { articlePreview } = useContext(PreviewContext);
  useEffect(() => {
    if (!articlePreview) {
      return history.replace("/")
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        {articlePreview ? (
          <ArticleCore article={articlePreview} />
        ) : (
          <Box sx={{ minWidth: "65%" }}>
            <Loading />
          </Box>
        )}
      </Box>
    </>
  );
};

export default PreviewArticle;
