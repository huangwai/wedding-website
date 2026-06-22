// src/Pages/Intro.jsx
import { Box, Typography, Button } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Intro = ({ handleEnterSite }) => {
  const [started, setStarted] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [typographyVisible, setTypographyVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    const timers = [
      setTimeout(() => setTypographyVisible(true), 4000),
      setTimeout(() => setTypographyVisible(false), 7000),
      setTimeout(() => setImageVisible(true), 11000),
      setTimeout(() => setButtonVisible(true), 11000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [started]);

  const handleStart = () => {
    audioRef.current?.play();
    setStarted(true);
  };

  const handleClick = () => {
    audioRef.current?.play();
    handleEnterSite();
  };

  return (
    <Box>
      <audio ref={audioRef} src="/Video/intro.mp4" loop />

      {/* ── Gate ── */}
      {!started && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3b1717",
          }}
        >
          {/* <img
            src="/MJLogoV2.png"
            alt="Logo"
            style={{ maxWidth: "160px", marginBottom: "2rem", opacity: 0.9 }}
          /> */}
          <Button
            variant="outlined"
            size="large"
            onClick={handleStart}
            sx={{
              color: "#f2efe8",
              borderColor: "#f2efe8",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: "bold",
              letterSpacing: "0.15em",
            }}
          >
            Enter Our Wedding
          </Button>
        </Box>
      )}

      {/* ── Intro sequence (only after gate click) ── */}
      {started && (
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#3b1717",
            color: "#f2efe8",
          }}
        >
          <Card
            sx={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#f2efe8",
                opacity: typographyVisible ? 1 : 0,
                transition: "opacity 1s ease",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                width: "100%",
                textAlign: "center",
              }}
              gutterBottom
            >
              Welcome
            </Typography>
            <CardMedia
              component="img"
              image="/Photos/IntroImage.png"
              alt="Reception venue"
              sx={{
                maxHeight: "100vh",
                maxWidth: "100vw",
                opacity: imageVisible ? 1 : 0,
                transition: "opacity 1s ease",
              }}
            />
          </Card>

          <Button
            variant="outlined"
            size="large"
            onClick={handleClick}
            sx={{
              opacity: buttonVisible ? 1 : 0,
              transition: "opacity 1s ease",
              fontWeight: "bold",
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            More Details
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Intro;
