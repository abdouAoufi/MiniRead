import React from "react";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/system";
import SideBar from "./components/SideBar";
import ArticleList from "./components/ArticleList";
import MoreInfo from "./components/MoreInfo";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Box
        component="div"
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Box sx={{ width: "35%", display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Box>
        <ArticleList />
        <MoreInfo />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100vh;
  position: relative;
  overflow: auto;
`;

export default Home;
