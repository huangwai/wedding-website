import { Box, Typography } from "@mui/material";
import logo from "/MJLogoV2.png";
import FadeInSection from "./FadeInSection";
export default function Footer() {
  return (
    <Box
      sx={{
        py: { xs: 1, sm: 2 },
        px: { xs: 1, sm: 2 },
        textAlign: "center",
        bgcolor: "#e8e2d4",
      }}
    >
      {/* <FadeInSection direction="down" delay={300}> */}
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi-Ju & Jimmy.
      </Typography>
      {/* </FadeInSection> */}
      {/* <FadeInSection direction="up" delay={300}> */}
      <img
        src={logo}
        alt="App Logo"
        style={{ width: "70px", marginTop: "8px" }}
      />
      {/* </FadeInSection> */}
    </Box>
  );
}
