import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c8a97e", // wedding gold
    },
    secondary: {
      main: "#6b4f4f",
    },
  },
  typography: {
    fontFamily: "Playfair Display, serif",
    h1: { fontSize: "3rem", fontWeight: 600 },
    h2: { fontSize: "2.2rem", fontWeight: 500 },
  },
});

export default theme;
