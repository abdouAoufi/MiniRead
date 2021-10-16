import React, { useContext } from "react";
import NavigatonList from "./NavigationList";
import CategoryList from "./Category";
import { Box } from "@mui/system";
import { BG_COLOR, TYPO_COLORS } from "../../../../assets";
import { Typography } from "@mui/material";

function SideBar(props) {
  return (
    <Box
      component="div"
      sx={{
        minHeight: "100%",
        width: "auto",
        borderRight: `2px solid ${BG_COLOR.grey}`,
        p: "1.5rem",
      }}
    >
      <Box component="div">
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: TYPO_COLORS.balck }}
        >
          Navigation
        </Typography>
        <Box component="div">
          <NavigatonList />
        </Box>
      </Box>
      <Box component="div">
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: TYPO_COLORS.balck }}
        >
          Categories
        </Typography>
        <Box component="div">
          <CategoryList />
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
