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
        px: 2,
      }}
    >
      <Typography variant="h1">Mi-Ju & Jimmy</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        October 05, 2026 • Rockville, Maryland
      </Typography>
    </Box>
  );
}
