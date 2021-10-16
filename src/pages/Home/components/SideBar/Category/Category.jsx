import React, { useContext } from "react";
import styled from "styled-components";
import { TYPO_COLORS, DEFAULT_COLORS } from "../../../../../assets";
import { List, ListItemIcon, ListItem, ListItemText } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import HttpIcon from "@mui/icons-material/Http";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import BiotechIcon from "@mui/icons-material/Biotech";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CategoryContext } from "../../../../../context/category";

const NAVIGATION_LINKS = [
  { text: "Programming", identifier: "prg", icon: <CodeIcon /> },
  {
    text: "Web developement",
    identifier: "web",
    icon: <WebIcon />,
  },
  {
    text: "Computer science",
    identifier: "cs",
    icon: <ComputerIcon />,
  },
  { text: "Networking", identifier: "net", link: "/about", icon: <HttpIcon /> },
  {
    text: "Artificial intelligence",
    identifier: "ai",
    icon: <BiotechIcon />,
  },
  {
    text: "Others",
    identifier: "oth",
    icon: <MoreHorizIcon />,
  },
];
export default function index() {
  const { setCategory } = useContext(CategoryContext);
  return (
    <List>
      {NAVIGATION_LINKS.map((singleLink, index) => {
        return (
          <ListItem
            button
            onClick={() => setCategory(singleLink.identifier)}
            key={index}
          >
            <ListItemIcon sx={{ color: TYPO_COLORS.lessBlack }}>
              {singleLink.icon}
            </ListItemIcon>
            <ListItemText sx={{ color: TYPO_COLORS.lessBlack }}>
              {singleLink.text}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}

const Wrapper = styled.div``;
