import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3e8cf", // wedding gold
    },
    secondary: {
      main: "#4e312d",
    },
  },
  typography: {
    //Default Body Font
    fontFamily: "Cormorant Garamond, serif",
    // fontSize: "1.25rem",

    h1: {
      fontFamily: "Pinyon Script, cursive",
      fontWeight: 500,
      fontSize: "4rem",
      lineHeight: 1.2,
      letterSpacing: "0.03em",

      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
      "@media (min-width:900px)": {
        fontSize: "5rem",
      },
    },
    h2: {
      fontFamily: "Pinyon Script, cursive",
      fontWeight: 500,
      fontSize: "3rem",
      lineHeight: 1.25,

      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
    },
    h3: {
      fontFamily: "Cormorant Garamond, serif",
      fontWeight: 500,
      fontSize: "1.8rem",

      // "@media (min-width:600px)": {
      //   fontSize: "1.25rem",
      // },
      // "@media (min-width:900px)": {
      //   fontSize: "2.50rem",
      // },
    },
    body: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "clamp(14px, 2.2vw, 22px)",
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: ".85rem",
      },
    },
  },
});

export default theme;
