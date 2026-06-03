import { ThemeProvider, CssBaseline } from "@mui/material";
import Hero from "../components/Sections/Hero";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Details from "../components/Sections/Details";
import WeddingParty from "../components/Sections/Weddingparty";
import FAQ from "../components/Sections/FAQ";
import Registry from "../components/Sections/Registry";
import Contact from "../components/Sections/Contact";
import Gallery from "../components/Sections/Gallary";
import RSVP from "../components/Sections/RSVP";
import theme from "../theme";
import Timeline from "../components/Sections/Timeline";
import FadeInSection from "../components/FadeInSection";
function FrontPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection direction="up">
        <Details />
      </FadeInSection>
      <FadeInSection direction="up">
        <Timeline />
      </FadeInSection>
      <FadeInSection direction="left">
        <RSVP />
      </FadeInSection>
      <FadeInSection direction="right">
        <WeddingParty />
      </FadeInSection>
      {/* <FadeInSection direction="left">
        <Travel />
      </FadeInSection> */}
      <FadeInSection direction="right">
        <Registry />
      </FadeInSection>

      <FadeInSection direction="left">
        <FAQ />
      </FadeInSection>
      {/* <FadeInSection direction="right">
        <Gallery />
      </FadeInSection> */}
      <FadeInSection direction="up">
        <Contact />
      </FadeInSection>
      <Footer />
    </ThemeProvider>
  );
}

export default FrontPage;
