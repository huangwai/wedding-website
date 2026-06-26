import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3e8cf",
    },
    secondary: {
      main: "#4e312d",
    },
  },
  typography: {
    fontFamily: "Cormorant Garamond, serif",

    h1: {
      fontFamily: "Pinyon Script, cursive",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.03em",
      fontSize: "3rem",
      "@media (min-width:600px)": { fontSize: "4rem" },
      "@media (min-width:900px)": { fontSize: "5rem" },
    },
    h2: {
      fontFamily: "Pinyon Script, cursive",
      fontWeight: 500,
      lineHeight: 1.25,
      fontSize: "2.25rem",
      "@media (min-width:600px)": { fontSize: "3rem" },
      "@media (min-width:900px)": { fontSize: "4rem" },
    },
    h3: {
      fontFamily: "Cormorant Garamond, serif",
      fontWeight: 500,
      fontSize: "1.4rem",
      "@media (min-width:600px)": { fontSize: "1.6rem" },
      "@media (min-width:900px)": { fontSize: "1.8rem" },
    },
    h4: {
      fontFamily: "Cormorant Garamond, serif",
      fontWeight: 600,
      fontSize: "1.1rem",
      "@media (min-width:600px)": { fontSize: "1.25rem" },
      "@media (min-width:900px)": { fontSize: "1.4rem" },
    },
    h5: {
      fontFamily: "Cormorant Garamond, serif",
      fontWeight: 600,
      fontSize: "1rem",
      "@media (min-width:600px)": { fontSize: "1.1rem" },
      "@media (min-width:900px)": { fontSize: "1.2rem" },
    },
    h6: {
      fontFamily: "Cormorant Garamond, serif",
      fontWeight: 600,
      fontSize: "0.9rem",
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.1rem" },
    },
    body1: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "0.95rem",
      lineHeight: 1.7,
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.1rem" },
    },
    body2: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "0.85rem",
      lineHeight: 1.6,
      "@media (min-width:600px)": { fontSize: "0.9rem" },
      "@media (min-width:900px)": { fontSize: "1rem" },
    },
    caption: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "0.75rem",
      "@media (min-width:600px)": { fontSize: "0.8rem" },
      "@media (min-width:900px)": { fontSize: "0.85rem" },
    },
    overline: {
      fontFamily: "Cormorant Garamond, serif",
      fontSize: "0.7rem",
      letterSpacing: "0.15em",
      "@media (min-width:600px)": { fontSize: "0.75rem" },
      "@media (min-width:900px)": { fontSize: "0.8rem" },
    },
  },
});

export default theme;
