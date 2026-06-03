// src/Pages/EnterWedding.js
import { Box, Typography, Button, Fade } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import { useState, useEffect, useRef } from "react";
const Intro = ({ handleEnterSite, isAuthorized }) => {
  const [imageVisible, setImageVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [typographyVisible, setTypographyVisible] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const imageTimer = setTimeout(() => setImageVisible(true), 8000);
    const buttonTimer = setTimeout(() => setButtonVisible(true), 11000);
    const typographyTimer = setTimeout(() => setTypographyVisible(true), 4000);
    const typographyHideTimer = setTimeout(
      () => setTypographyVisible(false),
      7000,
    );

    return () => {
      clearTimeout(typographyTimer);
      clearTimeout(typographyHideTimer);
      clearTimeout(imageTimer);
      clearTimeout(buttonTimer);
    };
  }, []);
  useEffect(() => {
    if (isAuthorized) {
      audioRef.current?.play();
    }
  }, [isAuthorized]);
  const handleClick = () => {
    audioRef.current?.play();
    handleEnterSite();
  };

  return (
    // <Fade in timeout={500}>
    <Box>
      <audio ref={audioRef} src="/Video/intro.mp4" loop />
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
            // fontSize: "1rem",
            // width: "15vw",
            // height: "5vh",
          }}
        >
          Enter Our Wedding
        </Button>
      </Box>
    </Box>
  );
};

export default Intro;
