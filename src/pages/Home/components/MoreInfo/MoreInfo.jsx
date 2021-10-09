import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";

function MoreInfo() {
  return <Wrapper>more info ....</Wrapper>;
}

export default MoreInfo;

const Wrapper = styled.div`
  width: 100%;
  display : none;
  text-align: center;
  height : 100%;
  max-width: 25%;
  @media (min-width: 768px){
    display : block;
  }
`;
