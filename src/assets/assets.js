import logo from "./images/svg/logo.svg"
import logo_mini from "./images/svg/logo-mini.svg";
import portait from "./images/jpeg/port.jpg";
import suggestion from "./images/jpeg/port.jpg";


export const LOGO = {
    logo,
    logo_mini
}


export const IMAGES = {
    portait,
    suggestion
}


export const LINKS_NAVBAR = [{
        name: "trend",
        to: "/timeline",
        current: false
    },
    {
        name: "Home",
        to: "/feed",
        current: false
    },
    {
        name: "Blogs",
        to: "/descussion",
        current: false
    },
    {
        name: "Quizes",
        to: "/course",
        current: false
    },
];