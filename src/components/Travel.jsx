import { Box, Typography, Container } from "@mui/material";

export default function Travel() {
  return (
    <Box id="travel" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Travel & Stay
        </Typography>
        <Typography>
          We recommend staying in downtown Leesburg. Hotel blocks and
          transportation details coming soon.
        </Typography>
      </Container>
    </Box>
  );
}
