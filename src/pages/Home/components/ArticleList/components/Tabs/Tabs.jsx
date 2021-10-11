import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TYPO_COLORS } from "../../../../../../assets";

const feedType = ["Feed", "Latest", "Top"];

export default function BasicTabs({ setCurrentSelect }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentSelect(feedType[newValue]);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="Primary tabs">
        <Tab label="Feed" sx={{ color: TYPO_COLORS.lessBlack }} />
        <Tab label="Latest" />
        <Tab label="Top" />
      </Tabs>
    </Box>
  );
}
