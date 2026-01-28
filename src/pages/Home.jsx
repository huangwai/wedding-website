import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>
        Mi-Ju & Jimmy
      </Typography>
      <Typography variant="h5">October 05, 2026 • Rockville, MD</Typography>

      <Box sx={{ mt: 4 }}>
        <Typography>
          We’re so excited to celebrate our special day with you.
        </Typography>
      </Box>
    </Container>
  );
}
