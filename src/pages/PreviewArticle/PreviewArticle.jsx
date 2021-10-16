import React, { useEffect, useContext } from "react";
import { Box } from "@mui/system";
import Navbar from "../../components/Navbar";
import ArticleCore from "../Article/components/ArticleCore";
import Loading from "../../components/Loading";
import { PreviewContext } from "../../context/articlePreview";
import { useHistory } from "react-router-dom";
import CostumeButton from "../../components/CostumeButton/CostumeButton";
import { createArticle } from "../../api/admin";

const PreviewArticle = () => {
  const history = useHistory();
  const { articlePreview } = useContext(PreviewContext);
  useEffect(() => {
    if (!articlePreview) {
      return history.replace("/");
    }
  }, []);

  const publishArticle = () => {
    createArticle(articlePreview).then((response) => {
      if (response.status === 201) {
        history.push("/");
      }
    });
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        {articlePreview ? (
          <>
            <ArticleCore article={articlePreview} />
            <CostumeButton onClick={publishArticle}>
              publish article
            </CostumeButton>
          </>
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
