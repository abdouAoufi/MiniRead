import logo from "./images/svg/logo.svg";
import logo_mini from "./images/svg/logo-mini.svg";
import portait from "./images/jpeg/port.jpg";
import suggestion from "./images/jpeg/port.jpg";
// icons
import document from "./images/svg/document.svg";
import like from "./images/svg/like.svg";
import follwers from "./images/svg/followers.svg";
import message from "./images/svg/message.svg";
import trend from "./images/svg/trend.svg";
import star from "./images/svg/star.svg";
import recent from "./images/svg/recent.svg";
import deltee from "./images/svg/delete.svg";

export const LOGO = {
  logo,
  logo_mini,
};

export const IMAGES = {
  portait,
  suggestion,
};

export const LINKS_NAVBAR = [
  {
    name: "trend",
    to: "/timeline",
    current: false,
  },
  {
    name: "Home",
    to: "/feed",
    current: false,
  },
  {
    name: "Blogs",
    to: "/descussion",
    current: false,
  },
  {
    name: "Quizes",
    to: "/course",
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
  deltee
};

const TEXT_DATA = {
  title: "",
  content: {
    title_1: "",
    par_1: "",
    title_2: "",
    par_2: "",
    title_3: "",
    par_3: "",
  },
};
