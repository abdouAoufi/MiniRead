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
import styled from "styled-components";
import Resources from "./components/Resources/Resources";

export default function ArticleCore({ article }) {
  if (!article) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
        <Profile
          articleDate={
            "Posted on " + new Date(article.updatedAt).toDateString()
          }
        />
        <Typography
          fontFamily="Lora"
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
          {article?.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </Box>
        <Box mt={4} mb={4}>
          {article?.summary && <Text>{article.summary}</Text>}
        </Box>
        {article?.content.data.map((section, index) => {
          return (
            <Box key={index}>
              <Text>{section.paragraph}</Text>
              {section.imageUrl ? (
                <PictureArticle
                  image={section.imageUrl}
                  text={article?.title}
                />
              ) : null}
            </Box>
          );
        })}
        <Box mt={8}>
          {article?.conclusion && (
            <div>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                Conclusion:
              </Typography>
              <Text>{article.conclusion}</Text>
            </div>
          )}
        </Box>
        <Box>
          <Resources resources={article?.resources} />
        </Box>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Lora", serif;
`;
