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
    fontFamily: "Playfair Display, serif",
    h1: { fontSize: "3rem", fontWeight: 600 },
    h2: { fontSize: "2.2rem", fontWeight: 500 },
  },
});

export default theme;
