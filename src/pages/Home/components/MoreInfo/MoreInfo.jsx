import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import AppIntro from "./AppInrto";
import PopulartPosts from "./PopularPosts";

function MoreInfo() {
  return (
    <Wrapper>
      <AppIntro />
      <PopulartPosts />
    </Wrapper>
  );
}

export default MoreInfo;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  display: none;
  height: 100%;
  max-width: 25%;
  @media (min-width: 1024px) {
    display: block;
  }
`;
