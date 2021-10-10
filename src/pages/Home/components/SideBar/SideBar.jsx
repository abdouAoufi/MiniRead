import * as React from "react";
import Divider from "@mui/material/Divider";
import NavigatonList from "./NavigationList";
import TopicList from "./TopicList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import { BG_COLOR, TYPO_COLORS } from "../../../../assets";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
function SideBar(props) {
  const icons = [
    <FavoriteIcon />,
    <ChatBubbleIcon />,
    <BookmarkIcon />,
    <ShareIcon />,
  ];
  return (
    <Box
      component="div"
      sx={{
        minHeight: "100%",
        width: { xs: "auto", md: "30%" },
        borderRight: `2px solid ${BG_COLOR.grey}`,
        p: "1.5rem",
        display: { xs: "none", md: "block" },
      }}
    >
      <Box component="div">
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: TYPO_COLORS.balck }}
        >
          Navigation
        </Typography>
        {/* LIST CONTAINER */}
        <Box component="div">
          <NavigatonList />
        </Box>
      </Box>
      <Box component="div">
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: TYPO_COLORS.balck }}
        >
          Topics
        </Typography>
        {/* LIST CONTAINER */}
        <Box component="div">
          <TopicList />
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
