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
        src="../../dist/MJLogoV2.png"
        alt="Wedding Rings"
        style={{ width: "50px", marginTop: "8px" }}
      />
    </Box>
  );
}
