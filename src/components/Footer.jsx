import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: "center",
        bgcolor: "#f3ede6",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi-Ju & Jimmy.
      </Typography>
      <img
        src="../../public/MJLogoV2.png"
        alt="App Logo"
        style={{ width: "70px", marginTop: "8px" }}
      />
    </Box>
  );
}
