import * as React from "react";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import { BG_COLOR } from "../../../../assets";
function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ height: "100%", background: BG_COLOR.grey }}>
      <List sx={{}}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon
              sx={{ display: "flex", justifyContent: "center", my: 2.5 }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
