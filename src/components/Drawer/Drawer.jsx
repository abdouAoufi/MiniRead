import React from "react";
import styled from "styled-components";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import { Box } from "@mui/system";
import SideBar from "../../pages/Home/components/SideBar";

function Drawerr({open , switchOpen}) {
  return (
    <Drawer anchor="left" open={open} onClose={switchOpen}>
      <SideBar />
    </Drawer>
  );
}

export default Drawerr;

const Wrapper = styled.div`
  max-width: 25%;
  text-align: center;
  height: 100%;
  width: 100%;
  border: 1px solid black;
`;
