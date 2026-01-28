import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "#f5f5f5" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Alex & Jamie
      </Typography>
    </Box>
  );
}
