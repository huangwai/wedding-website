import { Box, Typography, Container, Stack, Button } from "@mui/material";

export default function Registry() {
  return (
    <Box id="registry" sx={{ py: { xs: 8, sm: 10 }, bgcolor: "#faf7f2" }}>
      <Container maxWidth="sm" textAlign="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Registry
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Your presence is the greatest gift, but if you wish to give, we are
          registered at:
        </Typography>

        <Stack spacing={2}>
          <Button variant="outlined" href="#" target="_blank">
            Zola
          </Button>
          <Button variant="outlined" href="#" target="_blank">
            Crate & Barrel
          </Button>
          <Button variant="outlined" href="#" target="_blank">
            Amazon
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
