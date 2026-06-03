import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import video from "/public/Video/Hero.mp4";
export default function Hero() {
  const [open, setOpen] = useState(false);
  // OPTIONAL: detect scroll
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };
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
      {/* Image BACKGROUND */}
      <Box
        component="img"
        src="/Photos/Engagement/DSC02905.jpeg"
        alt="background"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
        }}
      />

      {/* BROWN TINT OVERLAY (HEX) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#42160399", // brown with opacity 42160380
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
          variant="h1"
          sx={{ color: "#e8e2d4" }}
          // sx={{
          //   fontSize: { xs: "2rem", sm: "3rem", md: "6rem" },
          //   fontWeight: 400,
          //   fontFamily: "Pinyon Script, cursive",
          // }}
        >
          Mi-Ju & Jimmy
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            opacity: 0.9,
            color: "#f2efe8",
          }}
        >
          October 05, 2026 • Rockville, Maryland
        </Typography>

        {/* <Button
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: { xs: "0.9rem", sm: "1.2rem" },
            fontFamily: "Cormorant Garamond, serif",
            color: "#f2efe8",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            borderColor: "#f2efe8",
            "&:hover": {
              borderColor: "#f2efe8",
              backgroundColor: "rgba(66, 22, 3, 0.06)",
            },
          }}
          onClick={() => scrollTo("rsvp")}
        >
          RSVP Now
        </Button> */}
      </Box>
    </Box>
  );
}
