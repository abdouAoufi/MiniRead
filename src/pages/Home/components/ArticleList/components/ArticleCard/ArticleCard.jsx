import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { ARTICLE_CARD, TYPO_COLORS } from "../../../../../../assets";
import Profile from "../../../../../../components/Profile";
import Title from "../../../../../../components/Typography/Title";
import Tag from "../../../../../../components/Tag/Tag";
import { Typography } from "@mui/material";
import Button from "../../../../../../components/Button/Button";

function index() {
  return (
    <Wrapper>
      <ImageHeader
        src={ARTICLE_CARD.articleImageHeaderUrl}
        alt={ARTICLE_CARD.title}
      />
      <Box sx={{ mt: 2, p: 1 }} component="div">
        <Profile />
        <Box sx={{ pl: 6 }} component="div">
          <Title>Make better noise with work</Title>
          <Box component="div">
            <Tag>Javascript</Tag>
            <Tag>web</Tag>
            <Tag>typescript</Tag>
            <Tag>nodeJS</Tag>
          </Box>
          <Box>
            <Box
              component="div"
              sx={{
                mt:1,
                display: "flex",
                alignItems: "center",
                float: "right",
                pb : 1 
              }}
            >
              <Typography
                variant="body2"
                sx={{ mr: 1, color: TYPO_COLORS.lessBlack }}
              >
                4 min
              </Typography>
              <Button>Save</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default index;

const Wrapper = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  overflow: hidden;
  margin-top : 8px;
`;

const ImageHeader = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;