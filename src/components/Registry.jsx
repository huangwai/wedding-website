import { Box, Typography, Container, Stack, Button } from "@mui/material";

export default function Registry() {
  return (
    <Box id="registry" sx={{ py: 10 }}>
      <Container maxWidth="sm" textAlign="center">
        <Typography variant="h2" gutterBottom>
          Registry
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Your presence is the greatest gift of all. If you’d like to give
          something extra, we’ve registered at the stores below.
        </Typography>

        <Stack spacing={2}>
          <Button
            variant="outlined"
            href="https://www.zola.com"
            target="_blank"
          >
            Zola
          </Button>

          <Button
            variant="outlined"
            href="https://www.target.com"
            target="_blank"
          >
            Target
          </Button>

          <Button
            variant="outlined"
            href="https://www.amazon.com"
            target="_blank"
          >
            Amazon
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
