import React from "react";
import { Box } from "@mui/material";
import Profile from "../../../../components/Profile";
import Title from "../../../../components/Typography/Title";
import Text from "../../../../components/Typography/Pragraph";
import Tag from "../../../../components/Tag";
import PictureArticle from "../../../../components/Picture/PictureArticle";
import { ARTICLE } from "../../../../assets";

export default function ArticleCore() {
  return (
    <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
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
  );
}
