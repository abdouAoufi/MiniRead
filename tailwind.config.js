const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        104: "26rem",
      },
      colors: {
        // Configure your color palette here
        primary: {
          light: "#b3bcf5",
          DEFAULT: "#364f6b",
          dark: "#202e78",
        },
        secondary: {
          light: "#77FAC6",
          DEFAULT: "#00beb0",
          dark: "#2186A3",
        },
        accent: {
          light: "#F1F1E6",
          DEFAULT: "#FFF7d6",
          dark: "#e3c4a8",
        },
        black: { light: "#6b7280", DEFAULT: "#40514e", dark: "#000000" },
        gray: "#f8f8f8",
        graymodal: "#2d767f",
        boldGray: "#c4c4c4",
      },
    },

    screen: {
      xsm: "400px",
      sm: "512px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    minHeight: {
      14: "56px",

      0: "0",

      "1/4": "25%",

      "1/2": "50%",

      "3/4": "75%",

      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
};
