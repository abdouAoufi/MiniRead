import HomeIcon from "@mui/icons-material/Home";

export const DEFAULT_COLORS = Object.freeze({
  primary: "#364f6b",
  secondary: "#00bBb0",
  accent: "#fff7d6",
  darker: {
    secondary: "#0da89e",
  },
});

export const TYPO_COLORS = Object.freeze({
  balck: "#3f3b3b",
  lessBlack: "#575151",
});

export const BG_COLOR = Object.freeze({
  white: "#ffffff",
  grey: "#f0f0f0",
});

export const ARTICLE = {
  text: "Iterating through items and dealing with asynchronous logic (i.e. API calls) are probably \
    two of the most common tasks we have to perform as JavaScript devs. In this article, we will\
    discuss the best approaches to combine async/await and iterative logic. There will be a time \
    when you would want to run async operations inside for loops (or any type of other loops). \
    Let’s take a look at how to deal with such situations. In the code above we have a simple async \
    function called someFunction, it takes in an array as a parameter, \
    iterates the array and for each item makes an API request (via out fake API function). \
    In this case, we want to resolve the API calls in sequence.\
    We want our output to print the following",
  picture:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Bmlbt1w2sj1QBwMvw3ZjQQHaDt%26pid%3DApi&f=1",
};


