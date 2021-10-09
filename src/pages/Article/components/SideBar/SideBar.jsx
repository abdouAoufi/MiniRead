import * as React from "react";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import { BG_COLOR, TYPO_COLORS } from "../../../../assets";
import { Typography } from "@mui/material";
function SideBar(props) {
  const icons = [
    <FavoriteIcon />,
    <ChatBubbleIcon />,
    <BookmarkIcon />,
    <ShareIcon />,
  ];
  return (
    <Box sx={{ height: "100%", background: BG_COLOR.grey }}>
      <List>
        {["12", "22", "9", "1"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon
              sx={{ display: "flex", justifyContent: "center", my: 2.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  placeItems: "center",
                }}
              >
                {icons[index]}
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    color: TYPO_COLORS.black,
                    fontWeight: "semibold",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
