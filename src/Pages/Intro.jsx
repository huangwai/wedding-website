// src/Pages/EnterWedding.js
import { Box, Typography, Button, Fade } from "@mui/material";
import video from "/public/video/IMG_8053.mov";
const Intro = ({ handleEnterSite }) => {
  return (
    // <Fade in timeout={500}>
    <Box>
      {/* VIDEO BACKGROUND */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src={video}
        sx={{
          position: "absolute",
          //   inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* BROWN TINT OVERLAY (HEX) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#42160380", // brown with opacity 42160380
          zIndex: -1,
        }}
      />
      {/* CONTENT */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, sm: 4 },
          zIndex: 3,
          //   backgroundColor: "#421603",
          color: "#f2efe8",
        }}
      >
        <Typography sx={{ color: "#f2efe8" }} variant="h1" gutterBottom>
          Mi-Ju & Jimmy
        </Typography>

        <Typography sx={{ mb: 4 }}>We’re so glad you’re here 💍</Typography>

        <Button variant="outlined" size="large" onClick={handleEnterSite}>
          Enter Our Wedding
        </Button>
      </Box>
    </Box>
    // </Fade>
  );
};

export default Intro;
