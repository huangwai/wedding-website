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
          <LockOutlinedIcon sx={{ fontSize: 48, mb: 2 }} />

          <Typography variant="h2" gutterBottom>
            Mi-Ju & Jimmy
          </Typography>

          <Typography sx={{ mb: 4 }}>
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
              sx={{ mt: 2 }}
              onClick={handlePasswordSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      )}

      {/* STEP 2: ENTER BUTTON */}
      {isAuthorized && !hasEntered && (
        <Fade in timeout={500}>
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
            {/* <Typography variant="h1" gutterBottom>
              Mi-Ju & Jimmy
            </Typography>

            <Typography sx={{ mb: 4 }}>We’re so glad you’re here 💍</Typography>

            <Button variant="contained" size="large" onClick={handleEnterSite}>
              Enter Our Wedding
            </Button> */}

            {/* Envelope */}
            <Envelope onClick={() => handleEnterSite()} />
          </Box>
        </Fade>
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
