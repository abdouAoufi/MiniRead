import React, { useContext, useState } from "react";
import CostumeButton from "../../components/CostumeButton/CostumeButton";
import { previewArticle, initialPreviewArticle } from "../../utils/article";
import { PreviewContext } from "../../context/articlePreview";
import Navbar from "../../components/Navbar";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function CreateArticle() {
  const history = useHistory();
  const { setArticlePreview } = useContext(PreviewContext);
  const [article, setArticle] = useState(initialPreviewArticle);
  const [sectionOne, setSectionOne] = useState({ paragraph: "", imageUrl: "" });
  const [sectionTwo, setSectionTwo] = useState({ paragraph: "", imageUrl: "" });
  const [tags, setTags] = useState("");

  const handleInput = (e) => {
    let updateArticle = { ...article };
    updateArticle[e.target.name] = e.target.value;
    setArticle(updateArticle);
  };

  const handleArticleInfo = (e) => {
    let updateArticle = { ...article };
    updateArticle.articleinfo[e.target.name] = e.target.value;
    setArticle(updateArticle);
  };

  const handleSection = (e) => {
    switch (e.target.name) {
      case "sectionOne":
        const currentSectionOne = { ...sectionOne };
        currentSectionOne.paragraph = e.target.value;
        setSectionOne(currentSectionOne);
        break;
      case "ImageOne":
        const updateUrlOne = { ...sectionOne };
        updateUrlOne.imageUrl = e.target.value;
        setSectionOne(updateUrlOne);
        break;
      case "sectionTwo":
        const currentSectionTwo = { ...sectionTwo };
        currentSectionTwo.paragraph = e.target.value;
        setSectionTwo(currentSectionTwo);
        break;
      case "ImageTwo":
        const updateImageTwo = { ...sectionTwo };
        updateImageTwo.imageUrl = e.target.value;
        setSectionTwo(updateImageTwo);
        break;

      default:
        break;
    }
  };

  const insertContent = () => {
    if (sectionOne.paragraph) {
      let updateArticle = { ...article };
      updateArticle.content.data = [sectionOne];
      setArticle(updateArticle);
    }
    if (sectionTwo.paragraph) {
      let updateArticle = { ...article };
      updateArticle.content.data = [sectionOne, sectionTwo];
      setArticle(updateArticle);
    }
  };

  const handleTags = (e) => {
    let tagsInput = e.target.value;
    setTags(tagsInput);
  };

  const insertTags = () => {
    const tagsList = tags.split("-");
    let updateArticle = { ...article };
    updateArticle.tags = tagsList;
    setArticle(updateArticle);
  };

  const previewCurrentArticle = () => {
    insertContent();
    setArticlePreview(article);
    // console.log(article)
    history.replace("/preview");
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          px: { xs: 4, md: 12 },
          pt: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
        <p>basic information</p>
          <TextField
            variant="outlined"
            placeholder="title"
            name="title"
            value={article.title}
            onChange={handleInput}
            sx={{ width: "100%", mt: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder="category"
            name="category"
            value={article.category}
            onChange={handleInput}
            sx={{ width: "100%", mt: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder="popularity"
            name="popularity"
            value={article.popularity}
            onChange={handleInput}
            sx={{ width: "100%", mt: 1 }}
          />

          <TextField
            variant="outlined"
            placeholder="tags"
            name="tags"
            value={tags}
            onChange={handleTags}
            sx={{ width: "100%", mt: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder="Image header url"
            name="imageHeaderUrl"
            value={article.imageHeaderUrl}
            onChange={handleInput}
            sx={{ width: "100%", mt: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder="summary"
            name="summary"
            value={article.summary}
            onChange={handleInput}
            sx={{ width: "100%", mt: 1 }}
          />
          <TextField
            variant="outlined"
            placeholder="conclusion"
            name="conclusion"
            value={article.conclusion}
            onChange={handleInput}
            sx={{ width: "100%", mt: 1 }}
          />
        </Box>
        <p>article information</p>

        <TextField
          variant="outlined"
          placeholder="time reading"
          name="timeReading"
          value={article.articleinfo.timeReading}
          onChange={handleArticleInfo}
          sx={{ width: "100%", mt: 4 }}
        />

        <TextField
          variant="outlined"
          placeholder="topic"
          name="topic"
          value={article.articleinfo.topic}
          onChange={handleArticleInfo}
          sx={{ width: "100%", mt: 1 }}
        />
        <p>section 1 </p>

        <TextField
          rows={6}
          multiline
          variant="outlined"
          placeholder="paragraph 1"
          name="sectionOne"
          value={sectionOne.paragraph}
          onChange={handleSection}
          sx={{ width: "100%", mt: 4 }}
        />
        <TextField
          variant="outlined"
          placeholder="image url 1"
          name="ImageOne"
          value={sectionOne.imageUrl}
          onChange={handleSection}
          sx={{ width: "100%", mt: 1 }}
        />
        <p>section 2 </p>
        <TextField
          rows={6}
          multiline
          variant="outlined"
          placeholder="paragraph 2"
          name="sectionTwo"
          value={sectionTwo.paragraph}
          onChange={handleSection}
          sx={{ width: "100%", mt: 4 }}
        />
        <TextField
          variant="outlined"
          placeholder="Image url 2"
          name="ImageTwo"
          value={sectionTwo.imageUrl}
          onChange={handleSection}
          sx={{ width: "100%", mt: 1 }}
        />

        <Box component="div" mt={4}></Box>
        <CostumeButton onClick={insertTags}>push</CostumeButton>
        <Box component="div" mt={1}></Box>
        <CostumeButton onClick={previewCurrentArticle}>
          preview article
        </CostumeButton>
      </Box>
    </Box>
  );
}

export default CreateArticle;

// const createArticle = () => {
//   setArticlePreview(previewArticle);
//   history.replace("/preview");
// };
