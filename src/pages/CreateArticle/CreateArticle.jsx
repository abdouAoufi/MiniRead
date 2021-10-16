import React, { useContext } from "react";
import CostumeButton from "../../components/CostumeButton/CostumeButton";
import { previewArticle } from "../../utils/article";
import { PreviewContext } from "../../context/articlePreview";
import Navbar from "../../components/Navbar";
import { useHistory } from "react-router-dom";

function CreateArticle() {
  const history = useHistory();
  const { setArticlePreview } = useContext(PreviewContext);
  const createArticle = () => {
    setArticlePreview(previewArticle);
    history.replace("/preview");
  };
  return (
    <div>
      <Navbar />
      <CostumeButton onClick={createArticle}>create article</CostumeButton>
    </div>
  );
}

export default CreateArticle;
