import { Box, Typography } from "@mui/material";
import logo from "/MJLogoV2.png";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: "center",
        bgcolor: "#e8e2d4",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi-Ju & Jimmy.
      </Typography>
      <img
        src={logo}
        alt="App Logo"
        style={{ width: "70px", marginTop: "8px" }}
      />
    </Box>
  );
}
