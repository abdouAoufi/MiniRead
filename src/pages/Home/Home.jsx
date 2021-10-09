import React from "react";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/system";
import SideBar from "./components/SideBar";
import ArticleList from "./components/ArticleList";
import MoreInfo from "./components/MoreInfo";

function Home() {
  return (
    <Box component="div" sx={{height : "100vh"}}>
      <Navbar />
      <Box component="div" sx={{ display: "flex" , width : "100%", height : "100%" }}>
        <SideBar />
        <ArticleList />
        <MoreInfo />
      </Box>
    </Box>
  );
}

export default Home;
