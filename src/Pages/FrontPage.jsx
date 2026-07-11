import { ThemeProvider, CssBaseline, Fade } from "@mui/material";
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
// import Timeline from "../components/Sections/Timeline";
import FadeInSection from "../components/FadeInSection";
import ImageViewOne from "../components/Sections/ImageViewOne";
import ImageViewSection from "../components/Sections/ImageViewSection";
import DressCode from "../components/Sections/DressCode";
import TimelineV2 from "../components/Sections/TimelineV2";
function FrontPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Details />
      <TimelineV2 />
      <RSVP />
      <Registry />
      <ImageViewOne />
      {/* <WeddingParty /> */}

      <ImageViewSection />
      <DressCode />
      <FAQ />
      <Gallery />
      <Contact />

      <Footer />
    </ThemeProvider>
  );
}

export default FrontPage;
