import React from "react";
import styled from "styled-components";
import { TYPO_COLORS, DEFAULT_COLORS } from "../../../../../assets";
import { List, ListItemIcon, ListItem, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const NAVIGATION_LINKS = [
  { text: "Home", link: "/", icon: <HomeIcon /> },
  { text: "Quize", link: "/quize-of-day", icon: <QuizIcon /> },
  { text: "About", link: "/about", icon: <InfoIcon /> },
];
export default function index() {
  return (
    <List>
      {NAVIGATION_LINKS.map((singleLink, index) => {
        return (
          <Link to={singleLink.link} key={index}>
            <ListItem button key={index}>
              <ListItemIcon sx={{ color: DEFAULT_COLORS.secondary }}>
                {singleLink.icon}
              </ListItemIcon>
              <ListItemText sx={{ color: TYPO_COLORS.lessBlack }}>
                {singleLink.text}
              </ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}

const Wrapper = styled.div``;
