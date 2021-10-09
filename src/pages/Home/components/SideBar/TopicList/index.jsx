import React from "react";
import styled from "styled-components";
import { TYPO_COLORS, DEFAULT_COLORS } from "../../../../../assets";
import { List, ListItemIcon, ListItem, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoIcon from "@mui/icons-material/Info";

const NAVIGATION_LINKS = [
  { text: "Programming", link: "/home", icon: <HomeIcon /> },
  { text: "Web developement", link: "/quize-of-day", icon: <QuizIcon /> },
  { text: "Computer science", link: "/about", icon: <InfoIcon /> },
  { text: "Artificial intelligence", link: "/about", icon: <InfoIcon /> },
  { text: "Machine learning", link: "/about", icon: <InfoIcon /> },
  { text: "Maths", link: "/about", icon: <InfoIcon /> },
  { text: "Others", link: "/about", icon: <InfoIcon /> },
];
export default function index() {
  return (
    <List>
      {NAVIGATION_LINKS.map((singleLink, index) => {
        return (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: TYPO_COLORS.lessBlack }}>
              {singleLink.icon}
            </ListItemIcon>
            <ListItemText sx={{ color: TYPO_COLORS.lessBlack , }}>
              {singleLink.text}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}

const Wrapper = styled.div``;
