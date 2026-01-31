import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e8e2d4", // wedding gold
    },
    secondary: {
      main: "#4e312d",
    },
  },
  typography: {
    //Default Body Font
    fontFamily: "Cormorant Garamond, serif",

    h1: {
      fontFamily: "Pinyon Script, cursive",
      fontWeight: 400,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "0.03em",

      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontFamily: "Pinyon Script, cursive",
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.25,

      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3.5rem",
      },
      h3: {
        fontFamily: "Pinyon Script, cursive",
        fontWeight: 300,
        fontSize: "1.50rem",

        "@media (min-width:600px)": {
          fontSize: "1.5rem",
        },
        "@media (min-width:900px)": {
          fontSize: "2.75rem",
        },
      },
    },
  },
});

export default theme;
