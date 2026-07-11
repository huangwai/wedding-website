// export default App;
import { ThemeProvider, CssBaseline, Fade, Box } from "@mui/material";
import theme from "./theme";
import { useState } from "react";
import FrontPage from "./Pages/FrontPage";
import Intro from "./Pages/Intro";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const INTRO_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

function clearEntered() {
  localStorage.removeItem("weddingEntered");
  localStorage.removeItem("weddingEnteredTime");
}

function isEnteredValid() {
  const entered = localStorage.getItem("weddingEntered") === "true";
  const timestamp = parseInt(
    localStorage.getItem("weddingEnteredTime") || "0",
    10,
  );
  const valid = entered && Date.now() - timestamp < INTRO_DURATION_MS;
  if (!valid) clearEntered();
  return valid;
}

function App() {
  const [hasEntered, setHasEntered] = useState(() => isEnteredValid());

  const handleEnterSite = () => {
    setTimeout(() => {
      localStorage.setItem("weddingEntered", "true");
      localStorage.setItem("weddingEnteredTime", Date.now().toString());
      setHasEntered(true);
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* STEP 1: INTRO (first visit or every 24 hrs) */}
      {!hasEntered && <Intro handleEnterSite={handleEnterSite} />}

      {/* STEP 2: WEDDING SITE */}
      <Fade in={hasEntered} timeout={800}>
        <Box sx={{ display: hasEntered ? "block" : "none" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FrontPage />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
