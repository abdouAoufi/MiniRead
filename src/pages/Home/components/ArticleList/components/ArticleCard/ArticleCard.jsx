import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  ARTICLE_CARD,
  TYPO_COLORS,
  DEFAULT_COLORS,
} from "../../../../../../assets";
import Profile from "../../../../../../components/Profile";
import Title from "../../../../../../components/Typography/Title";
import Tag from "../../../../../../components/Tag/Tag";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function index({ article }) {
  if (!article) {
    return <p>Error fetching article</p>;
  }
  

  return (
    <Wrapper>
      <Link to={`article/${article._id}`}>
        <ImageHeader src={article.imageHeaderUrl} alt={article.title} />
      </Link>
      <Box sx={{ mt: 2, p: 1 }} component="div">
        <Profile />

        <Box sx={{ pl: 6 }} component="div">
          <Link to={`article/${article._id}`}>
            <Title>{article?.title}</Title>
          </Link>
          <Box component="div">
            {article?.tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
            })}
          </Box>
          <div>
            <Box
              component="div"
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                float: "right",
                pb: 1,
              }}
            >
              <Typography variant="body2" sx={{ mr: 1 }} color="text.secondary">
                {article?.articleinfo.timeReading} min
                <Box paddingX={1} component="span"> &#183; </Box> web
                <Box paddingX={1} component="span"> &#183; </Box>{" "}
                {new Date(article.updatedAt).toDateString()}
              </Typography>
            </Box>
          </div>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default index;

const Wrapper = styled.div`
  border: 1px solid #c4c4c4;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 8px;
`;

const ImageHeader = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
