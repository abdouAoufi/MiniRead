import React from "react";
import { Typography } from "@mui/material";
import { TYPO_COLORS } from "../../assets";

export default function Text({ children }) {
  return (
    <Typography
      paragraph
      sx={{ color: TYPO_COLORS.black, lineHeight: "1.6rem", mt: 2 }}
    >
      {children}
    </Typography>
  );
}
