import { ThemeProvider, CssBaseline } from "@mui/material";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Details from "../components/Details";
import WeddingParty from "../components/Weddingparty";
import Travel from "../components/Travel";
import FAQ from "../components/FAQ";
import Registry from "../components/Registry";
import Contact from "../components/Contact";
import Gallery from "../components/Gallary";
import RSVP from "../components/RSVP";
import theme from "../theme";
function FrontPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Details />
      <WeddingParty />
      <Travel />
      <Registry />
      <FAQ />
      <Gallery />
      <RSVP />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default FrontPage;
