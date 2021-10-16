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
  { text: "Programming", link: "/home", icon: <CodeIcon /> },
  { text: "Web developement", link: "/quize-of-day", icon: <WebIcon /> },
  { text: "Computer science", link: "/about", icon: <ComputerIcon /> },
  { text: "Networking", link: "/about", icon: <HttpIcon /> },
  { text: "Artificial intelligence", link: "/about", icon: <BiotechIcon /> },
  { text: "Others", link: "/about", icon: <MoreHorizIcon /> },
];
export default function index() {
  const { setCategory } = useContext(CategoryContext);
  return (
    <List>
      {NAVIGATION_LINKS.map((singleLink, index) => {
        return (
          <ListItem
            button
            onClick={() => setCategory(singleLink.text)}
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
