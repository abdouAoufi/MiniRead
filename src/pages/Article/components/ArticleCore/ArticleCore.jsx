import React, { useState } from "react";
import { Box } from "@mui/material";
import Profile from "../../../../components/Profile";
import Title from "../../../../components/Typography/Title";
import Text from "../../../../components/Typography/Pragraph";
import Tag from "../../../../components/Tag";
import PictureArticle from "../../../../components/Picture/PictureArticle";
import { ARTICLE } from "../../../../assets";
import { Redirect } from "react-router-dom";

export default function ArticleCore({ article }) {
  const [content, setContent] = useState([]);

  if (!article) {
    return <Redirect to="/" />;
  }
  return (
    <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
      <Profile />
      <Title>{article?.title}</Title>
      <Box>
        {article?.tags.map((tag) => {
          return <Tag key={tag._id}>{tag.name}</Tag>;
        })}
      </Box>
      {article?.content.data.map((section, index) => {
        return (
          <Box key={index}>
            <Text>{section.paragraph}</Text>
            {section.imageUrl ? (
              <PictureArticle image={section.imageUrl} text={article?.title} />
            ) : null}
          </Box>
        );
      })}

      <Text>{ARTICLE.text}</Text>
    </Box>
  );
}
