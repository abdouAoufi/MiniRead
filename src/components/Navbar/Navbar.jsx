import React, { useState } from "react";
import { Box } from "@mui/system";
import { AppBar, TextField } from "@mui/material";
import { Toolbar } from "@mui/material";
import CostumeButton from "../CostumeButton/CostumeButton";
import { BG_COLOR, DEFAULT_COLORS } from "../../assets";
import styled from "styled-components";
import logo from "../../assets/images/svg/logo.svg";
import SearchBar from "../SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Drawer from "../Drawer";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const switchOpen = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: BG_COLOR.white,
        borderBottom: "2px solid #EEEEEE",
        boxShadow: 0,
      }}
      position="static"
    >
      <Drawer open={openDrawer} switchOpen={switchOpen} />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Wrapper>
          <IconButton
            onClick={switchOpen}
            aria-label="menu"
            size="large"
            sx={{ color: DEFAULT_COLORS.primary }}
          >
            <MenuIcon />
          </IconButton>
        </Wrapper>
        <Logo src={logo} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchBar />
          <CostumeButton>Log in</CostumeButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

const Logo = styled.img`
  height: 30px;
`;

const Wrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
