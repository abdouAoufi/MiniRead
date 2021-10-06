import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import { Box } from "@mui/system";

function Article() {
  return (
    <>
      <Navbar />
      <Box sx={{ px: 2, py : 1 }}>
        <Profile />
      </Box>
    </>
  );
}

export default Article;
