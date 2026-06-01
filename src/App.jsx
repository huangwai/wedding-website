import {
  ThemeProvider,
  CssBaseline,
  Fade,
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import theme from "./theme";
import { useState } from "react";
import FrontPage from "./Pages/FrontPage";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Envelope from "./components/Envelope";
import Intro from "./Pages/Intro";

const WEDDING_PASSWORD = "mj2026";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem("weddingAuthorized") === "true",
  );
  const [hasEntered, setHasEntered] = useState(
    localStorage.getItem("weddingEntered") === "true",
  );

  const handlePasswordSubmit = () => {
    if (password === WEDDING_PASSWORD) {
      localStorage.setItem("weddingAuthorized", "true");
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // const handleEnterSite = () => {
  //   localStorage.setItem("weddingEntered", "true");
  //   console.log("entering site");
  //   setHasEntered(true);
  // };
  const handleEnterSite = () => {
    console.log("entering site");

    // Delay showing the wedding site by 2 seconds
    setTimeout(() => {
      localStorage.setItem("weddingEntered", "true");
      setHasEntered(true);
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* STEP 1: PASSWORD */}
      {!isAuthorized && (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 2, sm: 4 },
          }}
        >
          <img
            src="/MJLogoV2.png"
            alt="Logo"
            height="300"
            style={{ maxWidth: "25%", height: "auto" }}
          />
          {/* <LockOutlinedIcon sx={{ fontSize: 48, mb: 2 }} /> */}

          <Typography sx={{ color: "#3b1717" }} variant="h2" gutterBottom>
            Mi-Ju & Jimmy
          </Typography>

          <Typography sx={{ mb: 4, color: "#3b1717" }}>
            Please enter the password from your invitation
          </Typography>

          <Box sx={{ width: "100%", maxWidth: 320 }}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              error={error}
              helperText={error ? "Incorrect password" : " "}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#656440",
                color: "#e8e2d4",
                fontWeight: "bold",
              }}
              onClick={handlePasswordSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      )}

      {/* STEP 2: ENTER BUTTON */}
      {isAuthorized && !hasEntered && (
        <Intro handleEnterSite={handleEnterSite} isAuthorized={isAuthorized} />
      )}

      {/* STEP 3: WEDDING SITE */}
      <Fade in={isAuthorized && hasEntered} timeout={800}>
        <Box sx={{ display: isAuthorized && hasEntered ? "block" : "none" }}>
          <FrontPage />
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
