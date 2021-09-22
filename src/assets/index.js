import logo from "./images/svg/logo.svg";
import logo_mini from "./images/svg/logo-mini.svg";
import portait from "./images/jpeg/port.jpg";
import suggestion from "./images/jpeg/sugg.jpg";
import boy from "./images/png/boy.png";
// icons
import document from "./images/svg/document.svg";
import like from "./images/svg/like.svg";
import follwers from "./images/svg/followers.svg";
import message from "./images/svg/message.svg";
import trend from "./images/svg/trend.svg";
import star from "./images/svg/star.svg";
import recent from "./images/svg/recent.svg";
import deltee from "./images/svg/delete.svg";
import likee from "./images/svg/love.svg";
import comment from "./images/svg/comment.svg";
import save from "./images/svg/save.svg";
import share from "./images/svg/share.svg";
import write from "./images/svg/write.svg";
import stats from "./images/svg/stats.svg";
import validate from "./images/svg/validate.svg";
import error from "./images/svg/error.svg";

export const LOGO = {
  logo,
  logo_mini,
};

export const IMAGES = {
  portait,
  suggestion,
  boy,
};

export const LINKS_NAVBAR = [
  {
    name: "login",
    to: "/auth",
    current: false,
  },
  {
    name: "Home",
    to: "/",
    current: false,
  },
  {
    name: "adduserinfo",
    to: "/add-userinfo",
    current: false,
  },
  {
    name: "create post",
    to: "/create-post",
    current: false,
  },
];

export const ICONS = {
  document,
  like,
  follwers,
  message,
  trend,
  star,
  recent,
  deltee,
  likee,
  share,
  comment,
  save,
  write,
  stats,
  validate,
  error,
};

export const topicList = [
  "Web",
  "programming",
  "ml",
  "AI",
  "front end",
  "back end",
  "block chain",
  "cryptography",
  "computer science",
  "math",
  "science",
  "hand craft",
  "psychology",
  "travels",
  "politics",
  "photography",
];

export const jobsList = [{ name: "Writer" }, { name: "Programmer" }];

export const defaultprofileurl =
  "https://images.unsplash.com/photo-1631701119265-33ca2b80d00d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=453&q=80";
