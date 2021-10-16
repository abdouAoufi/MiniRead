import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import AppIntro from "./AppInrto";
import PopulartPosts from "./PopularPosts";

function MoreInfo({ trendArticle }) {
  return (
    <Wrapper>
      <AppIntro />
      <PopulartPosts trendArticle={trendArticle}/>
    </Wrapper>
  );
}

export default MoreInfo;

const Wrapper = styled.div`
  padding-top: 24px;
  display: none;
  height: 100%;
  width: 30%;
  @media (min-width: 1024px) {
    display: block;
  }
`;
