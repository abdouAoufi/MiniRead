import React from "react";
import { Typography } from "@mui/material";
import { TYPO_COLORS } from "../../assets";

export default function Text({ children }) {
  return (
    <Typography
      fontFamily="Lora"
      variant="body1"
      sx={{
        color: TYPO_COLORS.black,
        lineHeight: "1.85rem",
        mt: 2,
        fontSize: "1.2rem",
      }}
    >
      {children}
    </Typography>
  );
}
