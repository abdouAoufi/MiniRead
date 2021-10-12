import React from "react";
import { Typography } from "@mui/material";
import { TYPO_COLORS } from "../../../assets";
import { Style } from "@mui/icons-material";
import { Box } from "@mui/material";

function Outlined({ children }) {
  return (
    <Typography
      variant="body1"
      component="p"
      sx={{
        mr: 1,
        mt: 1,
        color: TYPO_COLORS.lessBlack,
        cursor: "pointer",
        lineHeight: "1.6rem",
        fontWeight: "500",
        display: "inline-block",
        border: "1.5px solid #c4c4c4",
        borderRadius: "6px",
        p: 1,
      }}
    >
      {children}
    </Typography>
  );
}

export default Outlined;
