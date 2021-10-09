import React from "react";
import { Box } from "@mui/system";
import Navbar from "../../components/Navbar";
import SideBar from "./components/SideBar";
import AboutMe from "./components/Aboutme";
import ArticleCore from "./components/ArticleCore";

function Article() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Box>
        <ArticleCore />
        <Box>
          <AboutMe />
        </Box>
      </Box>
    </>
  );
}

export default Article;
