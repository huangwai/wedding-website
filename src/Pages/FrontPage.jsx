import { ThemeProvider, CssBaseline } from "@mui/material";
import Hero from "../components/Sections/Hero";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Details from "../components/Sections/Details";
import WeddingParty from "../components/Sections/Weddingparty";
import Travel from "../components/Sections/Travel";
import FAQ from "../components/Sections/FAQ";
import Registry from "../components/Sections/Registry";
import Contact from "../components/Sections/Contact";
import Gallery from "../components/Sections/Gallary";
import RSVP from "../components/Sections/RSVP";
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
