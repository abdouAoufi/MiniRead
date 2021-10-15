import React, { useState } from "react";
import { Box } from "@mui/material";
import Profile from "../../../../components/Profile";
import Title from "../../../../components/Typography/Title";
import Subtitle from "../../../../components/Typography/Subtitle";
import Text from "../../../../components/Typography/Pragraph";
import Tag from "../../../../components/Tag";
import PictureArticle from "../../../../components/Picture/PictureArticle";
import { Redirect } from "react-router-dom";
import { Typography } from "@mui/material";

export default function ArticleCore({ article }) {
  if (!article) {
    return <Redirect to="/" />;
  }
  return (
    <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
      <Profile />
      <Typography
        variant="h3"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: "bold",
          lineHeight: "3.3rem",
          mt: 2,
        }}
      >
        {article?.title}
      </Typography>
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
      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          More resources about this article :
        </Typography>
        <Box>{/* // TODO resources */}</Box>
      </Box>
    </Box>
  );
}
