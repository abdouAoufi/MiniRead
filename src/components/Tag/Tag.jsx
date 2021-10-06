import React from "react";
import { Typography } from "@mui/material";
import { TYPO_COLORS } from "../../assets";
import { Style } from "@mui/icons-material";

export default function Tag({ children }) {
  return (
    <Typography
      variant="body2"
      component="p"
      sx={{
        mr: 1,
        mt:1,
        color: TYPO_COLORS.lessBlack,
        cursor: "pointer",
        lineHeight: "1.6rem",
        display: "inline-block"
      }}
    >
      #{children}
    </Typography>
  );
}
