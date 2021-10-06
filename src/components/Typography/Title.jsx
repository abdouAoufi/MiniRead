import React from "react";
import { Typography } from "@mui/material";
import { DEFAULT_COLORS , TYPO_COLORS} from "../../assets";

export default function Title({ children }) {
  return (
    <Typography
      variant="h5"
      component="p"
      sx={{ color: TYPO_COLORS.balck, fontWeight: "bold" , lineHeight : "1.7rem" , mt : 2 }}
    >
      {children}
    </Typography>
  );
}
