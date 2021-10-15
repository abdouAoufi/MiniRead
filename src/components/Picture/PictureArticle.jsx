import React from "react";
import { TYPO_COLORS } from "../../assets";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function PictureArticle({ image, text }) {
  return (
    <Box borderRadius="8px">
      <CardMedia
        sx={{ overflow: "hidden", borderRadius: "8px" }}
        component="img"
        image={image}
        alt={text}
      />
      {text && (
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: TYPO_COLORS.lessBlack,
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
}
