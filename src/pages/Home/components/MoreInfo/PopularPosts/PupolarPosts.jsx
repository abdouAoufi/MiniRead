import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { TYPO_COLORS } from "../../../../../assets";
import { Link } from "react-router-dom";

function index({ trendArticle }) {
  return (
    <Box marginTop="1rem">
      <Typography
        variant="body1"
        sx={{
          color: TYPO_COLORS.balck,
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
      >
        Popular this week <span>&#128293;</span>
      </Typography>
      <Box sx={{ pl: 1 }}>
        {trendArticle.map((article) => {
          return (
            <Link key={article._id} to={`article/${article._id}`}>
              <Typography
                variant="body1"
                sx={{ color: TYPO_COLORS.lessBlack, mt: 1 }}
              >
                {article.title}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default index;
