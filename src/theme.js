import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e7ab5", // soft lavender
    },
    secondary: {
      main: "#d4af37", // gold accent
    },
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
    h1: {
      fontWeight: 600,
    },
  },
});

export default theme;
