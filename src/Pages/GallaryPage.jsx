import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme"; // adjust import to wherever your theme lives
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Gallery from "../components/Sections/Gallary";
import { useEffect } from "react";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // instant so there's no weird scroll animation on page load
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}
export default GalleryPage;
