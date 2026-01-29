import { Box, Typography, Container, Stack } from "@mui/material";

export default function Details() {
  return (
    <Box id="details" sx={{ py: 10, bgcolor: "#faf7f2" }}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Wedding Details
        </Typography>

        <Stack spacing={2}>
          <Typography>
            <strong>Ceremony:</strong> 4:30 PM
          </Typography>
          <Typography>
            <strong>Venue:</strong> Rose Garden Estate
          </Typography>
          <Typography>
            <strong>Reception:</strong> Immediately following
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
