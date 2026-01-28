import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Details from "./pages/Details";
import WeddingParty from "./pages/Weddingparty";
import Travel from "./pages/Travel";
import FAQ from "./pages/FAQ";
import Registry from "./pages/Registry";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallary";
import RSVP from "./pages/RSVP";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/details" element={<Details />} />
        <Route path="/party" element={<WeddingParty />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}
