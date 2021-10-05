import React from "react";
import Paper from "@mui/material/Paper";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BG_COLOR, TYPO_COLORS } from "../../assets";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import styled from "styled-components";


function SearchBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Wrapper>
      <Paper
        component="form"
        sx={{
          color: BG_COLOR.grey,
          border: 2,
          boxShadow: 0,
          display: "flex",
          alignItems: "center",
          width: 200,
        }}
      >
        <InputBase
          size="small"
          sx={{ flex: 1, p: "0 8px", color: TYPO_COLORS.balck }}
          placeholder="Search articles"
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
