import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import CostumeButton from "../../components/CostumeButton/CostumeButton";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          height: "90vh",
          width: "100vw",
          display: "grid",
          placeItems: "center",
          alignItems: "center",
        }}
      >
        <Stack alignItems="center">
          <Typography
            variant="h5"
            marginBottom="1rem"
            color="#ce4545"
            component="div"
          >
            Sorry! No quize for today.
          </Typography>
          <Link to="/">
            <CostumeButton>Home</CostumeButton>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}
