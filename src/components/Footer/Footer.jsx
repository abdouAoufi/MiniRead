import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Wrapper>
      <Link to="/">
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            fontSize: "1rem",
            my: 1,
          }}
        >
          Home
        </Typography>
      </Link>
      <Link to="/about">
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            fontSize: "1rem",
            my: 1,
          }}
        >
          About us
        </Typography>
      </Link>
      <Link to="/create-article">
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: "400", fontSize: "1rem", my: 1 }}
        >
          MiniRead &copy; 2021
        </Typography>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  background-color: #eee;
  padding: 2rem 0;
`;

export default Footer;
