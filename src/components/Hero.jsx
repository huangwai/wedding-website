import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 8, sm: 12, md: 16 },
      }}
    >
      {/* VIDEO BACKGROUND */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src="../../public/Video/Hero.mp4"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* BROWN TINT OVERLAY (HEX) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#42160380", // brown with opacity
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: 600,
          }}
        >
          Mi-Ju & Jimmy
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            opacity: 0.9,
          }}
        >
          October 05, 2026 • Rockville, Maryland
        </Typography>
      </Box>
    </Box>
  );
}
