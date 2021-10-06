import React from "react";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { DEFAULT_COLORS, TYPO_COLORS } from "../../assets";
import abdou from "../../assets/images/jpg/abdou.png"

function Profile() {
  return (
    <Box component="div" display="flex" alignItems="center" margin="6px 0">
      <Avatar
        src={abdou}
        alt="Abdou"
        sx={{ width: 48, height: 48 }}
      />

      <Box component="div" marginLeft={1}>
        <Typography
          variant="p"
          component="div"
          sx={{ color: TYPO_COLORS.balck, fontWeight: "bold" }}
        >
          Aoufi abderahmane
        </Typography>
        <Typography
           variant="body2"
          component="div"
          sx={{ color: TYPO_COLORS.lessBlack, fontSize: "12px" , fontWeight:"medium"}}
        >
          Javascript developer
        </Typography>
      </Box>
    </Box>
  );
}

export default Profile;
