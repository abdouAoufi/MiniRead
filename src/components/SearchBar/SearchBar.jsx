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
          width: { xs: 130, md: 220 },
        }}
      >
        <InputBase
          size="small"
          sx={{
            flex: 1,
            p: { xs: "0 8px", md: "0 12px" },
            color: TYPO_COLORS.balck,
          }}
          placeholder="Search"
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
  /* @media (min-width: 768px) {
    display: block;
  } */
`;
