import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 8, sm: 12, md: 16 },
        bgcolor: "white",
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
        sx={{ mt: 2, fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
      >
        October 05, 2026 • Rockville, Maryland
      </Typography>
    </Box>
  );
}
