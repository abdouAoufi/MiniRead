import React from "react";
import Navbar from "../../../../components/Navbar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CostumeButton from "../../../../components/CostumeButton/CostumeButton";
import { Box } from "@mui/system";

function Error() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          component="div"
          sx={{ mt: 16, mb: 4, textAlign: "center", color: "#f85959" }}
        >
          We're having trouble finding this article
        </Typography>
        <Link to="/">
          <CostumeButton>Go Home</CostumeButton>
        </Link>
      </Box>
    </Box>
  );
}

export default Error;
