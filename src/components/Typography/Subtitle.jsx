import React from "react";
import { Typography } from "@mui/material";
import { DEFAULT_COLORS, TYPO_COLORS } from "../../assets";

export default function Subtitle({ children }) {
  return (
    <Typography
      variant="h5"
      component="p"
      sx={{
        color: TYPO_COLORS.lessBlack,
        fontWeight: "medium",
        lineHeight: "1.0rem",
        mt: 1,
      }}
    >
      {children}
    </Typography>
  );
}
