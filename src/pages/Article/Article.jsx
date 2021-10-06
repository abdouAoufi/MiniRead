import React from "react";
import { Box } from "@mui/system";
import { ARTICLE } from "../../assets";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import Title from "../../components/Typography/Title";
import Tag from "../../components/Tag";
import Text from "../../components/Typography/Pragraph";
import PictureArticle from "../../components/Picture";

function Article() {
  return (
    <>
      <Navbar />
      <Box sx={{ px: 2, py: 2 }}>
        <Profile />
        <Title>How to use async/await inside loops in JavaScript </Title>
        <Tag>Javascript</Tag>
        <Tag>Front end</Tag>
        <Text>{ARTICLE.text}</Text>
        <PictureArticle
          image={ARTICLE.picture}
          text="Async/Await in Javascript"
        />
        <Text>{ARTICLE.text}</Text>
      </Box>
    </>
  );
}

export default Article;
