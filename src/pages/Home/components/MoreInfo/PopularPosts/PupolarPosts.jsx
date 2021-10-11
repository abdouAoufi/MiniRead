import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { TYPO_COLORS } from "../../../../../assets";

function index() {
  return (
    <Box marginTop="1rem">
      <Typography
        variant="body1"
        sx={{ color: TYPO_COLORS.balck, fontWeight: "bold" }}
      >
        Popular this week <span>&#128293;</span>
      </Typography>
      <Box sx={{ pl: 1 }}>
        <Typography
          variant="body1"
          sx={{ color: TYPO_COLORS.lessBlack, mt: 1 }}
        >
          How to make robust web app with react?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: TYPO_COLORS.lessBlack, mt: 1 }}
        >
          why javascript is so popular?
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: TYPO_COLORS.lessBlack, mt: 1 }}
        >
          Write unit test with JEST.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: TYPO_COLORS.lessBlack, mt: 1 }}
        >
          How deno js deal with dependecies?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: TYPO_COLORS.lessBlack, mt: 1 }}
        >
          How to make robust web app with react?
        </Typography>
      </Box>
    </Box>
  );
}

export default index;
