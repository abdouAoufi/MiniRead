import React from "react";
import styled from "styled-components";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import { Box } from "@mui/system";

function SideBar() {
  return (
    <Wrapper>
      <Drawer anchor="left" open={true}>
        <Box sx={{minWidth : "300px"}}>
          <List>home</List>
        </Box>
      </Drawer>
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
  max-width: 25%;
  text-align: center;
  height: 100%;
  width: 100%;
  border: 1px solid black;
`;
